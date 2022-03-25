import Vue from 'vue'
import VueRouter from 'vue-router'
import AnimesPage from '../views/AnimesPage.vue'
import AnimeDetailPage from '../views/AnimeDetailPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'
import FavoritesPage from '../views/FavoritesPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AnimesPage',
    component: AnimesPage
  },
  {
    path: '/favorites',
    name: 'FavoritesPage',
    component: FavoritesPage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  },
  {
    path: '/animes',
    name: 'AnimeDetail',
    component: AnimeDetailPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (localStorage.access_token && to.name === "LoginPage") {
    next({
      name: "AnimesPage",
    });
  } else if (localStorage.access_token && to.name === "RegisterPage") {
    next({
      name: "AnimesPage",
    });
  } else if (!localStorage.access_token && to.name === "FavoritesPage") {
    // console.log(`MASUK`);
    next({
      name: "LoginPage",
    });
  } else {
    next();
  }
});

export default router
