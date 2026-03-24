import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Use the repo subpath only for production builds (GitHub Pages project site).
  base: command === 'build' ? '/public-web-JF/' : '/',
  plugins: [react()],
}))
