import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import yaml from '@rollup/plugin-yaml';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        yaml(),
        react(),
    ],
    base: "/ble-services/"
})
