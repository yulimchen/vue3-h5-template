import Vue from 'vue'
import App from './App.vue'
// normalize.css
import 'normalize.css'

// 按需引入 vant-ui 组件
import './plugins/vant'
// 引入 svg 图标
import './icons'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
