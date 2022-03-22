import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import UpcomingGames from "../views/UpcomingReleasePage.vue";
import GameDetail from "../views/GameDetail.vue";

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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
