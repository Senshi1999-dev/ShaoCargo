import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',           // уменьшает размер
    sourcemap: false,           // отключает карты — они не нужны на проде
    chunkSizeWarningLimit: 500  // предупреждение, если файл >500кб
  }
})
