import Vue from "vue";
import VueRouter from "vue-router";
// import Bookmarks from "../views/Bookmarks.vue";
 import Details from "../views/Details.vue"
// import Register from '../views/Register.vue'
// import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/purchased",
  //   name: "Purchased",
  //   component: Bookmarks,
  // },
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: Login,
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   component: Register,
  // },
  {
    path: "/movies/:imdbId",
    name: "Details",
    component: Details,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next)=>{
  console.log(from, to,  "INI DARI ROUTER NAVGARD")
  if(to.name == "Login" && localStorage.access_token) {
    console.log("-----1")
    next("/")
  } else if (to.name == "Register" && localStorage.access_token){
    console.log("-----2")
    next("/")
  }  else if (to.name == "Bookmarks" && !localStorage.access_token){
    console.log("-----3")
    next("/")
  }  else {
    console.log("-----4")
    next()
  }

})

export default router;
