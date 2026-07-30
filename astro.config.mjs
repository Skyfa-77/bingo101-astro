import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',

  build: {
      assets: '_astro'
  },

  server: {
      port: 4321
  },

  adapter: cloudflare()
});