<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a @click="toHome" class="btn btn-ghost normal-case text-xl"
        >FAST ORDER</a
      >
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li v-if="restaurantIsLogin || customerIsLogin">
          <a @click="toHome()">Home</a>
        </li>
        <li v-if="!restaurantIsLogin && !customerIsLogin">
          <a @click="changePage('/register')">Sign Up</a>
        </li>
        <li v-if="!restaurantIsLogin && !customerIsLogin">
          <a @click="changePage('/login')">Sign In</a>
        </li>
        <li v-if="customerIsLogin">
          <a @click="changePage('/orderlist')">Order List</a>
        </li>
        <li v-if="restaurantIsLogin || customerIsLogin">
          <a @click="doLogout">Sign Out</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbarComp",
  data() {
    return {};
  },
  methods: {
    toHome() {
      if (this.restaurantIsLogin) {
        this.$router.push("/restaurant");
      } else if (this.customerIsLogin) {
        this.$router.push(`${this.$route.params.RestaurantId}/customer`);
      }
    },
    changePage(page) {
      this.$router.push(page);
    },
    doLogout() {
      this.$store.dispatch("doLogout");
      this.$router.push("/");
    },
  },
  computed: {
    restaurantIsLogin() {
      return this.$store.state.restaurantIsLogin;
    },
    customerIsLogin() {
      return this.$store.state.customerIsLogin;
    },
  },
  created() {},
};
</script>

<style>
</style>