<template>
  <div>
    <!-- STARTING PAGE -->
    <div
      @scroll="handleScroll"
      class="flex h-screen justify-center text-red-900 bg-center"
      style="
        width: 100%;
        background-image: url('Rijksmuseum.png');
        background-repeat: none;
        background-size: cover;
      "
    >
      <!-- :class="isBlur ? 'blur-sm' : 'blur-none'" -->
      <div
        class="opacity-75 bg-white w-screen py-12 top-0 font-serif my-auto text-6xl hover:blur-none"
      >
        {{ "RIJKSMUSEUM" }}
      </div>
    </div>
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
        class="w-screen py-10 bg-red-200"
      >
        <div class="text-center">
          <div class="">
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
        <img
          class="mr-5 absolute w-70 h-70 right-0 bottom-0"
          src="icons8-museum-64.png"
          alt=""
          srcset=""
        />
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
      class="justify-between flex relative z-0 bg-red-100"
      style="width: 100%; height: 100vh"
    >
      <aside
        class="h-full w-1/2 text-center bg-red-200 flex flex-col justify-center items-center"
      >
        <h1 class="font-serif text-5xl font-bold">Come in!</h1>
        <p class="font-serif py-6 text-xl">
          Besides are all the features that you can use related to Rijksmuseum's
          artworks
        </p>
      </aside>

      <div class="flex flex-col gap-20 items-center justify-center">
        <router-link to="/museum">
          <img src="icons8-museum-64.png" alt="" srcset="" />
        </router-link>
        <form
          class="flex gap-2"
          @submit.prevent="submit"
          enctype="multipart/form-data"
        >
          <label for="file-upload">
            <img src="icons8-museum-64.png" alt="" srcset="" />
          </label>
          <!-- @change="upload"  -->
          <input
            class="hidden"
            @input="handleChangeImg"
            id="file-upload"
            type="file"
          />
          <button>
            <img src="icons8-museum-64.png" alt="" srcset="" />
          </button>
        </form>

        <router-link to="/museum">
          <img src="icons8-museum-64.png" alt="" srcset="" />
        </router-link>
        <router-link to="/museum">
          <img src="icons8-museum-64.png" alt="" srcset="" />
        </router-link>
      </div>
      <!-- Icons -->
    </div>
    <img :src="userImage" />
    <HFooter></HFooter>
  </div>
</template>

<script>
import HFooter from "vue-hacktiv8-footer";
export default {
  name: "LandingPage",
  data() {
    return {
      image: "",
      isBlur: false,
      userImage: "",
    };
  },
  components: {
    HFooter,
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
        // console.log(labelsData);

        const blob = new Blob([labelsData], {
          type: "application/octet-binary",
        });

        console.log(blob);
        const imageURL = URL.createObjectURL(blob);
        console.log(imageURL);
        this.userImage = labelsData;
      } catch (error) {
        console.log(error);
        // console.log(error.response.data.message);
      }
    },
    handleScroll() {
      if (window.scrollY < 50) {
        this.isBlur = true;
      } else {
        this.isBlur = false;
      }
    },
    handleChangeImg(e) {
      console.log(e.target.files);
      if (e.target.files.length) {
        const file = e.target.files[0];
        this.userImage = URL.createObjectURL(file);
        this.$store.commit("SET_USER_FILE", this.userImage);
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
      URL_0: "&imgonly=True&q=gogh",
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
