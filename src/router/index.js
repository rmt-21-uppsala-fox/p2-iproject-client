import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView,
    },
    {
        path: '/bookmark',
        name: 'BookmarkView',
        component: () => import('../views/BookmarkView.vue'),
    },
    {
        path: '/novel/:title',
        name: 'NovelChapterView',
        component: () => import('../views/NovelChapterView.vue'),
    },
    {
        path: '/register',
        name: 'RegisterView',
        component: () => import('../views/RegisterView.vue'),
    },
    {
        path: '/login',
        name: 'LoginView',
        component: () => import('../views/LoginView.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
