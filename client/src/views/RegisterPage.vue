<template>
  <!-- registerpage -->
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    <h1 class="mx-auto font-bold text-2xl">Sign Up Form</h1>
    <span class="mx-auto text-slate-400 mb-5">Let's sign up your account</span>
    <form @submit.prevent="register">
      <div class="mb-4">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="email-register"
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
          id="email-register"
          type="text"
          placeholder="your@email.com"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="image-url-register"
        >
          Your Image
        </label>
        <input
          v-model="imageUrl"
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
          id="image-url-register"
          type="text"
          placeholder="your imageUrl"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="password-register"
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
          id="password-register"
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
          Sign Up
        </button>
      </div>
    </form>
    <div class="flex items-center justify-center mt-5">
      <p>
        Already have an account yet?
        <a
          @click.prevent="$router.push({ name: 'LoginPage' })"
          class="underline text-blue-700"
          >Sign in</a
        >
        here
      </p>
    </div>
  </div>
  <!-- registerpage end -->
</template>

<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      email: "",
      imageUrl: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        const user = {
          email: this.email,
          imageUrl: this.imageUrl,
          password: this.password,
        };
        await this.$store.dispatch("register", user);
        this.$router.push({ name: "LoginPage" });
      } catch (error) {
        console.log(error.response.data);
      }
    },
  },
};
</script>

<style>
</style>