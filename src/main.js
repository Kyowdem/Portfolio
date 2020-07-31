import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.component('navbar', () => import('./components/Navbar.js'))

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
