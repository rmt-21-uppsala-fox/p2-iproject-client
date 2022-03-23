<template>
  <div>
    <label for="">Search</label>
    <input type="text" v-model="search" />
    <button @click="searchSong">Search</button>
  </div>
</template>

<script>
export default {
  name: "LandingView",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchSong() {
      this.$store.dispatch("player", this.search);
    },
  },
};
</script>

<style>
</style>