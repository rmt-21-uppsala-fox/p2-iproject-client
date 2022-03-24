<template>
  <div class="container px-4 relative">
    <span
      class="absolute top-5 bg-slate-100 px-2 rounded"
      @click="$router.push({ name: 'HomePage' })"
      >Back</span
    >
    <p class="text-center mt-5 my-8 font-semibold text-xl">Your Account</p>
    <button
      @click="logout"
      class="px-4 py-2 bg-red-300 text-white font-semibold rounded-md"
    >
      logout
    </button>
  </div>
</template>

<script>
export default {
  name: "ProfileUser",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "LoginPage" });
    },
  },
};
</script>

<style>
</style>