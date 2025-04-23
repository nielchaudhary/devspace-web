import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split three.js into core and extras
          if (id.includes('three/src/Three.js')) {
            return 'three-core';
          }
          if (id.includes('three/examples/jsm/')) {
            return 'three-extras';
          }
          if (id.includes('three-globe')) {
            return 'three-globe';
          }
          if (id.includes('@react-three/fiber') || id.includes('@react-three/drei')) {
            return 'r3f';
          }
          if (id.includes('node_modules/react')) {
            return 'react-vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 2000, // Accept larger chunks for 3D libs
  },
  optimizeDeps: {
    include: ['three', 'three/examples/jsm/controls/OrbitControls', 'three-globe'],
    exclude: ['three/examples/jsm/'],
  },
});
