import { defineConfig } from 'astro/config';

export default defineConfig({
    output: 'static',
    build: {
        assets: '_astro'
    },
    server: {
        port: 4321
    }
});