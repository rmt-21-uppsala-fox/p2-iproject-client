import Vue from 'vue'
import VueRouter from 'vue-router'
import GalleryView from '../views/GalleryView.vue'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/gallery/:id',
    name: 'gallery',
    component: GalleryView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router