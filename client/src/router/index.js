import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import PlayeRankView from '../views/PlayerRankView.vue'
import MatchesView from '../views/MatchesView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/PlayerRank',
    name: 'PlayerRank',
    component: PlayeRankView
  },
  {
    path: '/matches',
    name: 'matches',
    component: MatchesView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !localStorage.getItem('access_token')) next({ name: 'login' })
  else if (to.name === 'login' && localStorage.getItem('access_token')) next({ name: 'home' })
  else next()
})

export default router
