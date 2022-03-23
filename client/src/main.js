import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIOExt from 'vue-socket.io-extended';
import { io } from 'socket.io-client';
import GoogleAuth from 'vue-google-auth'
// import facebookLogin from 'facebook-login-vuejs';

Vue.use(GoogleAuth, { clientId: '814496312702-5v1fc6rgs3ntiuekh2bbrpkig3jmuvv5.apps.googleusercontent.com' })
Vue.googleAuth().load()

Vue.config.productionTip = false

const socket = io('http://localhost:3000');

Vue.use(VueSocketIOExt, socket,{store});

new Vue({
  // facebookLogin,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
