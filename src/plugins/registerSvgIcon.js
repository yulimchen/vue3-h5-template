// svg-icon
import SvgIcon from '@/components/SvgIcon'

const req = require.context('@/icons/svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

export function registerSvgIconComp(app) {
  app.component('SvgIcon', SvgIcon)
}
