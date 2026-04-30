import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  // Устанавливаем относительные пути для корректной работы в Docker/Nginx
  base: './',
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
        additionalData: `@use "@/app/styles/variables.scss" as *;`,
      },
    },
  },
  build: {
    // Гарантируем, что билд будет чистым и предсказуемым
    outDir: 'dist',
    emptyOutDir: true,
  },
});