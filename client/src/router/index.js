import Vue from "vue";
import VueRouter from "vue-router";
import VirtualMuseumPage from "../views/VirtualMuseumPage.vue";
import LandingPage from "../views/LandingPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/museum",
    name: "VirtualMuseumPage",
    component: VirtualMuseumPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
