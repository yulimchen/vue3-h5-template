import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'
import { useCachedViewStore } from '@/store/modules/cached-view'
import setPageTitle from '@/utils/set-page-title'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, _from, next) => {
  // 路由缓存
  useCachedViewStore().addCachedView(to)
  // 页面 title
  setPageTitle(to.meta.title)
  next()
})

export default router
