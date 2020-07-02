import Vue from 'vue'
import App from './App.vue'
// normalize.css
import 'normalize.css'

// 按需引入 vant-ui 组件
import './plugins/vant'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
