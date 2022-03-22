<template>
  <div id="app">
    <NavBar />
    <router-view />
    <HFooter class="flex flex-col justify-center p-5"></HFooter>
  </div>
</template>
<script>
import HFooter from "vue-hacktiv8-footer";
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    HFooter,
    NavBar,
  },
};
</script>
<style>
.social-links {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>