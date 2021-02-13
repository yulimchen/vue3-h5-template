// svg-icon
import SvgIcon from '@/components/SvgIcon'

export function registerSvgIconComp(app) {
  app.component('svg-icon', SvgIcon)
  const req = require.context('@/icons/svg', false, /\.svg$/)
  const requireAll = requireContext => requireContext.keys().map(requireContext)
  requireAll(req)
}