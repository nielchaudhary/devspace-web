import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three', 'three-globe'],
          react: ['react', 'react-dom', 'react-router-dom'],
          r3f: ['@react-three/fiber', '@react-three/drei'],
          globe: ['./src/data/globeData.ts'],
        },
      },
    },
    chunkSizeWarningLimit: 500,
  },
  optimizeDeps: {
    include: ['three', 'three-globe'],
  },
});
