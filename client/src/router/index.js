import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import DetailPage from "../views/DetailPage.vue";
import FormPage from "../views/FormPage.vue";
import ProfileUser from "../views/ProfileUser.vue";
import MyDonationPage from "../views/MyDonationPage.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/loginuser",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/registeruser",
    name: "RegisterPage",
    component: RegisterPage,
  },
  {
    path: "/detailpage",
    name: "DetailPage",
    component: DetailPage,
  },
  {
    path: "/formpage",
    name: "FormPage",
    component: FormPage,
  },
  {
    path: "/profileuser",
    name: "ProfileUser",
    component: ProfileUser,
  },
  {
    path: "/mydonationpage",
    name: "MyDonationPage",
    component: MyDonationPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  if (
    to.name !== "LoginPage" &&
    to.name !== "RegisterPage" &&
    !localStorage.access_token
  )
    next({ name: "LoginPage" });
  else if (to.name === "LoginPage" && localStorage.access_token)
    next({ name: "HomePage" });
  else next();
});
export default router;
