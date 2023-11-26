import { defineStore } from "pinia";
import { store } from "@/store";

export const useCachedViewStore = defineStore({
  id: "cached-view",
  state: () => ({
    // 缓存页面 keepAlive
    cachedViewList: []
  }),
  actions: {
    addCachedView(view) {
      // 不重复添加
      if (this.cachedViewList.includes(view.name)) return;
      if (!view?.meta?.noCache) {
        this.cachedViewList.push(view.name);
      }
    },
    delCachedView(view) {
      const index = this.cachedViewList.indexOf(view.name);
      index > -1 && this.cachedViewList.splice(index, 1);
    },
    delAllCachedViews() {
      this.cachedViewList = [];
    }
  }
});

export function useCachedViewStoreHook() {
  return useCachedViewStore(store);
}
