<template>
  <div>
    <div class="navbar bg-base-100">
      <div class="navbar-start"></div>
      <div class="navbar-center hidden lg:flex">
        <div class="btn-group">
          <input
            @click="changePage('home')"
            type="radio"
            name="options"
            data-title="Home"
            class="btn"
            checked
          />
          <input
            @click="changePage('about')"
            type="radio"
            name="options"
            data-title="Tentang"
            class="btn"
          />
          <input
            @click="changePage('school')"
            type="radio"
            name="options"
            data-title="Daftar Sekolah"
            class="btn"
          />
          <input
            v-if="isLoggedIn"
            @click="changePage('dashboard')"
            type="radio"
            name="options"
            data-title="Dashboard"
            class="btn"
          />
        </div>
      </div>
      <div class="navbar-end">
        <a
          v-if="isLoggedIn === false"
          @click="changePage('login')"
          class="btn btn-ghost"
          >Login</a
        >
        <a v-if="isLoggedIn === true" @click="doLogout()" class="btn btn-ghost">Logout</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      page: "",
    };
  },
  methods: {
    changePage(page) {
      this.page = page;
      this.$store.commit("SET_PAGE", page);
      this.$router.push({ name: `${page}` }).catch(() => {});
    },
    doLogout() {
      localStorage.clear();
      this.$store.commit("SET_LOGIN", false);
      this.$router.push({ name: "home" }).catch(() => {});
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLogin;
    },
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.$store.commit("SET_LOGIN", true);
    }
  },
};
</script>

<style>
</style>
