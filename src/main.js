import Vue from 'vue'
import App from './App.vue'
import '../styles/reset.less'
import store from './store'
import router from '@/router/router.js'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
