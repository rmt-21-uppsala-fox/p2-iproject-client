import Vue from 'vue'
import VueRouter from 'vue-router'
import PhotosPage from '../views/PhotosPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/photos',
    name: 'PhotosPage',
    component: PhotosPage
  },
  {
    path: '/photos',
    name: 'PhotosPage',
    component: PhotosPage
  },
  {
    path: '/photos',
    name: 'PhotosPage',
    component: PhotosPage
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
