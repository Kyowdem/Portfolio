import Vue from 'vue'
import App from './App.vue'
import router from './router'


// window.$ = window.jQuery = require('jquery');
require('bootstrap')
require('animate.css')
require('@/assets/css/globalTools.css')
require('@/assets/css/vueTransition.css')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
