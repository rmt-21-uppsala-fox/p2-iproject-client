<template>
  <!-- loginpage -->
  <div
    class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-20"
  >
    <h1 class="mx-auto font-bold text-2xl">Sign In Form</h1>
    <span class="mx-auto text-slate-400 mb-5">Let's sign in your account</span>
    <form @submit.prevent="login">
      <div class="mb-4">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="login-username"
        >
          Email
        </label>
        <input
          v-model="email"
          class="
            shadow
            appearance-none
            border
            rounded
            w-full
            py-2
            px-3
            text-grey-darker
          "
          id="login-username"
          type="text"
          placeholder="your@email.com"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="password-login"
        >
          Password
        </label>
        <input
          v-model="password"
          class="
            shadow
            appearance-none
            border border-red
            rounded
            w-full
            py-2
            px-3
            text-grey-darker
            mb-3
          "
          id="password-login"
          type="password"
          placeholder="******************"
        />
        <p class="text-red text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-center">
        <button
          class="
            hover:bg-blue-500
            bg-blue-400
            hover:bg-blue-dark
            text-white
            font-bold
            py-2
            px-4
            rounded
          "
          type="submit"
        >
          Sign In
        </button>
      </div>
    </form>
    <div class="flex items-center justify-center mt-5">
      <p>
        Dont have an account yet?
        <a
          @click.prevent="$router.push({ name: 'HomePage' })"
          class="underline text-blue-700"
          >Sign up</a
        >
        here
      </p>
    </div>
  </div>
  <!-- loginpage end -->
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        let payload = { email: this.email, password: this.password };
        let { data } = await this.$store.dispatch("login", payload);
        localStorage.access_token = data.access_token;
        this.$router.push("/");
      } catch (error) {
        console.log(error.response.data);
      }
    },
  },
};
</script>

<style>
</style>