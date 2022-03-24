<template>
  <div>
    <div
      class="container"
      style="
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 85vh;
        width: 100%;
        overflow-x: hidden;
      "
    >
      <div
        class="shadow p-3 mb-5 bg-body rounded mt-4"
        style="
          background-color: rgb(247, 244, 244);
          height: 70vh;
          width: 30%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        "
      >
        <h3 class="fw-normal">Login</h3>
        <form
          class="form"
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          "
          @submit.prevent="login"
        >
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            class="mt-4"
            v-model="dataLogin.email"
          /><br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            class="mt-2"
            v-model="dataLogin.password"
          /><br />
          <button type="submit" class="btn btn-primary mt-2">Sign In</button>
        </form>
        <button @click="pindahRoute" class="btn btn-success mt-2">
          Register
        </button>
      </div>
    </div>
    <HFooter> </HFooter>
  </div>
</template>


<script>
import HFooter from "vue-hacktiv8-footer";
export default {
  name: "LoginView",
  components: { HFooter },
  data() {
    return {
      dataLogin: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      await this.$store.dispatch("prelogin", this.dataLogin);
      if (this.isPreLogin) {
        this.router.push("/loginSpotify");
      }
    },
    pindahRoute() {
      this.$router.push("/register");
    },
  },
  beforeCreate() {
    if (localStorage.access_token) {
      this.$router.push("/dashboard");
    }
  },
  computed: {
    isPreLogin() {
      return this.$store.state.isPreLogin;
    },
  },
};
</script>

<style>
</style>