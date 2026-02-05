import type { RouteLocationNormalized } from 'vue-router'
import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'
import { useCachedViewStore } from '@/store/modules/cached-view'
import NProgress from '@/utils/progress'
import setPageTitle from '@/utils/set-page-title'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export interface toRouteType extends RouteLocationNormalized {
  meta: {
    title?: string
    noCache?: boolean
  }
}

router.beforeEach((to: toRouteType, from, next) => {
  NProgress.start()
  // 路由缓存
  useCachedViewStore().addCachedView(to)
  // 页面 title
  setPageTitle(to.meta.title)
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
