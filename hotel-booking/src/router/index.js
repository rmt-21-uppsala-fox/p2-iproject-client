import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import GoogleMapsPage from "../views/GoogleMapsPage.vue";
import MarkerGoogleMapsPage from "../views/MarkerGoogleMapsPage.vue";
import SingleMarkerGoogleMaps from "../views/SingleMarkerGoogleMaps.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/maps",
    name: "GoogleMapsPage",
    component: GoogleMapsPage,
  },
  {
    path: "/markermaps",
    name: "MarkerGoogleMapsPage",
    component: MarkerGoogleMapsPage,
  },
  {
    path: "/markermaps/:id",
    name: "SingleMarkerGoogleMaps",
    component: SingleMarkerGoogleMaps,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
