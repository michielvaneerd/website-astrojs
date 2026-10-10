// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    markdown: {
        shikiConfig: {
            theme: 'night-owl-light',
        },
    },
    // redirects: {
    //     '/tags/[...tag]': '/tags/[tag]/1',
    // }
});
