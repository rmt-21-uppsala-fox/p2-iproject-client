<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col" v-for="data in photos" :key="data.id">
          <img v-animate="'slide-up'" v-lazy="data.src.portrait" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  computed: {
    photos() {
      return this.$store.state.photos;
    },
  },
  methods: {
    fetchPhotos() {
      this.$store.dispatch("fetchPhotos");
    },
  },
  created() {
    this.fetchPhotos();
  },
};
</script>
<style scoped>
img {
  width: 240px;
  margin-bottom: calc(var(--bs-gutter-x) * 0.5);
  margin-top: calc(var(--bs-gutter-x) * 0.5);
}
.animate {
  transition-delay: 1.1s;
  transition-duration: 1.25s;
  transition-timing-function: ease-in
}
 
.slide-up {
  transform: translateY(0);
}
 
.slide-up.animate-active {
  transform: translateY(100px);
}
</style>
