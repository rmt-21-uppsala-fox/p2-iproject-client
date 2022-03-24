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
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        "
      >
        <h3>Register</h3>
        <form class="form" @submit.prevent="register">
          <label class="mt-2">email: </label>
          <input
            type="text"
            name="email"
            id="emailRegister"
            v-model="regis.email"
          /><br />
          <label class="mt-2 mb-2">password: </label>
          <input
            type="password"
            name="password"
            id="passwordRegister"
            v-model="regis.password"
          /><br /><br />
          <button class="btn btn-primary">Register</button>
        </form>
      </div>
    </div>
    <HFooter> </HFooter>
  </div>
</template>

<script>
import HFooter from "vue-hacktiv8-footer";
export default {
  name: "RegisterPage",
  components: { HFooter },
  data() {
    return {
      regis: {
        username: "",
        address: "",
        phoneNumber: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async register() {
      await this.$store.dispatch("regis", this.regis);
      if (this.isRegis) {
        this.$router.push("/login");
      }
    },
  },
  beforeCreate() {
    if (localStorage.access_token) {
      this.$router.push("/dashboard");
    } else if (localStorage.access_tokenCustom) {
      this.$router.push("/");
    }
  },
  computed: {
    isRegis() {
      return this.$store.state.isRegister;
    },
  },
};
</script>

<style>
</style>