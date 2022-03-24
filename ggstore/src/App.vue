<template>
  <div id="app" class="flex flex-col min-h-screen">
    <div
      class="navbar bg-base-200 max-w-screen px-[10%] shadow-lg sticky top-0 z-50"
    >
      <div class="navbar-start">
        <a
          class="normal-case text-2xl font-bold cursor-pointer"
          @click.prevent="goToHome"
          >GGStore</a
        >
      </div>
      <div class="navbar-center">
        <ul class="menu menu-horizontal p-0">
          <li><a @click.prevent="goToHome">Home</a></li>
          <li>
            <a @click.prevent="goSteamWallet">Steam Wallet</a>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <label
          tabindex="0"
          class="btn btn-ghost btn-circle"
          v-if="isSignedIn"
          @click.prevent="goToMyCart"
        >
          <div class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span
              :class="`badge badge-sm ${
                myCartTotalItems > 0 ? 'badge-error' : ''
              } indicator-item`"
              >{{ myCartTotalItems }}</span
            >
          </div>
        </label>
        <div class="dropdown dropdown-end" v-if="isSignedIn">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <i class="bx bx-user-circle text-4xl"></i>
          </label>
          <ul
            tabindex="0"
            class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-secondary rounded-box w-52"
          >
            <li @click="signOut">
              <a class="text-slate-900">Logout</a>
            </li>
          </ul>
        </div>
        <router-link to="/login" class="btn" v-else>Sign In</router-link>
      </div>
    </div>
    <router-view />
    <HFooter class="mt-auto" />
  </div>
</template>

<script>
  import HFooter from "vue-hacktiv8-footer";

  import { auth } from "../firebase/firebase";
  export default {
    name: "App",
    components: {
      HFooter,
    },
    data() {
      return {};
    },
    methods: {
      goToHome() {
        if (this.$route.path !== "/") {
          this.$router.push("/");
        }
      },
      goSteamWallet() {
        if (this.$route.path !== "/steam-wallet") {
          this.$router.push("/steam-wallet");
        }
      },
      signOut() {
        auth.signOut();
        this.$store.commit("MUTATE_IS_SIGNED_IN", false);
      },
      goToMyCart() {
        if (this.$route.path !== "/my-cart" && this.myCartTotalItems > 0) {
          this.$router.push("/my-cart");
        }
      },
    },
    computed: {
      isSignedIn() {
        return this.$store.state.isSignedIn;
      },
      myCartTotalItems() {
        return this.$store.state.myCartTotalItems;
      },
    },
    beforeCreate() {
      if (auth.currentUser) {
        this.$store.commit("MUTATE_IS_SIGNED_IN", true);
        this.$store.dispatch("getMyCart");
      }
    },
  };
</script>

<style>
  @import "https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css";
</style>
