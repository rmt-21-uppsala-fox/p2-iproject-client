import Vue from 'vue'
import VueRouter from 'vue-router'
import GalleryPage from '../views/GalleryPage.vue'


Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: GalleryPage
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router