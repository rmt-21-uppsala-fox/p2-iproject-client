<template>
  <div id="app">
    <div id="nav">
      <Navbar></Navbar>
    </div>
    <router-view />
    <HFooter></HFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "./components/Navbar.vue";
import HFooter from "vue-hacktiv8-footer";

export default {
  name: "Home",
  components: {
    Navbar,
    HFooter,
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

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
