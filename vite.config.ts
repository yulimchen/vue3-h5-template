import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";
import mockDevServerPlugin from "vite-plugin-mock-dev-server";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    mockDevServerPlugin(),
    // vant 组件自动按需引入
    Components({
      resolvers: [VantResolver()]
    }),
    // svg icon
    createSvgIconsPlugin({
      // 指定图标文件夹
      iconDirs: [path.resolve(process.cwd(), "src/icons/svg")],
      // 指定 symbolId 格式
      symbolId: "icon-[dir]-[name]"
    }),
    // 允许 setup 语法糖上添加组件名属性
    vueSetupExtend(),
    // 生产环境 gzip 压缩资源
    viteCompression()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  server: {
    // 仅在 proxy 中配置的代理前缀， mock-dev-server 才会拦截并 mock
    // doc: https://github.com/pengzhanbo/vite-plugin-mock-dev-server
    proxy: {
      "^/dev-api": {
        target: ""
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]"
      }
    }
  }
});
