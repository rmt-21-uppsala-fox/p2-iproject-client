<template>
	<div id="login-page" class="flex justify-center">
		<div class="flex py-56">
			<div
				class="max-w-lg w-96 bg-white rounded-2xl border border-gray-200 shadow-2xl sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700"
			>
				<form class="space-y-6 py-10" @submit.prevent="loginHandler">
					<h5
						class="text-5xl text-center font-black text-gray-900 dark:text-white"
					>
						Login
					</h5>
					<div>
						<label
							for="email"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>Your email</label
						>
						<input
							v-model="email"
							type="email"
							name="email"
							id="email"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
							placeholder="user@user.com"
							required=""
						/>
					</div>
					<div>
						<label
							for="password"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>Your password</label
						>
						<input
							v-model="password"
							type="password"
							name="password"
							id="password"
							placeholder="••••••••"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
							required=""
						/>
					</div>
					<button
						type="submit"
						class="w-full text-yellow-500 bg-slate-800 hover:bg-red-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Login
					</button>

					<div
						class="text-sm text-center font-medium text-gray-500 dark:text-gray-300"
					>
						Doesn't Have an Account? back to
						<router-link
							href="#"
							class="text-blue-700 hover:underline dark:text-blue-500"
							to="/register"
							>Register</router-link
						>
					</div>
					<div
						class="text-sm text-center font-medium text-gray-500 dark:text-gray-300"
					>
						or Back
						<router-link
							href="#"
							class="text-blue-700 hover:underline dark:text-blue-500"
							to="/"
							>Home</router-link
						>
					</div>
				</form>
				<Button
					class="w-full text-white bg-blue-600 hover:bg-red-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Login with Facebook
				</Button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "LoginPage",
		data() {
			return {
				email: "",
				password: "",
			};
		},
		methods: {
			async loginHandler() {
				try {
					await this.$store.dispatch("loginHandler", {
						email: this.email,
						password: this.password,
					});
					this.$store.commit("IS_LOGIN", true);
					this.$router.push("/");
				} catch (err) {
					this.$router.push("/login");
					console.log(err);
				}
			},
		},
	};
</script>

<style></style>
