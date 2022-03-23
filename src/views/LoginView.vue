<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Login now!</h1>
        <p class="py-6">
          Anda dapat melakukan registrasi pada menu HOME dengan menekan tombol REGISTER jika belum memiliki akun.
        </p>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
            v-model="inputLogin.email"
              type="text"
              placeholder="email"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
            v-model="inputLogin.password"
              type="password"
              placeholder="password"
              class="input input-bordered"
            />
          </div>
          <div class="form-control mt-6">
            <button @click.prevent="doLogin" class="btn btn-primary">Login</button>
          </div>
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