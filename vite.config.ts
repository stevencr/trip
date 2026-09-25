import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const pages = {
  main: new URL('./index.html', import.meta.url).pathname,
  edinburgh: new URL('./edinburgh/index.html', import.meta.url).pathname,
  kirkbyLonsdale: new URL('./kirkby-lonsdale/index.html', import.meta.url).pathname,
  bilbao: new URL('./bilbao/index.html', import.meta.url).pathname,
};

export default defineConfig({
  base: '/trip/',
  plugins: [react()],
  build: {
    rolldownOptions: {
      input: pages,
    },
  },
});