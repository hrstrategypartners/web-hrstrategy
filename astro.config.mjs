import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hrstrategypartners.com.ar',
  integrations: [sitemap({ filter: (page) => !page.includes('/privacidad') })],
  vite: {
    plugins: [tailwindcss()]
  }
});
