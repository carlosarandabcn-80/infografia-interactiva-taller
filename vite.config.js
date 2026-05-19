import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' permite publicar en GitHub Pages aunque el repositorio tenga cualquier nombre.
export default defineConfig({
  plugins: [react()],
  base: './',
})