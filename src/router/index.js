import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginPage from "../views/LoginPage.vue";
import LandingPage from "../views/LandingPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import ResetEnquiry from "../views/ResetEnquiry.vue";
import ResetPage from "../views/ResetPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
  },
  {
    path: "/landing",
    name: "landing",
    component: LandingPage,
  },
  {
    path: "/formemail",
    name: "ResetEnquiry",
    component: ResetEnquiry,
  },
  {
    path: "/respass",
    name: "ResetPage",
    component: ResetPage,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login" && localStorage.getItem("access_token")) {
    next({ name: "landing" });
  } else if (to.path === "/landing" && !localStorage.getItem("access_token")) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
