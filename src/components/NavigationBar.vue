<template>
	<!-- navbar -->
	<nav
		class="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 shadow-yellow-300 shadow-md border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800"
	>
		<div class="container flex flex-wrap justify-between items-center mx-auto">
			<router-link href="#" class="flex items-center" to="/">
				<span
					class="self-center text-3xl font-black italic font-serif whitespace-nowrap text-yellow-500 hover:text-red-500"
					>Manga Encyclopedia</span
				>
			</router-link>
			<button
				data-collapse-toggle="mobile-menu"
				type="button"
				class="inline-flex items-center font-serif p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="mobile-menu-2"
				aria-expanded="false"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="w-6 h-6"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"
					></path>
				</svg>
				<svg
					class="hidden w-6 h-6"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd"
					></path>
				</svg>
			</button>
			<div class="hidden w-full md:block md:w-auto" id="mobile-menu">
				<ul
					class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
				>
					<li>
						<router-link
							class="italic block py-2 pr-4 pl-3 font-serif text-yellow-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
							to="/favorites"
							>Favorites</router-link
						>
					</li>
					<li>
						<router-link
							class="italic block py-2 pr-4 pl-3 font-serif text-yellow-500 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
							to="/login"
							>Login</router-link
						>
					</li>
					<li>
						<a
							href="#"
							@click="logoutHandler"
							class="italic block py-2 pr-4 pl-3 font-serif text-red-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
							@click.prevent=""
							>Logout</a
						>
					</li>
					<li>
						<router-link
							class="italic block py-2 pr-4 pl-3 font-serif text-yellow-500 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
							to="/register"
							>Register</router-link
						>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	<!-- end of navbar -->
</template>

<script>
	export default {
		name: "NavigationBar",
		computed: {
			isLogin() {
				return this.$store.state.isLogin;
			},
		},
		methods: {
			logoutHandler() {
				localStorage.clear();
				this.$store.commit("IS_LOGIN", false);
				this.$router.push("/login");
			},
		},
	};
</script>

<style></style>
