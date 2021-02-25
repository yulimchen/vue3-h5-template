import { createWebHashHistory, createRouter } from 'vue-router'
import routes from './routes'
import store from '../store'
import setPageTitle from '@/utils/set-page-title.js'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // 路由缓存
  store.commit('cachedView/ADD_CACHED_VIEW', to)
  // 设置页面 title
  setPageTitle(to.meta.title)
  next()
})

export default router
