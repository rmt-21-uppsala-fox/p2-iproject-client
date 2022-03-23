<template>
  <div>
    <div class="flex flex-col justify-center items-center">
      <div class="imageInjected z-10 text-6xl font-serif">
        {{ "RIJKSMUSEUM" }}
      </div>
      <div class="z-10 justify-center items-center"></div>
    </div>

    <div
      id="content2"
      style="
        width: 100%;
        height: 100vh;
        background-image: url('Rijksmuseum.png');
      "
    ></div>
    <div
      id="content3"
      style="
        width: 100%;
        height: 400px;
        background-image: url('Night-watch.png');
        background-size: cover;
        background-attachment: fixed;
      "
    ></div>

    <div
      id="content4"
      class="grid place-content-center relative z-0 bg-red-100"
      style="width: 100%; height: 50vh"
    >
      <div
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        class="hero rounded-xl bg-red-200"
      >
        <div class="hero-content w-96 text-center">
          <div class="max-w-md">
            <h1 class="font-serif text-3xl font-bold">
              Hello and welcome to Rijksmuseum's virtual gallery
            </h1>
            <p class="font-serif text-xl py-6">
              Currently, The Rijksmuseum's artworks that are displayed on our
              virtual museum can be seen below
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Carousel -->
    <div id="content5" class="carousel h-screen w-full">
      <div id="slide1" class="carousel-item relative w-full">
        <img :src="museumImage0" class="w-full object-contain" />
        /
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a disabled="disabled" class="btn btn-circle">❮</a>
          <a href="#slide2" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <img :src="museumImage1" class="w-full object-contain" />
        /
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a href="#slide1" class="btn btn-circle">❮</a>
          <a href="#slide3" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <img :src="museumImage2" class="w-full object-contain" />
        /
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a href="#slide2" class="btn btn-circle">❮</a>
          <a disabled="disabled" class="btn btn-circle">❮</a>
        </div>
      </div>
    </div>
    <div
      id="content6"
      class="grid place-content-center relative z-0 bg-red-100"
      style="width: 100%; height: 100vh"
    >
      <div class="hero rounded-xl bg-red-200">
        <div class="hero-content text-center">
          <aside class="max-w-md">
            <h1 class="font-serif text-3xl font-bold">Come in!</h1>
            <p class="font-serif py-6">
              Besides are all the features that you can use related to
              Rijksmuseum's artworks
            </p>
          </aside>
        </div>
      </div>

      <!-- Icons -->
      <router-link to="/museum">
        <img src="icons8-museum-64.png" alt="" srcset="" />
      </router-link>
      <form
        class="flex gap-2"
        @submit.prevent="submit"
        enctype="multipart/form-data"
      >
        <label class="btn" for="file-upload"> Send </label>
        <input @change="upload" id="file-upload" type="file" />
        <button class="btn">Feed</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {
      image: "",
    };
  },
  methods: {
    async upload(file) {
      this.image = file.target.files[0];
    },
    async submit() {
      try {
        const formData = new FormData();
        formData.append("file", this.image);
        const labelsData = await this.$store.dispatch("upload", formData);
        console.log(labelsData);

        console.log(`success`);
      } catch (error) {
        console.log(error.response);
      }
    },
    handleScroll() {
      if (window.scrollY < 400) {
        console.log(window.scrollY);
        console.log(`qwwwwwwww`);
      }
    },
  },
  computed: {
    museumImage0() {
      if (this.$store.state.image_0) {
        return this.$store.state?.image_0?.artObjects[0]?.webImage?.url;
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
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
.imageInjected {
  background-image: url("Rijksmuseum.png");
}
</style>
