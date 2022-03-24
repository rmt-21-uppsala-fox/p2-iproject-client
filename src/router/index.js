import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import ProductView from "../views/ProductView.vue";

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
    path: "/products/:id",
    name: "detail",
    component: () => import("../views/DetailProduct.vue"),
  },
  {
    path: "/workshops/:id",
    name: "workshopdetail",
    component: () => import("../views/DetailWorkshop.vue"),
  },
  {
    path: "/mycart",
    name: "mycart",
    component: () => import("../views/MyCartPage.vue"),
  },
  {
    path: "/transactions",
    name: "transactions",
    component: () => import("../views/MyTransactionPage.vue"),
  },
  {
    path: "/transactions/:id",
    name: "detailtransaction",
    component: () => import("../views/DetailTransaction.vue"),
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
