import { createApp } from 'vue'
import App from './App.vue'

// normalize.css
import 'normalize.css'

const app = createApp(App)

// 按需注册 vant 组件
import { registerVantComp } from '@/plugins/registerVant'
registerVantComp(app)

// svg-icon
import { registerSvgIconComp } from '@/plugins/registerSvgIcon'
registerSvgIconComp(app)

app.mount('#app')
