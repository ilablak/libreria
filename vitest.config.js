import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
    test: {
        clearMocks: true,
        globals: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
})
