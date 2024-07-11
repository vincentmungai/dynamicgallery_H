import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: vercel(),
    devToolbar: {
        enabled: false
    },
    vite: {
        build: {
            rollupOptions: {
                // Input configuration for rollup (no need to include specific images here)
            },
            assetsInclude: ['**/*.jpeg', '**/*.jpg', '**/*.png', '**/*.gif', '**/*.webp'],
        },
    },
    buildOptions: {
        sitemap: false,
        // Other build options if needed
    },
    // Other configurations if needed
});
