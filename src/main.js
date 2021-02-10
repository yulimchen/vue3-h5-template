import { createApp } from 'vue'
import App from './App.vue'
// normalize.css
import 'normalize.css'

// 引入 svg 图标
// import './icons'

// svg-icon
import SvgIcon from '@/components/SvgIcon'

const app = createApp(App)

// 按需注册 vant 组件
import { registerVantComp } from '@/plugins/registerVant'
registerVantComp(app)

// svg-icon
app.component('svg-icon', SvgIcon)
const req = require.context('@/icons/svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

app.mount('#app')
