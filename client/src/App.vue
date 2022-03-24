<template>
  <div id="app" style="background-color: black">
    <nav class="row shadow-sm">
      <router-link class="col cursor" to="/">Home</router-link> |
      <router-link class="col cursor" to="/photos">Galery</router-link>
      <div class="col-8"></div>
      <router-link v-if="!isLogin" class="col-2 cursor" to="/login">Login / Register</router-link>
      <a v-if="isLogin" @click.prevent="logoutHandler" class="col-2 cursor" to="/login">Logout</a>
    </nav>
    <router-view />
    <HFooter></HFooter>
  </div>
</template>

<script>
import HFooter from "vue-hacktiv8-footer";
export default {
  components: {
    HFooter,
  },
  methods: {
    logoutHandler() {
      localStorage.clear();
      this.$store.commit("SET_ISLOGIN", false);
      this.$router.push("/login");
    },
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  position: fixed;
  width: 101%;
  background-color: black;
  z-index: 99;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
.cursor:hover {
  cursor: pointer;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
