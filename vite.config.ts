import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/qu-ng-l-th-p/', // CRITICAL for GitHub Pages
    server: {
        port: 3000,
        host: true
    }
})
