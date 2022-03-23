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
    <a-box
      @click="callWikipedia(0)"
      :src="museumImage0"
      position="-18.5 2 -8.3"
      rotation="0 70 0"
      width="6.205"
      height="5"
      depth="0.1"
    ></a-box>
    <a-box
      @click="callWikipedia(1)"
      :src="museumImage1"
      position="-8.3 3 -19.8"
      rotation="0 21 0"
      width="7.28"
      height="6.05"
      depth="0.1"
    ></a-box>
    <a-box
      @click="callWikipedia(2)"
      :src="museumImage2"
      position="6.5 3 -19.5"
      rotation="0 -22 0"
      width="12.5"
      height="6.53"
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
    <a-box
      position="1 1 1"
      @click.prevent="back"
      title="Back"
      image="#homeThumbnail"
    ></a-box>
  </a-scene>
</template>

<script>
export default {
  name: "VirtualMuseumPage",
  methods: {
    async callWikipedia(id) {
      try {
        const response = await this.$store.dispatch(`callWikipedia`, id);
        console.log(response);
        window.open(response.data.data);
      } catch (error) {
        console.log(error);
      }
    },
    back(e) {
      e.preventDefault();
      this.$router.push("/");
      var html = document.querySelector("html");
      html.removeAttribute("class");
    },
  },
  computed: {
    museumImage0() {
      if (this.$store.state.image_0) {
        return this.$store.state.image_0?.artObjects[0].webImage.url;
      } else {
        return console.log(``);
      }
    },
    museumImage1() {
      if (this.$store.state.image_1) {
        return this.$store.state.image_1?.artObjects[0].webImage.url;
      } else {
        return console.log(``);
      }
    },
    museumImage2() {
      if (this.$store.state.image_2) {
        return this.$store.state.image_2?.artObjects[0].webImage.url;
      } else {
        return console.log(``);
      }
    },
  },
  async created() {
    await this.$store.dispatch("callRijksmuseum", {
      URL_0: "&imgonly=True&q=corpses+of",
      URL_1: "&imgonly=True&q=night+watch",
      URL_2: "&imgonly=True&q=fishing",
    });
  },
};
</script>

<style></style>
