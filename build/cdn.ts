import { cdn } from "vite-plugin-cdn2";

export function enableCDN(isEnabled: string) {
  if (isEnabled === "true") {
    return cdn({
      // url 可以更换为私有或其他源
      // url: "https://cdn.jsdelivr.net/npm/",
      url: "https://unpkg.com/",
      modules: ["vue", "vue-demi", "pinia", "axios", "vant", "vue-router"]
    });
  }
}
