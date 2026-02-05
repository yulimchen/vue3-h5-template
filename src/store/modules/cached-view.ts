import type { ToRouteType } from '@/router'
import { defineStore } from 'pinia'

export const useCachedViewStore = defineStore('cached-view', {
  state: () => ({
    cachedViewSet: new Set<string>(),
    cachedViewList: [] as string[],
  }),
  actions: {
    addCachedView(view: ToRouteType) {
      const name = view.name as string
      if (this.cachedViewSet.has(name)) // O(1)
        return
      if (!view?.meta?.noCache) {
        this.cachedViewSet.add(name)
        this.cachedViewList.push(name)
      }
    },
    delCachedView(view: ToRouteType) {
      const name = view.name as string
      this.cachedViewSet.delete(name)
      const index = this.cachedViewList.indexOf(name)
      if (index > -1) {
        this.cachedViewList.splice(index, 1)
      }
    },
    delAllCachedViews() {
      this.cachedViewSet.clear()
      this.cachedViewList = []
    },
  },
})
