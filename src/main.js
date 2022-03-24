import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import Toasted from 'vue-toasted';
Vue.use(Toasted, {
  duration: 1500,
  position: 'top-right', // ['top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left']
  theme: 'outline', // ['toasted-primary', 'outline', 'bubble']
  iconPack: 'material' // ['material', 'fontawesome', 'mdi', 'custom-class', 'callback']
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
