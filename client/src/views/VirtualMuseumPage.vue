<template>
  <a-scene>
    <a-camera
      position="0 0 0"
      wasd-controls-enabled="true"
      fov="60"
      near="0.1"
      far="100"
    >
      <a-cursor></a-cursor>
    </a-camera>
    <!-- x y z -->
    <!-- x = plane -->
    <!-- y = heigth -->
    <!-- @click="callWikipedia(0)" -->
    <a-box
      @click="callWikipedia(0)"
      :src="museumImage0"
      position="-18.5 3 -8.3"
      rotation="0 70 0"
      width="10"
      height="6"
      depth="0.1"
    ></a-box>
    <a-box
      @click="callWikipedia(1)"
      :src="museumImage1"
      position="-8.3 4 -19.8"
      rotation="0 21 0"
      width="10"
      height="6"
      depth="0.1"
    ></a-box>
    <a-box
      @click="callWikipedia(2)"
      :src="museumImage2"
      position="6.5 4 -19.5"
      rotation="0 -22 0"
      width="5"
      height="8"
      depth="0.1"
    ></a-box>
    <a-assets>
      <img id="texture" src="5459923.jpg" />
    </a-assets>
    <a-assets>
      <img id="wallpapertexture" src="wallpaper.jpg" />
    </a-assets>

    <!-- FLOOR -->
    <a-plane
      position="0 -3 0"
      rotation="90 0 0"
      width="170"
      height="250"
      src="#texture"
      side="double"
      repeat="1 1"
    ></a-plane>
    <a-sky color="#222"></a-sky>

    <a-cylinder
      position="-1 2 -3"
      rotation="0 90 0"
      radius="20"
      segments-radial="8"
      height="15"
      color="bisque"
      side="double"
      metalness="0.7"
      src="#wallpapertexture"
      repeat="20 5"
    ></a-cylinder>
  </a-scene>
</template>

<script>
export default {
  name: "VirtualMuseumPage",
  methods: {
    async callWikipedia(id) {
      try {
        const response = await this.$store.dispatch(`callWikipedia`, id);
        window.open(response.data.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    museumImage0() {
      if (this.$store.state.museumData) {
        return this.$store.state.museumData?.artObjects[0].webImage.url;
      } else {
        return console.log(``);
      }
    },
    museumImage1() {
      if (this.$store.state.museumData) {
        return this.$store.state.museumData?.artObjects[1].webImage.url;
      } else {
        return console.log(``);
      }
    },
    museumImage2() {
      if (this.$store.state.museumData) {
        return this.$store.state.museumData?.artObjects[2].webImage.url;
      } else {
        return console.log(``);
      }
    },
  },
  async created() {
    await this.$store.dispatch("callRijksmuseum");
  },
};
</script>

<style></style>
