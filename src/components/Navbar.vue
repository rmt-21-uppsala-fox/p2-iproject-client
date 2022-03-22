<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <div>
            <!-- Website Logo -->
            <button type="button" class="flex items-center py-4 px-2">
              <img src="logo.png" alt="Logo" class="h-8 w-8 mr-2" />
              <span class="font-semibold text-gray-500 text-lg">KlikShop</span>
            </button>
          </div>
          <!-- Primary Navbar items -->
          <div class="hidden md:flex items-center space-x-1">
            <button type="button" class="py-2 px-3 text-gray-500 font-semibold">
              <router-link to="/">Home </router-link>
            </button>
          </div>
        </div>
        <!-- Secondary Navbar items -->
        <div class="hidden md:flex items-center space-x-3">
          <button
            v-if="$store.state.flagLogin === false"
            type="button"
            class="py-2 px-3 font-medium text-gray-500 rounded hover:text-white transition duration-300"
          >
            <router-link to="/login">Login </router-link>
          </button>
          <button
            v-if="$store.state.flagLogin === false"
            type="button"
            class="py-2 px-3 font-medium text-gray-500 hover:text-white rounded transition duration-300"
          >
            <router-link to="/register">Register </router-link>
          </button>
          <button
            v-if="$store.state.flagLogin === true"
            @click="logout"
            type="button"
            class="py-2 px-2 text-lg font-medium text-gray-500 hover:bg-green-400 hover:text-white transition duration-300"
          >
            Logout
          </button>
          <button
            @click="goToCartPage"
            v-if="$store.state.flagLogin === true"
            type="button"
            class="py-2 px-2 transition duration-300"
          >
            <i
              class="hover:text-green-600 font-bold text-xl fa fa-shopping-cart"
              aria-hidden="true"
            ></i>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push({ name: "Login" });
    },
    goToCartPage() {
      this.$router.push({ name: "Cart" });
    },
  },
};
</script>

<style></style>
