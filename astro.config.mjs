import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://karihaji.github.io',
  base: '/travel-agency-astro/',
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()],
  },
});