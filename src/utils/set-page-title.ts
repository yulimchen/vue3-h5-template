import { useTitle } from '@vueuse/core'
import { pageDefaultTitle } from '@/settings'

export default function setPageTitle(routerTitle?: string): void {
  const pageTitle = routerTitle ? `${routerTitle} | ${pageDefaultTitle}` : pageDefaultTitle
  useTitle(pageTitle)
}
