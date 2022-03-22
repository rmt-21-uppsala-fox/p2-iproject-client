<template>
  <div class="flex">
    <!-- SideBar -->
    <side-bar></side-bar>
    <!-- End SideBar -->
    <!-- Body -->
    <main class="min-h-screen w-full bg-[#021c1e]">
      <!-- Navbar -->
      <navbar></navbar>
      <!-- End Navbar -->
      <!-- Content -->
      <content-game-detail v-bind:games="getDetailGame"></content-game-detail>
      <!-- End Content -->
    </main>
    <!-- End Body -->
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import Navbar from "../components/NavBar.vue";
import ContentGameDetail from "../components/ContentGameDetail.vue";
export default {
  components: {
    SideBar,
    Navbar,
    ContentGameDetail,
  },
  computed: {
    getDetailGame() {
      return this.$store.state.detailGame;
    },
  },
  created: function () {
    this.$store.dispatch(`getDataGame`);
  },
};
</script>
