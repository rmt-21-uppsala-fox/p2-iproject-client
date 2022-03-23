import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingView from '../views/LandingView'
import LoginSpotifyView from '../views/LoginSpotifyView'
import LoginView from '../views/LoginView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/loginSpotify',
    name: 'LoginSpotify',
    component: LoginSpotifyView
  },
  {
    path: '/',
    name: 'LandingPage',
    component:LandingView
  },
  {
    path: '/login',
    name: 'Login',
    component:LoginView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((from, to, next) => {
//   const access_token = localStorage.access_token
//   if(access_token && to.path=='/'){
//     next('/dashboard')
//   }else{
//     next()
//   } 
  
//   if(!access_token && to.path == '/dashboard'){
//     next('/')
//   }else{
//     next()
//   }
// })

export default router
