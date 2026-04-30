import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  /**
   * Ключевое изменение: Устанавливаем базовый путь '/promo/'.
   * Теперь Vite будет генерировать пути к скриптам как /promo/assets/...
   * и Nginx сможет правильно перенаправлять эти запросы на порт 3001.
   */
  base: '/promo/',

  plugins: [react()],
  resolve: {
    alias: {
      // Поддержка алиаса @ для структуры проекта (FSD/DDD)
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Автоматическое подключение глобальных переменных в каждый компонент
        // Используем современный синтаксис Dart Sass
        additionalData: `@use "@/app/styles/variables.scss" as *;`,
      },
    },
  },
  build: {
    // Гарантируем, что билд будет чистым и предсказуемым
    outDir: 'dist',
    emptyOutDir: true,
    // Убираем хеширование имен файлов, если нужно более простое управление в Nginx,
    // но для продакшена лучше оставить стандартные настройки (с хешами).
  },
  server: {
    // Настройки для локальной разработки, чтобы порт совпадал с тем, что ждет Nginx
    port: 3001,
    strictPort: true,
  }
});