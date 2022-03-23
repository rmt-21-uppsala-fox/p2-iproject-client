<template>
  <div class="navbar-area">
    <div class="container relative">
      <div class="row">
        <div class="w-full">
          <nav class="flex items-center justify-between navbar navbar-expand-lg">
            <a
              class="mr-4 navbar-brand"
              href="#"
            >
              <img
                src="assets/images/logowhat.png"
                style="width:40%"
                alt="Logo"
              >
            </a>
            <button
              class="block navbar-toggler focus:outline-none lg:hidden"
              type="button"
              data-toggle="collapse"
              data-target="#navbarOne"
              aria-controls="navbarOne"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="toggler-icon"></span>
              <span class="toggler-icon"></span>
              <span class="toggler-icon"></span>
            </button>

            <div
              class="absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white shadow lg:w-auto collapse navbar-collapse lg:block top-100 mt-full lg:static lg:bg-transparent lg:shadow-none"
              id="navbarOne"
            >
              <ul
                id="nav"
                class="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex"
              >
                <li class="nav-item active">
                  <router-link
                    to="/"
                    class="page-scroll"
                  >Home</router-link>
                </li>
                <li class="nav-item">
                  <a class="page-scroll">Meal Plan</a>
                </li>
              </ul>
            </div> <!-- navbar collapse -->

            <div class="absolute right-0 hidden mt-2 mr-24 navbar-btn sm:inline-block lg:mt-0 lg:static lg:mr-0">
              <router-link
                v-if="!isLogin"
                to="/login"
                class="main-btn gradient-btn"
                data-scroll-nav="0"
                href="#"
                rel="nofollow"
              >Login</router-link>
            </div>
            <div class="absolute right-0 hidden mt-2 mr-24 navbar-btn sm:inline-block lg:mt-0 lg:static lg:mr-0">
              <router-link
                v-if="!isLogin"
                to="/register"
                class="main-btn gradient-btn"
                data-scroll-nav="0"
                href="#"
                rel="nofollow"
              >Register</router-link>
            </div>
            <div class="absolute right-0 hidden mt-2 mr-24 navbar-btn sm:inline-block lg:mt-0 lg:static lg:mr-0">
              <a
                @click.prevent="logoutHandler"
                v-if="isLogin"
                class="main-btn gradient-btn"
                data-scroll-nav="0"
                href="#"
                rel="nofollow"
              >Logout</a>
            </div>
          </nav> <!-- navbar -->
        </div>
      </div> <!-- row -->
    </div> <!-- container -->
  </div> <!-- navbar area -->
</template>

<script>
export default {
  name: "NavbarComponent",
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
  methods: {
    logoutHandler() {
      localStorage.clear();
      this.$store.commit("SET_STATUS_LOGIN", false);
    },
  },
};
</script>

<style>
</style>