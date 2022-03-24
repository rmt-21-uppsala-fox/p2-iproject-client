<template>
  <div
    class="card w-[90%] bg-neutral mx-auto shadow-2xl p-8 mt-[10%] rounded-xl border border-zinc-500 lg:w-[40%]"
  >
    <form @submit.prevent="signUp">
      <div class="mb-6">
        <a class="text-xl font-bold">Sign Up</a>
      </div>
      <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium label-text"
          >Your email :</label
        >
        <input
          type="email"
          id="email"
          class="input input-bordered w-full"
          required="required"
          placeholder="Please enter your email"
          v-model="email"
        />
      </div>
      <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-medium label-text"
          >Your password :</label
        >
        <input
          type="password"
          id="password"
          class="input input-bordered w-full"
          placeholder="Please enter your password"
          required="required"
          v-model="password"
        />
      </div>
      <button type="submit" class="rounded-lg btn btn-secondary mb-3">
        Sign Up
      </button>
    </form>
    <hr class="mb-3" />
    <div>
      Already have an account?
      <router-link to="/login" class="underline text-primary"
        >Sign In</router-link
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: "RegisterView",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      async signUp() {
        await this.$store.dispatch("register", {
          email: this.email,
          password: this.password,
        });
        if (this.$store.state.isSignedIn) {
          this.$router.push("/");
        }
      },
    },
  };
</script>

<style lang="scss" scoped></style>
