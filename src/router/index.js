import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import RegistrationPage from '../views/RegistrationPage.vue'
import DetailPage from '../views/DetailPage.vue'
import RecipePage from "../views/RecipePage.vue"
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'registration',
    component: RegistrationPage
  },
  {
    path: '/detail-recipe',
    name: 'detail-recipe',
    component: DetailPage
  },
  {
    path: '/recipes',
    name: 'recipes',
    component: RecipePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   const access_token = localStorage.getItem("access_token")
//   if (!access_token && to.name != 'login') {
//     next('/login')
//   } else if (access_token && to.name == 'login') {
//     next('/')
//   } else if (!access_token && to.name == 'mycourses') {
//     next('/login')
//   } else {
//     next()
//   }
// })

export default router