import { createApp } from 'vue'
import App from './App.vue'
// normalize.css
import 'normalize.css'

// 按需引入 vant-ui 组件
// import './plugins/vant'
// 引入 svg 图标
// import './icons'

// vant
import {
  Field,
  Cell,
  CellGroup,
  Button,
  Icon
} from 'vant'

// svg-icon
import SvgIcon from '@/components/SvgIcon'

const app = createApp(App)
// vant
app.use(Field)
app.use(Cell)
app.use(CellGroup)
app.use(Button)
app.use(Icon)
// svg-icon
app.component('svg-icon', SvgIcon)
const req = require.context('@/icons/svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

app.mount('#app')
