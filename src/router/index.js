import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import ProductView from "../views/ProductView.vue";
import FavoriteView from "../views/FavoriteView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    children: [
      {
        path: "",
        name: "Product",
        component: ProductView,
      },
      {
        path: "favorites",
        name: "favorites",
        component: FavoriteView,
      },
    ],
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
    path: "/food/:id",
    name: "detail",
    component: () => import("../views/DetailFood.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from) {
    if (
      to.name === "detail" ||
      from.name === "login" ||
      from.name === "register"
    )
      return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (
    (to.name === "login" || to.name === "register") &&
    localStorage.access_token
  )
    next("/");
  else if (to.name === "favorites" && !localStorage.access_token) next("/");
  else next();
});

export default router;
