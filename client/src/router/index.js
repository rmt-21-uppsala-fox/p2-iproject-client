import Vue from 'vue'
import VueRouter from 'vue-router'
import PhotosPage from '../views/PhotosPage.vue'
import HomePage from '../views/HomePage.vue'
import DetailTrip from '../views/DetailTrip.vue'
import LoginPage from '../views/LoginPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/photos',
    name: 'PhotosPage',
    component: PhotosPage
  },
  {
    path: '/detail/:id',
    name: 'DetailTrip',
    component: DetailTrip
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) =>{
  if(to.name === 'DetailTrip' && !localStorage.getItem('access_token')) next({name:'LoginPage'})
  else if(to.name === 'LoginPage' && localStorage.getItem('access_token')) next({name:'HomePage'})
  // else if(to.name === 'DetailTrip' && localStorage.getItem('access_token')) next({name:'LoginPage'})
  // else if(to.name === 'HomePage' && localStorage.getItem('access_token')) next({name:'LoginPage'})
  // else if(to.name === 'login' && localStorage.getItem('access_token')) next({name:'HomePage'})
  else next()
})

export default router
