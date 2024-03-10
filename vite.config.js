import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePluginRadar } from 'vite-plugin-radar';

export default defineConfig({
  plugins: [
    react(),
    VitePluginRadar({
      analytics: {
        id: 'G-DZF8EPTCVT', // Google Analytics Measurement ID
      },
    }),
  ],
});
