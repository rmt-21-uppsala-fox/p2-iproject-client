<template>
  <div
    class="flex justify-center content-center justify-items-center self mt-[20vh] text-white"
  >
    <div
      class="flex flex-col bg-black justify-items-center items-center gap-4 marginBorder justify-center"
    >
      <h1>Welcome</h1>
      <h5>Please Sign in here</h5>
      <form action="post" @submit.prevent="userLogin">
        <div class="p-2">
          <label for="email">Email Adress</label>
          <input
            type="email"
            id="email"
            placeholder="example@mail.com"
            class="input w-full max-w-xs"
            name="email"
            v-model="user.email"
            required
          />
        </div>
        <div class="p-2">
          <label for="password">Password</label>
          <input
            placeholder="please input 5 to 20 characters"
            class="input w-full max-w-xs"
            type="password"
            id="password"
            name="password"
            v-model="user.password"
            required
          />
        </div>
        <div class="p-2 justify-items-center items-center justify-center">
          <button class="btn btn-active btn-secondary" type="submit">
            Sign in
          </button>
        </div>
      </form>
      <p class="p-2">No account? register here or sign in with google</p>
      <div class="p-2 flex flex-row gap-4">
        <router-link
          to="/register"
          class="btn btn-active btn-secondary btn-sm p-2"
          >Sign up</router-link
        >
        <GoogleLogin
          :params="params"
          :onSuccess="onSuccess"
          class="btn btn-active btn-secondary btn-sm p-2"
          >Login with google</GoogleLogin
        >
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";
import swal from "sweetalert";
export default {
  name: "loginPage",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      params: {
        client_id:
          "242976264728-73cs31svb85nfnip7t1o6e85g4am0cd2.apps.googleusercontent.com",
      },
    };
  },
  components: {
    GoogleLogin,
  },
  methods: {
    async userLogin() {
      try {
        const result = await this.$store.dispatch(
          "loginUser",
          this.user
        );
        localStorage.setItem("access_token", result.data.token);
        localStorage.setItem("id", result.data.id);
        localStorage.setItem("email", result.data.email);
        this.$router.push({ name: "home" });
      } catch (err) {
        swal("Error", err.response.data.msg, "error");
      }
    },
  },
  onSuccess(googleUser) {
      const { idToken } = googleUser.getAuthResponse().id_token;
      const result = this.$store.dispatch("googleLogin", idToken);
      localStorage.setItem("access_token", result.data.token);
      localStorage.setItem("email", result.data.email);
      localStorage.setItem("id", result.data.id);
  },
};
</script>

<style scoped>
.marginBorder {
  border: double;
  border-radius: 70px;
  width: 50vh;
  height: 50vh;
}

.marginTop {
  margin-top: 30vh;
}
</style>
