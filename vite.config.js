import { fileURLToPath, URL } from "node:url";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";

// 当前工作目录路径
const root = process.cwd();

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 环境变量
  const env = loadEnv(mode, root, "");
  return {
    base: env.VITE_BASE_URL || "/",
    plugins: [
      vue(),
      vueJsx(),
      Components({
        resolvers: [VantResolver()]
      }),
      // 允许 setup 语法糖上添加组件名属性
      vueSetupExtend(),
      // svg icon
      createSvgIconsPlugin({
        // 指定图标文件夹
        iconDirs: [path.resolve(root, "src/icons/svg")],
        // 指定 symbolId 格式
        symbolId: "icon-[dir]-[name]"
      })
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    },
    server: {
      host: true
    }
  };
});
