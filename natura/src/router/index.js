import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormPage from '../views/FormPage.vue'
import MenuView from '../views/MenuView.vue'
import DetailMenu from '../views/DetailMenu.vue'
import PaymentPage from '../views/PaymentPage.vue'
import SummaryPage from '../views/SummaryPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'form',
    component: FormPage
  },
  {
    path: '/menus',
    name: 'menus',
    component: MenuView
  },
  {
    path: '/menu/detail',
    name: 'detail',
    component: DetailMenu,
    props: true
  },
  {
    path: '/payment',
    name: 'payment',
    component: PaymentPage,
  },
  {
    path: '/summary',
    name: 'summary',
    component: SummaryPage,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
