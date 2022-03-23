import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'

//inisialisasi SocketIO
import VueSocketIOExt from 'vue-socket.io-extended';
import {
  io
} from 'socket.io-client';
//instance socketIO
const socket = io('http://localhost:3000');

Vue.config.productionTip = false
Vue.use(VueSocketIOExt, socket, {
  store
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')