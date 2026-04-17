# --- Stage 1: Build ---
FROM node:22-alpine AS build
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем весь код лендинга
COPY . .

# Собираем проект (благодаря base: '/promo/' в vite.config, пути сгенерятся правильно)
RUN npm run build

# --- Stage 2: Runtime ---
FROM node:22-alpine AS runtime
WORKDIR /app

# Устанавливаем serve
RUN npm install -g serve

# Копируем собранную статику
COPY --from=build /app/dist ./dist

# Настройка таймзоны
ENV TZ=Europe/Moscow
RUN apk add --no-cache tzdata && \
    ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && \
    echo $TZ > /etc/timezone

# Внутри контейнера сервис также будет работать на порту 3000
EXPOSE 3000

# Запускаем статику. Флаг -s перенаправляет все ненайденные роуты на index.html
CMD ["serve", "-s", "dist", "-l", "3000"]