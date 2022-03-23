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
      <!-- Header -->
      <header-component></header-component>
      <!-- End Header -->
      <!-- Filter -->
      <filter-component></filter-component>
      <!-- End Filter -->
      <!-- Content -->
      <card-collection v-bind:gameCollection="gameCollection"></card-collection>
      <!-- End Content -->
    </main>
    <!-- End Body -->
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import Navbar from "../components/NavBar.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import FilterComponent from "../components/FilterComponent.vue";
import CardCollection from "../components/CardCollection.vue";
export default {
  components: {
    SideBar,
    Navbar,
    HeaderComponent,
    FilterComponent,
    CardCollection,
  },
  computed: {
    gameCollection() {
      return this.$store.state.gamesCollection;
    },
  },
  created: function () {
    this.$store.dispatch(`showGameCollection`);
  },
};
</script>
