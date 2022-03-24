import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import UpcomingGames from "../views/UpcomingReleasePage.vue";
import GameDetail from "../views/GameDetail.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import GameCollection from "../views/GameCollection.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/discover",
    name: "UpcomingGames",
    component: UpcomingGames,
  },
  {
    path: "/game-detail",
    name: "GameDetail",
    component: GameDetail,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
  },
  {
    path: "/collection",
    name: "GameCollection",
    component: GameCollection,
  },
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    (to.name == "LoginPage" || to.name == "register") &&
    localStorage.getItem(`access_token`)
  )
    next({ name: "home" });
  else if ((to.name == "UpcomingGames" || to.name == "GameDetail" || to.name == "GameCollection") && !localStorage.getItem(`access_token`))
    next({ name: "LoginPage" });
  else next();
});

export default router;
