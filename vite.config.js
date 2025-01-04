import {defineConfig} from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    base: '/',
    plugins: [
        VitePWA({
            injectRegister: 'auto',
            registerType: 'autoUpdate',
            devOptions: {
                enabled: true
            },
            includeAssets: ['favicon.svg'],
            manifest: {
                name: 'Installable PWA of bilibili',
                short_name: "PWA-bilibili",
                theme_color: "#e87c93",
                scope: "https",
                start_url: "./",
                display: "standalone",
                background_color: "#e87c93",
                icons: [
                    {
                        src: "favicon.svg",
                        sizes: "16x16 32x32 48x48 64x64 128x128 256x256 512x512",
                        type: "image/svg+xml",
                        purpose: "any",
                    },
                ],
            },
        })
    ],
});