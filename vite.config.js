import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {visualizer} from "rollup-plugin-visualizer"

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      visualizer({
        open: true, // Auto-open the report in your browser
        filename: "bundle-stats.html", // Output file name
        gzipSize: true, // Show gzip-compressed sizes
        brotliSize: true, // Show brotli-compressed sizes
      }),
    ],
    esbuild: {
      drop: mode === 'production' ? ['console'] : [], // Remove console in production
    },
    // Proxy server for development, to bypass CORS issues
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:5173/',
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
    // build: {
    //   rollupOptions: {
    //     output: {
    //       manualChunks: {
    //         'react-vendor': ['react', 'react-dom'],
    //         'router-vendor': ['react-router-dom'],
    //         'theme-context': ['./src/context/ThemeContext.js'],
    //         'auth-context': ['./src/context/AuthContext/index.jsx'],
    //       }
    //     }
    //   }
    // }
  }
})
