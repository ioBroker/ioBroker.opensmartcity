import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    // admin/index_m.html is served as /adapter/opensmartcity/index_m.html, all assets are relative to it
    base: './',
    build: {
        outDir: 'build',
    },
    server: {
        // index.html loads socket.io.js from the admin on port 8081, when it runs on port 3000
        port: 3000,
        proxy: {
            '/adapter': {
                target: 'http://localhost:8081',
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
