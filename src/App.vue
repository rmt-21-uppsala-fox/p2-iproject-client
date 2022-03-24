<template>
  <div id="app">
    <navbar-comp v-if="!inLoginPageOrRegister"></navbar-comp>
    <router-view />
  </div>
</template>

<script>
import navbarComp from "./components/Navbar.vue";
export default {
  components: {
    navbarComp,
  },
  data() {
    return {};
  },
  computed: {
    inLoginPageOrRegister() {
      return this.$store.state.inLoginPageOrRegister;
    },
  },
  created() {},
};
</script>
