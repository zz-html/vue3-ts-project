import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
import path from 'path'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  //outputDir:'vite-web',//打包的时候生成的一个文件名
  //publicPath: process.env.NODE_ENV === 'production'?'./':'/vite-web',  
  //base: '/vite-web/',
  build: {
    outDir:'rule-system',
  },
  base: process.env.NODE_ENV === 'production'?'./':'/rule-system',
  server: {
    // 配置开发服务器的端口
    port: 3000,

    // 配置开发服务器的主机
    host: '0.0.0.0',
  },
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})