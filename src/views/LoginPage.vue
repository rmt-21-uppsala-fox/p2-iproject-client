<template>
  <div id="signin-page" class="text-gray-700 antialiased">
    <section class="relative w-full h-full py-10 min-h-screen bg-gray-800">
      <div class="container mx-auto px-4 h-full">
        <div class="flex content-center items-center justify-center h-full">
          <div class="w-full lg:w-4/12 px-4">
            <div
              class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0"
            >
              <div class="rounded-t mb-0 px-6 py-6">
                <div class="text-center mb-3">
                  <h6 class="text-gray-500 text-sm font-bold">Sign in with</h6>
                </div>
                <div class="btn-wrapper text-center">
                  <GoogleLogin
                    :params="params"
                    :onSuccess="onSuccess"
                    class="bg-white active:bg-gray-50 text-gray-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                  >
                    <img alt="..." class="w-5 mr-1" src="../assets/img/google.svg" />
                    Google
                  </GoogleLogin>
                </div>
                <hr class="mt-6 border-b-1 border-gray-300" />
              </div>
              <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div class="text-gray-500 text-center mb-3 font-bold">
                  <small>Or sign in with credentials</small>
                </div>
                <form @submit.prevent="loginHandler">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-600 text-xs font-bold mb-2"
                      for="grid-password"
                    >Email</label>
                    <input
                      v-model="userInput.email"
                      type="email"
                      class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-600 text-xs font-bold mb-2"
                      for="grid-password"
                    >Password</label>
                    <input
                      v-model="userInput.password"
                      type="password"
                      class="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>
                  <div class="text-center mt-12">
                    <button
                      class="bg-gray-800 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >sign in</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="mt-6 flex justify-between">
              <div>
                <small class="text-gray-200 mr-1">Don't have an account yet?</small>
                <router-link to="/register" class="text-pink-500">
                  <small>Sign up</small>
                </router-link>
              </div>
              <div>
                <router-link to="/" class="text-pink-500">
                  <small>Go back to home</small>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";
import Swal from "sweetalert2";
export default {
  name: "LoginPage",
  components: {
    GoogleLogin,
  },
  data() {
    return {
      userInput: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async loginHandler() {
      try {
        const { data } = await this.$store.dispatch(
          "loginHandler",
          this.userInput
        );
        this.$store.commit("SET_ISLOGIN", true);
        localStorage.access_token = data.access_token;
        this.$router.push("/");
        Swal.fire("Login success.", "", "success");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}!`,
        });
      }
    },
    async onSuccess(googleUser) {
      try {
        const { data } = await this.$store.dispatch("googleOAuth", googleUser);
        this.$store.commit("SET_ISLOGIN", true);
        localStorage.access_token = data.access_token;
        this.$router.push("/");
        Swal.fire("Login success.", "", "success");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}!`,
        });
      }
    },
  },
  computed: {
    params() {
      return this.$store.state.paramsGOAuth;
    },
  },
};
</script>