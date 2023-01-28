import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
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
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
});
