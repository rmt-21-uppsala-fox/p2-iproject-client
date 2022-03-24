<template>
  <div class="home">
    <div class="mt-5">
      <carousel :perPage="3">
        <slide v-for="item in photos" :key="item.id">
          <img class="" :src="item.src.medium" />
        </slide>
      </carousel>
    </div>
    <div class="container col-9 mt-5">
      <div class="row gx-4 gx-lg-5">
        <!-- each-card -->
        <div
          v-for="item in leagues"
          :key="item.id"
          class="col-md-4 mb-5"
          style="border-radius: 5px; background-color: #484e54"
        >
          <div class="card h-100">
            <img
              class="card-img-top py-3"
              :src="item.image"
              width="250px"
              height="180px"
              alt="Card image cap"
            />
            <div class="card-body">
              <h2 class="card-title">{{ item.name }}</h2>
              <p class="card-text justify-content">
                {{ item.description }}
              </p>
            </div>
            <div class="card-footer">
              <div>
                <button
                  v-if="favLeague == item.name"
                  @click.prevent="seeTable"
                  class="btn btn-secondary btn-sm text-light"
                >
                  Go to Tables
                </button>
                <button
                  v-else-if="favLeague == ''"
                  @click.prevent="claimFav(item.name)"
                  class="btn btn-warning btn-sm text-dark"
                >
                  Set as Favorite
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- each-card -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "HomeView",
  components: {
    Carousel,
    Slide,
  },
  methods: {
    claimFav(value) {
      let payload = {
        leagueName: value,
      };
      this.$store.dispatch("claimFav", payload);
    },
    seeTable() {
      this.$router.push("/landing");
    },
  },
  computed: {
    vids() {
      return this.$store.state.vids;
    },
    leagues() {
      return this.$store.state.leagues;
    },
    photos() {
      return this.$store.state.photos;
    },
    favLeague() {
      return this.$store.state.favLeague;
    },
  },
  created() {
    this.$store.dispatch("getCarousel");
  },
};
</script>
