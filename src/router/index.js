import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "@/views/LoginPage";
import RegisterPage from "@/views/RegisterPage";
import HomePage from "@/views/HomePage";
import FavoritePage from "@/views/FavoritePage";
import DetailPage from "@/views/DetailPage";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "HomePage",
		component: HomePage,
	},
	{
		path: "/register",
		name: "RegisterPage",
		component: RegisterPage,
	},
	{
		path: "/login",
		name: "LoginPage",
		component: LoginPage,
	},
	{
		path: "/favorites",
		name: "FavoritePage",
		component: FavoritePage,
	},
	{
		path: "/detail/:id",
		name: "DetailPage",
		component: DetailPage,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	if (
		(to.name == "LoginPage" || to.name == "RegisterPage") &&
		localStorage.getItem("token")
	)
		next({ name: "HomePage" });
	else if (to.name == "FavoritePage" && !localStorage.getItem("token"))
		next({ name: "LoginPage" });
	else next();
});

export default router;
