import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({

    //  pwa plugin setup
    plugins: [
        VitePWA({

            //  PWA mode
            registerType: 'autoUpdate',

            //  workbox options
            workbox: {
                cleanupOutdatedCaches: false, 
            },

            //  included assets
            includeAssets: [
                'favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png',
            ],

            //  manifest
            manifest: {
                name: 'vite-pwa',
                short_name: 'vite-pwa',
                theme_color: '#646cff',
                background_color: '#f5f5f5',
                display: 'standalone',
                description: 'Install the PWA application almost in the same way as the native application. How cool isn\'t it?',
                icons: [
                    {
                        src: 'android-chrome-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: 'android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                ],
                screenshots: [
                    {
                        src: 'screenshot_01.jpg',
                        sizes: '405x878',
                        type: 'image/jpg',
                    },
                    {
                        src: 'screenshot_02.jpg',
                        sizes: '405x878',
                        type: 'image/jpg',
                    },
                ],
            },
        }),
    ],

    //  url base
    base: '/vite-pwa/',

    //  dev server
    server: {
        watch: {
            usePolling: true,
        },
    },
});