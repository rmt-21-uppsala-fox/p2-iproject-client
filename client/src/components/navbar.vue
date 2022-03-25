<template>
      <body>
      <!-- Navbar -->
      <header>
        <nav class="py-3 bg-gray-900 navbar-color">
          <div class="flex-1 flex items-center justify-center">
            <div class="flex-shrink-0 flex items-center">
              <span class="text-white opacity-80 text-2xl uppercase"
                >My Forum</span
              >
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4 align-middle">
                <router-link
                  to="/"
                  class="text-white opacity-80 text-md uppercase hover:opacity-100 px-3 py-2"
                  >Home</router-link
                >
                <router-link
                  to="/matches"
                  class="text-white opacity-80 text-md uppercase hover:opacity-100 px-3 py-2"
                  >Matches</router-link
                >
                <router-link
                  to="/PlayerRank"
                  class="text-white opacity-80 text-md uppercase hover:opacity-100 px-3 py-2"
                  >Player Ranking</router-link
                >
                <a
                  to=""
                  class="text-white opacity-80 text-md uppercase hover:opacity-100 px-3 py-2"
                  @click.prevent="logoutHandler"
                  >Logout</a
                >
              </div>
            </div>
          </div>
        </nav>

      </header>
    </body>
</template>

<script>
export default {
name:'Nav-bar',
methods:{
      logoutHandler() {
      localStorage.clear();
      this.$store.commit("SET_ISLOGIN", false);
      this.$router.push("/login");
    },
}
}
</script>

<style>

</style>