<template>
  <div id="app">
    <!-- <navbar-comp v-if="!inLoginPageOrRegister"></navbar-comp> -->
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    inLoginPageOrRegister() {
      return this.$store.state.inLoginPageOrRegister;
    },
  },
  created() {
    if (localStorage.access_token_Resto) {
      this.$store.commit("CHANGE_RESTAURANT_IS_LOGIN", true);
    }
    if (localStorage.access_token_Cust) {
      this.$store.commit("CHANGE_customerIsLogin", true);
    }
  },
};
</script>
