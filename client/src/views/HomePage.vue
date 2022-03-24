<template>
  <div style="width: 100%">
    <img style="width: 100%" v-animate="'slide-up'" src="@/assets/main-banner.jpg" alt="" />

    <div class="container">
      <carousel style="margin: auto" :autoplay="true" :nav="false">
        <img @click.prevent="fetchTripByid" class="img" v-for="trip in trips" :key="trip.id" :src="trip.imgUrl" />
      </carousel>
      <p style="margin-left: 40px; color: white">felis minim in id sed augue aliquet irure vehicula. euismod veniam, aenean quis, quis, fermentum. nec, malesuada vulputate mi. eget, dapibus eget, molestie nostrud pretium elit. mollis tempor pharetra, veniam,</p>

      <h2 style="margin-top=20px">Choose your trip</h2>
      <div class="row">
        <div class="col" v-for="trip in trips" :key="trip.id">
          <img class="imgCircle" :src="trip.imgUrl" />
          <div>
            <a @click.prevent="fetchTripByid(trip.id)">{{ trip.id }}</a>
          </div>
        </div>
      </div>

      <div class="row" style="margin-bottom: 120px">
        <div class="col-7"><img style="width: 100%" src="@/assets/side-banner.jpg" alt="" /></div>
        <div class="col-5">
          <h1 style="padding-top: 250px; text-weight: bolder">LIFE OF ADVENTURE</h1>
          <p style="padding-top: 20px; margin-left: 80px; color: white; text-align: left">felis minim in id sed augue aliquet irure vehicula. euismod veniam, aenean quis, quis, fermentum. nec, malesuada vulputate mi. eget, dapibus eget, molestie nostrud pretium elit. mollis tempor pharetra, veniam, dapibus eget.</p>
        </div>
      </div>

      <div class="row">
        <div class="col textHome">Photos of An Adventure</div>
        <div class="col textHome2">See more >></div>
      </div>
      <div class="row g-3" style="flex-wrap: wrap; margin-bottom: 120px">
        <div class="col" v-for="data in photosHome" :key="data.id">
          <img style="width: 300px; margin-top: 20px" v-lazy="data.src.tiny" alt="" />
        </div>
      </div>
    </div>
    <img style="width: 100%" src="@/assets/bottom-banner.jpg" alt="" />
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  name: "HomePage",
  components: {
    carousel,
  },
  computed: {
    trips() {
      return this.$store.state.trip;
    },
    photosHome() {
      return this.$store.state.photosHome;
    },
  },
  methods: {
    fetchTrip() {
      this.$store.dispatch("fetchTrip");
    },
    fetchPhotosHome() {
      this.$store.dispatch("fetchPhotosHome");
    },
    fetchTripByid(id) {
      console.log(id, "id dalam");
      this.$store.dispatch("fetchTripByid", this.$route.params.id);
      this.$router.push({ name: "DetailTrip", params: { id } });
    },
  },
  created() {
    this.fetchTrip();
    this.fetchPhotosHome();

    if (localStorage.getItem("access_token")) {
      this.$store.commit("SET_ISLOGIN", true);
    } else {
      this.$store.commit("SET_ISLOGIN", false);
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  font-family: Verdana, sans-serif;
  margin: 0;
}
.mySlides {
  display: none;
}
.img {
  vertical-align: middle;
  max-width: 100%;
  margin: 0 35px;
  height: 200px;
  object-fit: cover;
}
.imgCircle {
  /* vertical-align: middle; */
  width: 120px;
  /* margin: 0 35px; */
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  /* color: white; */
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgb(0, 0, 0);
}

a {
  color: white !important;
}
a:hover {
  cursor: pointer;
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active,
.dot:hover {
  background-color: #000000;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 0.5s;
  animation-name: fade;
  animation-duration: 0.5s;
}

@-webkit-keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
h1 {
  color: white;
}
h2 {
  color: white;
}
p {
  color: white;
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev,
  .next,
  .text {
    font-size: 11px;
  }
}

.textHome {
  color: white;
  text-align: start;
  font-size: 24px;
}

.textHome2 {
  color: white;
  font-size: 18px;
  text-align: end;
}

.animate {
  transition-delay: 1.1s;
  transition-duration: 1.25s;
  transition-timing-function: ease-in;
}
.slide-up {
  transform: translateY(0);
}

.slide-up.animate-active {
  transform: translateY(100px);
}
</style>
