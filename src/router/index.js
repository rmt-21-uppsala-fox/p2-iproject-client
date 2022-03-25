import Vue from "vue";
import VueRouter from "vue-router";
import custHomeComp from "../views/CustomerHomePage.vue";
import restHomeComp from "../views/RestaurantHomePage.vue";
import loginComp from "../views/LoginPage.vue";
import firstPageComp from "../views/FirstPage.vue";
import registerComp from "../views/RegisterPage.vue";
import addFoodComp from "../views/AddFoodPage.vue";
import loginCustomerComp from "../views/LoginCustomerPage.vue";
import orderListComp from "../views/OrderListPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/:RestaurantId/customer",
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
    path: "/addfood",
    name: "addFood",
    component: addFoodComp,
  },
  {
    path: "/logincustomer",
    name: "loginCustomer",
    component: loginCustomerComp,
  },
  {
    path: "/orderlist",
    name: "orderList",
    component: orderListComp,
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
  if (to.name === "registerPage" && localStorage.getItem("access_token_Resto")) {
    next("/restaurant");
  } else {
    next();
  }
  if (to.name === "registerPage" && localStorage.getItem("access_token_Cust")) {
    next("/:restoId/customer");
  } else {
    next();
  }
  if (to.name === "firstPage" && localStorage.getItem("access_token_Resto")) {
    next("/restaurant");
  } else {
    next();
  }
  if (to.name === "firstPage" && localStorage.getItem("access_token_Cust")) {
    next("/:restoId/customer");
  } else {
    next();
  }
});

export default router;
