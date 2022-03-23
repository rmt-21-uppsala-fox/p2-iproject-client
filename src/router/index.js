import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import( /* webpackChunkName: "about" */ '../views/CheckoutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( /* webpackChunkName: "about" */ '../views/LoginView.vue')
  }, {
    path: '/register',
    name: 'register',
    component: () => import( /* webpackChunkName: "about" */ '../views/RegisterView.vue')
  },
  {
    path: '/myaccount',
    name: 'myaccount',
    component: () => import( /* webpackChunkName: "about" */ '../views/MyAccountView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.access_token){
    if (to.name === 'login' || to.name === 'register') {
      next()
    } else {
      next('/login')
    }
  }

  if (localStorage.access_token){
    if (to.name === 'login' || to.name === 'register') {
      next(from.path)
    } else {
      next()
    }
  }
})

export default router