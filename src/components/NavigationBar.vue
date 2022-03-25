<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light"
  >
    <div class="d-flex container align-items-center justify-content-center">
      <div class="me-auto"></div>
      <ul class="navbar-nav mx-2 mb-2 mb-lg-0">
        <li class="nav-item">
          <a
            @click.prevent="toHomePage"
            class="nav-link text-white"
            aria-current="page"
            href="#"
            >Animes</a
          >
        </li>
        <li v-if="isLogin" class="nav-item">
          <a
            @click.prevent="toFavoritesPage"
            class="nav-link text-white"
            aria-current="page"
            href="#"
            >Favorite Animes</a
          >
        </li>
        <li v-if="!isLogin" class="nav-item">
          <a
            @click.prevent="toLoginPage"
            class="nav-link text-white"
            aria-current="page"
            href="#"
            >Login</a
          >
        </li>
        <li v-if="isLogin" class="nav-item">
          <a
            @click.prevent="logout"
            class="nav-link text-white"
            aria-current="page"
            href="#"
            >Logout</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
  methods: {
    toHomePage() {
      this.$router.push({ name: 'AnimesPage'})
    },
    toFavoritesPage() {
      this.$router.push({ name: 'FavoritesPage'})
    },
    toLoginPage() {
      this.$router.push({ name: 'LoginPage'})
    },
    logout () {
      this.$store.dispatch('logout')
      this.$router.push({ name: 'AnimesPage'})
    }
  }
}
</script>

<style scoped>
  nav {
  background: -webkit-linear-gradient(left, #131315, #131315, #131315, #131315);
  filter: drop-shadow(0px 16px 10px #00000099);
}
</style>