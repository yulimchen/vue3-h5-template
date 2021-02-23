import { createWebHashHistory, createRouter } from 'vue-router'
import routes from './routes'
import store from '../store'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  store.commit('cachedView/ADD_CACHED_VIEW', to)
  next()
})

export default router
