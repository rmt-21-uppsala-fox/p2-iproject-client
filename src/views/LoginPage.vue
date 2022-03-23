<template>
  <!-- component -->
  <div class="container flex">
    <div class="container signup">
      <div class="min-h-screen flex mb-4 row-signup items-center justify-center">
        <div class="w-3/5 h-12 row-right">

          <div class="text-dig">
            <h1 class="w-full text-base sm:text-lg md:text-xl text-center lg:text-2xl xl:text-5xl">
              LoginPage
            </h1>
            <div class="text-center mb-4 w-3/5">
              <img
                src="https://cdn.dribbble.com/users/79571/screenshots/5516891/workflow_4x.png"
                style="width:500px"
              >
            </div>
          </div>
        </div>
        <div class="w-2/5  h-12 row-left">
          <div class="text-singup mb-8">
            <h2 class="">
              Join us for free
            </h2>
          </div>
          <div class="form-signup-dig">
            <div class="w-full max-w-xs">
              <form
                class="max-w-md mb-4 form-input"
                @submit.prevent="loginHandler"
              >
                <div class="mb-4">
                  <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="username"
                  >
                    Username
                  </label>
                  <input
                    v-model="user.username"
                    class="shadow appearance-none border rounded h-12 w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="username"
                    placeholder="username"
                  >
                </div>
                <div class="mb-6">
                  <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    v-model="user.password"
                    class="shadow appearance-none border rounded w-full h-12 py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                  >
                </div>
                <div class="flex items-center justify-between">
                  <button
                    class="bg-blue-800 hover:bg-blue-dark font-bold w-full h-12 py-2 px-4  rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: "LoginPage",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async loginHandler() {
      try {
        const response = await this.$store.dispatch("loginHandler", this.user);
        localStorage.setItem("access_token", response.data.access_token);
        this.$store.commit("SET_STATUS_LOGIN", true);
        this.$store.commit("SET_CURRENT_USER", this.user.username);
        this.$router.push({ name: "home" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>