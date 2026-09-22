import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindInit from '@tailwindcss/vite'

const tailwind = tailwindInit.default || tailwindInit

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwind(),
  ],
})
