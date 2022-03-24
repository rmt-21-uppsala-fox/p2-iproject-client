import Vue from "vue";
import VueRouter from "vue-router";
import custHomeComp from "../views/CustomerHomePage.vue";
import restHomeComp from "../views/RestaurantHomePage.vue";
import loginComp from "../views/LoginPage.vue";
import firstPageComp from "../views/FirstPage.vue";
import registerComp from "../views/RegisterPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/:restoId/customer",
    name: "custHome",
    component: custHomeComp,
  },
  {
    path: "/restaurant",
    name: "restHome",
    component: restHomeComp,
  },
  {
    path: "/login",
    name: "loginPage",
    component: loginComp,
  },
  {
    path: "/register",
    name: "registerPage",
    component: registerComp,
  },
  {
    path: "/",
    name: "firstPage",
    component: firstPageComp,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === "loginPage" && localStorage.getItem("access_token_Resto")) {
    next("/restaurant");
  } else {
    next();
  }
  if (to.name === "loginPage" && localStorage.getItem("access_token_Cust")) {
    next("/:restoId/customer");
  } else {
    next();
  }
});

export default router;
