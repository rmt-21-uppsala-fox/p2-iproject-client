import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import EstimateCarbonPage from '../views/EstimateCarbonPage.vue'
import TravelPage from '../views/TravelPage.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/',
    name: 'estimate',
    component: EstimateCarbonPage
  },
  {
    path: '/travel',
    name: 'travel',
    component: TravelPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
