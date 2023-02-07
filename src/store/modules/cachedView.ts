import { defineStore } from "pinia";
import { store } from "@/store";
import type { toRouteType } from "@/router";

export const useCachedViewStore = defineStore({
  id: "cached-view",
  state: () => ({
    // 缓存页面 keepAlive
    cachedViewList: [] as string[]
  }),
  actions: {
    addCachedView(view: toRouteType) {
      // 不重复添加
      if (this.cachedViewList.includes(view.name as string)) return;
      if (!view?.meta?.noCache) {
        this.cachedViewList.push(view.name as string);
      }
    },
    delCachedView(view: toRouteType) {
      const index = this.cachedViewList.indexOf(view.name as string);
      index > -1 && this.cachedViewList.splice(index, 1);
    },
    delAllCachedViews() {
      this.cachedViewList = [] as string[];
    }
  }
});

export function useCachedViewStoreHook() {
  return useCachedViewStore(store);
}
