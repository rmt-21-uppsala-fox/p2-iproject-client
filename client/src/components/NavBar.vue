<template>
  <nav
    class="flex items-center justify-between px-10 bg-[#021c1e] py-6 border-b"
  >
    <div
      class="flex items-center bg-[#004445] px-4 py-2 rounded-full space-x-3 w-11/12"
    >
      <input
        type="text"
        placeholder="search"
        class="bg-[#004445] outline-none w-full"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 cursor-pointer text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
    <div class="flex items-center space-x-4 w-[15.5%]">
      <a
        class="link link-hover text-white pl-10"
        v-if="!isLogin"
        @click="goToLogin"
        >Sign In</a
      >
      <a
        class="link link-hover text-white px-5"
        v-if="!isLogin"
        @click="goToRegister"
        >Sign Up</a
      >
      <a class="link link-hover text-white pl-28" @click="logout" v-if="isLogin">Logout</a>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    async goToLogin() {
      try {
        this.$router.push(`/login`);
      } catch (err) {
        console.log(err);
      }
    },
    async goToRegister() {
      try {
        this.$router.push(`/register`);
      } catch (err) {
        console.log(err);
      }
    },
    async logout() {
      try {
        await this.$store.dispatch(`logout`);
        this.$router.push(`/`);
      } catch (err) {
        console.log(err);
      }
    },
  },

  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
};
</script>
