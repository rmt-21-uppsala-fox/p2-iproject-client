import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as VueGoogleMaps from "vue2-google-maps";
import VCalendar from "v-calendar";

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: "v", // Use <vc-calendar /> instead of <v-calendar />
});

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCbSyblth4bTscKhcg99yehDNPIdjEAH9A",
    libraries: "places", // This is required if you use the Autocomplete plugin
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
