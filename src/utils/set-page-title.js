import defaultSettings from '@/settings'

const title = defaultSettings.title || ''

export default function setPageTitle(pageTitle) {
  if (!title && !pageTitle) return
  // 设置页面 title
  window.document.title = title ? `${pageTitle} | ${title}` : `${pageTitle}`
}
