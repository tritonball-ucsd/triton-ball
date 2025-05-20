import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: (import.meta as any).env.MODE === 'production' ? '/triton-ball/' : '/',
  plugins: [react()],
})