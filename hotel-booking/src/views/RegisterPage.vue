<template>
  <div class="home">
    <!-- Register Page -->
    <div id="register" class="container">
      <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
            <img
              class="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign up your account
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              Or
              <a id="btnlogin" href="#" class="font-medium text-indigo-600 hover:text-blue-500">
                back to login
              </a>
            </p>
          </div>
          <form @submit.prevent="doRegister" id="formRegister">
            <div class="mb-6 mt-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >User Name</label
              >
              <input
                v-model="registerData.username"
                type="text"
                id="username-register"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="booking"
                required=""
              />
            </div>
            <div class="mb-6 mt-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Email</label
              >
              <input
                v-model="registerData.email"
                type="email"
                id="email-register"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="booking@hotel.com"
                required=""
              />
            </div>
            <div class="mb-6">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Password</label
              >
              <input
                v-model="registerData.password"
                type="password"
                id="password-register"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="********"
                required=""
              />
            </div>
            <div class="flex items-start mb-6">
              <div class="flex items-center h-5">
                <input
                  id="terms-register"
                  aria-describedby="terms"
                  type="checkbox"
                  class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="terms" class="font-medium text-gray-900 dark:text-gray-300"
                  >I agree with the
                  <a href="#" class="text-blue-600 hover:underline dark:text-blue-500"
                    >terms and conditions</a
                  ></label
                >
              </div>
            </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register new account
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      registerData: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async doRegister() {
      await this.$store.dispatch("doRegister", this.registerData);
      this.$router.push({ name: "LoginPage" });
    },
  },
};
</script>

<style></style>
