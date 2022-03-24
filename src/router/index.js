import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import RegistrationPage from '../views/RegistrationPage.vue'
import DetailPage from '../views/DetailPage.vue'
import RecipePage from "../views/RecipePage.vue"
import BookmarkPage from "../views/BookmarkPage.vue"
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
  },
  {
    path: '/bookmark',
    name: 'bookmark',
    component: BookmarkPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const access_token = localStorage.getItem("access_token")
  if (!access_token && to.name == 'bookmark') {
    next('/login')
  } else if (access_token && to.name == 'login') {
    next('/')
  } else {
    next()
  }
})

export default router