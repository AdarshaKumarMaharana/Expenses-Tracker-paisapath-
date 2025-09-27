import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  console.log("Loaded ENV from vite.config.js:", env)  // 👈 check here

  return {
    plugins: [react(), tailwindcss()],
  }
})
