import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: process.env.NODE_ENV === 'production' ? process.env.VITE_API_URL : 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/api/, ''),
      },
    },
  },
});
