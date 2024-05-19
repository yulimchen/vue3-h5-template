import { cdn } from "vite-plugin-cdn2";
import { unpkg } from "vite-plugin-cdn2/resolver/unpkg";

export function enableCDN(isEnabled: string) {
  if (isEnabled === "true") {
    return cdn({
      resolve: unpkg(),
      modules: ["vue", "vue-demi", "pinia", "axios", "vant", "vue-router"]
    });
  }
}
