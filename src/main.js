import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css";
import VueSocketIOExt from "vue-socket.io-extended";
import { io } from "socket.io-client";

const socket = io('https://desolate-basin-45168.herokuapp.com/');

Vue.config.productionTip = false

Vue.use(VueSocketIOExt, socket, { store });

new Vue({
  router,
  store,  
  render: h => h(App)
}).$mount('#app')
