import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    port: 5173,
  },
  build: {
    outDir: 'dist',
  },
})