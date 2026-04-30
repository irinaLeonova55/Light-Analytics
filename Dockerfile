# --- Stage 1: Build ---
FROM node:22-alpine AS build
WORKDIR /app

# Используем преимущества кэширования слоев Docker
COPY package*.json ./
RUN npm ci

# Копируем остальной код и собираем
COPY . .
RUN npm run build

# --- Stage 2: Runtime (Nginx) ---
# Nginx гораздо эффективнее для отдачи статики, чем node.js
FROM nginx:stable-alpine AS runtime

# Настройка таймзоны (как в вашем исходном файле)
ENV TZ=Europe/Moscow
RUN apk add --no-cache tzdata && \
    ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && \
    echo $TZ > /etc/timezone

# Копируем собранную статику из папки dist (стандарт Vite)
# в стандартную директорию Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Создаем конфигурацию для корректной работы React-роутинга (SPA)
RUN echo 'server { \
    listen 3000; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Сервис будет работать на порту 3000
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]