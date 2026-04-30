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
FROM nginx:stable-alpine AS runtime

# Настройка таймзоны
ENV TZ=Europe/Moscow
RUN apk add --no-cache tzdata && \
    ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && \
    echo $TZ > /etc/timezone

# Переходим в директорию nginx
WORKDIR /usr/share/nginx/html

# ВАЖНО: Копируем статику из dist в подпапку /promo.
# Это решает проблему MIME type "text/html", так как пути к ассетам
# теперь будут начинаться с /promo/assets/... и совпадать с файловой системой.
COPY --from=build /app/dist ./promo

# Создаем конфигурацию Nginx для работы внутри контейнера.
# 1. Слушаем порт 3000.
# 2. Обрабатываем запросы в location /promo/.
# 3. try_files обеспечивает работу SPA-роутинга (fallback на index.html).
RUN echo 'server { \
    listen 3000; \
    root /usr/share/nginx/html; \
    location /promo/ { \
        index index.html; \
        try_files $uri $uri/ /promo/index.html; \
    } \
    # Редирект с корня контейнера на /promo/ для стабильности \
    location = / { \
        return 301 /promo/; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Сервис внутри контейнера работает на порту 3000
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]