import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/trip/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        edinburgh: 'edinburgh/index.html',
        kirkbyLonsdale: 'kirkby-lonsdale/index.html',
        bilbao: 'bilbao/index.html',
      },
    },
  },
});