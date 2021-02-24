const state = {
  cachedViews: []
}

const mutations = {
  ADD_CACHED_VIEW: (state, view) => {
    // 不重复添加
    if (state.cachedViews.includes(view.name)) return
    if (!view?.meta?.noCache) {
      state.cachedViews.push(view.name)
    }
  },
  DEL_CACHED_VIEW: (state, view) => {
    const index = state.cachedViews.indexOf(view.name)
    index > -1 && state.cachedViews.splice(index, 1)
  },
  DEL_ALL_CACHED_VIEWS: state => {
    state.cachedViews = []
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
