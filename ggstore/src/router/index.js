import Vue from "vue";
import VueRouter from "vue-router";
import { auth } from "../../firebase/firebase";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView.vue"),
    meta: { noAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
    meta: { noAuth: true },
  },
  {
    path: "/steam-wallet",
    name: "steam-wallet",
    component: () => import("../views/SteamWalletView.vue"),
  },
  {
    path: "/my-cart",
    name: "my-cart",
    component: () => import("../views/MyCartView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const noAuth = to.matched.some((record) => record.meta.noAuth);
  const user = auth.currentUser;
  if (noAuth && user) {
    next("/");
  } else if (!user && to.name === "my-cart") {
    next("/login");
  } else {
    next();
  }
});

export default router;
