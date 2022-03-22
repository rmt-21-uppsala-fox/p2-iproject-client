<template>
  <div class="h-screen">
    <navbar></navbar>

    <router-view></router-view>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    //HelloWorld,
    Navbar,
  },
};
</script>

<style>
@import "../dist/output.css";
@import url("https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css");
@import url("https://cdn.tailwindcss.com");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
