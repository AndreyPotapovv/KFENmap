import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // позволяет слушать внешний IP
    allowedHosts: ['.ngrok-free.app'], // разрешить все ngrok-домены
  },
})
