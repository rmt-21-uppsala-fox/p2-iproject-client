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
    <!-- <a-light
      color="white"
      angle="300"
      intensity="10"
      position="-0.6 8 2"
    ></a-light> -->
    <a-box
      @click="openWiki(0)"
      :src="museumImage0"
      position="-18.5 3 -8.3"
      rotation="0 70 0"
      width="5.4"
      height="6.5"
      depth="0.1"
    ></a-box>
    <a-box
      @click="openWiki(1)"
      :src="museumImage1"
      position="-8.3 3 -19.8"
      rotation="0 21 0"
      width="7.28"
      height="6.05"
      depth="0.1"
    ></a-box>
    <a-box
      @click="openWiki(2)"
      :src="museumImage2"
      position="6.5 3 -19.5"
      rotation="0 -22 0"
      width="12.5"
      height="6.53"
      depth="0.1"
    ></a-box>
    <a-box
      :src="userFile"
      position="5.821 3 14.010"
      rotation="0 25 0"
      width="6.205"
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
    async openWiki(id) {
      try {
        switch (id) {
          case 0:
            window.open(this.wiki0);
            break;
          case 1:
            window.open(this.wiki1);
            break;
          case 2:
            window.open(this.wiki2);
            break;
          default:
            break;
        }
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
    wiki0() {
      return this.$store.state.wikipediaData0;
    },
    wiki1() {
      return this.$store.state.wikipediaData1;
    },
    wiki2() {
      return this.$store.state.wikipediaData2;
    },
  },
  async created() {
    await this.$store.dispatch("callRijksmuseum", {
      URL_0: "&imgonly=True&q=gogh",
      URL_1: "&imgonly=True&q=night+watch",
      URL_2: "&imgonly=True&q=fishing",
    });
    await this.$store.dispatch("callWikipedia");
  },
};
</script>

<style></style>
