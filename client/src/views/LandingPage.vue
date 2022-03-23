<template>
  <div>
    <div class="mr-30 flex flex-col bg-red-500 items-center">
      <div>
        <observer @on-change="onChange" class="test-lazy">
          <img
            class="blur-sm"
            src="Rijksmuseum.png"
            alt=""
            style="height: 100vh"
          />
        </observer>
        <p class="flex flex-col content-center text-center">RIJKSMUSEUM</p>
      </div>
    </div>
    <div
      style="
        width: 100%;
        height: 100vh;
        background-image: url('Rijksmuseum.png');
      "
    ></div>
    <div
      style="
        width: 100%;
        height: 400px;
        background-image: url('Rijksmuseum.png');
        background-size: cover;
        background-attachment: fixed;
      "
    ></div>
    <div
      style="
        width: 100%;
        height: 100vh;
        background-image: url('Rijksmuseum.png');
        background-size: cover;
      "
    ></div>
  </div>
</template>

<script>
import Observer from "vue-intersection-observer";
export default {
  name: "LandingPage",
  data() {
    return {
      currentInfo: false,
    };
  },
  props: {
    imageSrc: {
      type: [String, Number],
    },
  },
  components: {
    Observer,
  },
  methods: {
    onChange(entry, unobserve) {
      // After loading Cancel monitoring, optimise performance
      if (entry.isIntersecting) {
        unobserve();
      }
      this.currentInfo = entry.isIntersecting
        ? this.imageSrc
        : "https://avatars2.githubusercontent.com/u/20992106?s=460&v=4";
    },
  },
};
</script>

<style></style>
