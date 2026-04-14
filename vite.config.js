import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    modulePreload: { polyfill: false },
    // Silence the 500 KB warning — our heic2any chunk is intentionally large and lazy-loaded.
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          // Firebase (auth + firestore + app) — lazy-loaded, kept in its own chunk so it never
          // enters the critical path for anonymous visitors.
          if (id.includes('firebase') || id.includes('@firebase')) return 'firebase-vendor'
          // Router is tiny but shared across every route — split so it caches independently.
          if (id.includes('react-router')) return 'router-vendor'
          // React core — very cacheable, rarely changes between deploys.
          if (id.includes('/react/') || id.includes('/react-dom/') || id.includes('/scheduler/')) {
            return 'react-vendor'
          }
          // Image-processing deps that are only used after the user uploads files.
          if (id.includes('smartcrop') || id.includes('jszip') || id.includes('file-saver')) {
            return 'image-vendor'
          }
          // Vercel telemetry — tiny but we still want it out of the main chunk.
          if (id.includes('@vercel/analytics') || id.includes('@vercel/speed-insights')) {
            return 'telemetry-vendor'
          }
        },
      },
    },
  },
})
