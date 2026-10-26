import { defineConfig } from 'vite'

export default defineConfig({
  base: '/zyrax-studio/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
