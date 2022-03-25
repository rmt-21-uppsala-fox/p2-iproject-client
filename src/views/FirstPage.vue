<template>
  <div>
    <navbarComp></navbarComp>

    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello there!</h1>
          <p class="py-6">
            If you're a customer please read the QR Code from the restaurant to
            get in.
          </p>
          <button class="btn btn-primary">Enjoy your food!</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbarComp from "../components/Navbar.vue";
export default {
  name: "firstPageComp",
  components: {
    navbarComp,
  },
  created() {
    this.$store.commit("CHANGE_inFirstPage", true);
  },
};
</script>

<style>
</style>