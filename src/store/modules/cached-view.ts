import type { RouteLocationNormalized } from 'vue-router'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCachedViewStore = defineStore('cached-view', () => {
  const cachedViewSet = ref(new Set<string>())
  const cachedViewList = ref<string[]>([])

  function addCachedView(view: RouteLocationNormalized) {
    const name = view.name as string
    if (cachedViewSet.value.has(name)) // O(1)
      return
    if (!view?.meta?.noCache) {
      cachedViewSet.value.add(name)
      cachedViewList.value.push(name)
    }
  }

  function delCachedView(view: RouteLocationNormalized) {
    const name = view.name as string
    cachedViewSet.value.delete(name)
    const index = cachedViewList.value.indexOf(name)
    if (index > -1) {
      cachedViewList.value.splice(index, 1)
    }
  }

  function delAllCachedViews() {
    cachedViewSet.value.clear()
    cachedViewList.value = []
  }

  return {
    cachedViewSet,
    cachedViewList,
    addCachedView,
    delCachedView,
    delAllCachedViews,
  }
})
