<template>
  <form
    @submit.prevent="register"
    class="
      d-flex
      flex-column
      justify-content-center
      align-items-center
      w-100
      h-100
      mt-5
    "
  >
    <div class="d-flex flex-column justify-content-center w-50 h-100">
      <h1>Register</h1>
      <div class="d-flex align-items-center form-group">
        <label class="m-2" for="email">Email</label>
        <input
          class="form-control"
          v-model="regData.email"
          name="email"
          type="text"
        />
      </div>
      <div class="d-flex align-items-center form-group">
        <label class="m-2" for="password">Password</label>
        <input
          class="form-control"
          v-model="regData.password"
          name="password"
          type="password"
        />
      </div>
      <button class="btn btn-primary mt-2" type="submit">Register</button>
      <router-link to="/login"
        ><button class="btn btn-primary mt-2">
          Back to Login Page
        </button></router-link
      >
    </div>
  </form>
</template>

<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      regData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async register() {
      try {
        const { data } = await this.$store.dispatch("register", this.regData);
        console.log(data);
        // this.$router.push({ name: "LoginPage" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>