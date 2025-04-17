import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import myPlugin from './vitePlugin/myPlugin'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: ['a']
    }
  },
  plugins: [vue(),myPlugin(['a'])],
})
