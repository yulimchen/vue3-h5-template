import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /** 页面标题 */
    title?: string
    /** 是否不缓存该路由组件 */
    noCache?: boolean
  }
}
