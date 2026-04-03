import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Файл будет автоматически добавляться в начало каждого вашего scss-файла
        additionalData: `@use "@/app/styles/variables.scss" as *;
        @use "@/app/styles/mixins.scss" as *;`,
      },
    },
  },
});
