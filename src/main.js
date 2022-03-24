import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import CxltToastr from 'cxlt-vue2-toastr'

var toastrConfigs = {
  position: 'top right',
  showDuration: 2000
}
Vue.use(CxltToastr, toastrConfigs)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
