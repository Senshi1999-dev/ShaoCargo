import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    sourcemap: false,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      external: ['nodemailer'], // 🧠 Не включать nodemailer в клиентский bundle
    },
  },
  optimizeDeps: {
    exclude: ['nodemailer'], // 🧠 Не пытаться оптимизировать nodemailer
  },
});
