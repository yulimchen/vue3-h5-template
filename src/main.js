import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

// normalize.css
import 'normalize.css/normalize.css'
// 全局样式
import '@/styles/index.less'

const app = createApp(App)

// 按需注册 vant 组件
import { registerVantComp } from '@/plugins/registerVant'
registerVantComp(app)

// svg-icon
import { registerSvgIconComp } from '@/plugins/registerSvgIcon'
registerSvgIconComp(app)

app
  .use(router)
  .use(store)
  .mount('#app')
