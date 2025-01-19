/* eslint-disable camelcase */
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'My PWA App',
        short_name: 'PWA',
        description: 'A Progressive Web App built with Vite',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icons/money-bag-256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: '/icons/money-bag-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
    eslintPlugin({
      emitWarning: false,
    }),
  ],
});
