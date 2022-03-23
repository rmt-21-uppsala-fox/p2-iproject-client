<template>
  <div>
    <!-- <NavbarGlobal
      class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800"
    ></NavbarGlobal> -->
    <div v-if="hotels.data">
      <!-- Start -->
      <a
        @click="goToSingleMarkerPage(hotel.id)"
        v-for="hotel in hotels.data.body.searchResults.results"
        :key="hotel.id"
        href="#"
        class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          :src="hotel.optimizedThumbUrls.srpDesktop"
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ hotel.name }}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 justify-center">
            {{ hotel.address.streetAddress }}, {{ hotel.address.postalCode }},
            {{ hotel.address.locality }}, {{ hotel.address.countryName }}
          </p>
        </div>
      </a>
      <!-- End -->
    </div>

    <div><h1 class="text-4xl">Hello World</h1></div>
  </div>
</template>

<script>
// import NavbarGlobal from "../components/NavbarGlobal.vue";

export default {
  name: "HomePage",
  // components: {
  //   NavbarGlobal,
  // },
  methods: {
    async goToSingleMarkerPage(id) {
      console.log(id, "masuk 47 homepage");
      await this.$store.dispatch("fetchMarkerById", id);
      this.$router.push({ name: "SingleMarkerGoogleMaps", params: { id } });
    },
  },
  async created() {
    await this.$store.dispatch("fetchHotels");
  },
  computed: {
    hotels() {
      return this.$store.state.hotels;
    },
  },
};
</script>

<style></style>
