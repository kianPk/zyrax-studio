import { defineConfig } from 'vite'

export default defineConfig({
  base: '/zyrax-studio/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    target: 'es2022',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three')) return 'three'
          if (id.includes('node_modules/gsap') || id.includes('node_modules/lenis')) {
            return 'motion'
          }
        },
      },
    },
  },
})
