<template>
  <div class="grid grid-cols-3 login">
    <div class="card w-100 col-start-2 bg-neutral text-neutral-content">
      <div class="card-body items-center text-center">
        <h2 class="card-title">Login!</h2>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            v-model="inputLogin.email"
            type="email"
            placeholder="Type here"
            class="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            v-model="inputLogin.password"
            type="password"
            placeholder="Type here"
            class="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div class="card-actions justify-end">
          <button @click.prevent="doLogin" class="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      inputLogin: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async doLogin() {
      await this.$store.dispatch("login", this.inputLogin);
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>