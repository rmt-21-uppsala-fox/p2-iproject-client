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
  </div>
</template>

<script>
  import { auth } from "../firebase/firebase";
  export default {
    name: "App",
    components: {},
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
    },
    computed: {
      isSignedIn() {
        return this.$store.state.isSignedIn;
      },
    },
    beforeCreate() {
      if (auth.currentUser) {
        this.$store.commit("MUTATE_IS_SIGNED_IN", true);
      }
    },
  };
</script>

<style>
  @import "https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css";
</style>
