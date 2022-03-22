import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "aframe";
import "aframe-mouse-cursor-component";

Vue.config.productionTip = false

Vue.config.ignoredElements = [
  "a-scene",
  "a-camera",
  "a-box",
  "a-image",
  "a-sphere",
  "a-plane",
  "a-sky",
  "a-entity",
  "a-cursor",
  "a-cylinder",
  "a-assets",
];

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
