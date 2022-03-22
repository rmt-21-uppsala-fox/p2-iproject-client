<template>
  <div
    class="card w-[90%] bg-white mx-auto shadow-2xl p-8 mt-[10%] rounded-xl border border-slate-500 lg:w-[40%]"
  >
    <form @submit.prevent="signIn">
      <div class="mb-6">
        <a class="text-xl font-bold">Sign In</a>
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Your email:</label
        >
        <input
          type="email"
          id="email"
          class="rounded-lg input input-bordered w-full"
          required="required"
          v-model="email"
        />
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Your password:</label
        >
        <input
          type="password"
          id="password"
          class="rounded-lg input input-bordered w-full"
          required="required"
          v-model="password"
        />
      </div>
      <button type="submit" class="rounded-lg btn mb-3">Sign In</button>
    </form>
    <hr class="mb-3" />
    <div>
      Don't have an account?
      <router-link to="/register" class="underline text-primary"
        >Sign Up</router-link
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: "LoginView",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    components: {},
    methods: {
      async signIn() {
        await this.$store.dispatch("signIn", {
          email: this.email,
          password: this.password,
        });
      },
    },
    async onSuccess(googleUser) {
      try {
        const idToken = googleUser.getAuthResponse().id_token;
        await this.$store.dispatch("googleSignIn", idToken);
        const access_token = localStorage.getItem("access_token");
        if (access_token) {
          this.$router.push({ name: "home" });
        }
      } catch (err) {
        if (!Array.isArray(err)) return this.$toast.error(err.message);
        err.forEach((el) => {
          this.$toast.error(el);
        });
      }
    },
  };
</script>
