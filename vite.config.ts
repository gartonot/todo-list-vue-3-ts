import * as path from 'path'; 
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{
      find: '@', replacement: path.resolve(__dirname, 'src'),
    }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/variables.scss"; @import "@/assets/scss/media.scss";',
      }
    }
  }
})
