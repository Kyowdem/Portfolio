import Vue from 'vue'
import App from './App.vue'
import router from './router'

require('bootstrap')
require('jquery')
require('@/assets/globalTools.css')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
