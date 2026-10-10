// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    outDir: './website',
    markdown: {
        shikiConfig: {
            theme: 'night-owl-light',
        },
    },
    redirects: {
        '/': '/blog',
    }
});
