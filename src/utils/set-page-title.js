import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Vue3 H5 Template'

export default function setPageTitle(pageTitle) {
  // 设置页面 title
  window.document.title = pageTitle ? `${pageTitle} | ${title}` : `${title}`
}
