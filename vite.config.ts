import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 3000, // Cambiamos al puerto 3000
    strictPort: true, // Fuerza el uso de este puerto específico
  },
});