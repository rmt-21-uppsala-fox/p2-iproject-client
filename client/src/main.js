import Vue from "vue";
import vuescroll from "vue-scroll";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "aframe";
import "aframe-mouse-cursor-component";
import "./assets/tailwind.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

Vue.use(vuescroll);

Vue.config.productionTip = false;

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
  "a-link",
];

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
