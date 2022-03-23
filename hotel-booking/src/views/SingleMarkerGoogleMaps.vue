<template>
  <div>
    <div class="flex">
      <div
        class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <!-- <a href="#">
          <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
        </a> -->
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {{ hotelName }}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ markersById.data.body.propertyDescription.address.fullAddress }}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ markersById.data.body.hygieneAndCleanliness.healthAndSafetyMeasures.description }}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{
              markersById.data.body.hygieneAndCleanliness.hygieneQualifications.qualifications[0]
            }}
          </p>
          <!-- <a
            href="#"
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              class="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a> -->
        </div>
      </div>

      <div
        class="p-4 max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Standard Ballroom plan
        </h5>
        <div class="flex items-baseline text-gray-900 dark:text-white">
          <span class="text-3xl font-semibold">{{ formatPrice }}</span>
          <span class="text-5xl font-extrabold tracking-tight"></span>
          <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/day</span>
        </div>

        <ul role="list" class="my-7 space-y-5">
          <li v-for="(each, index) in facilities" :key="index" class="flex space-x-3">
            <svg
              class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{{
              each
            }}</span>
          </li>
          <li class="flex space-x-3">
            <svg
              class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
              >20GB Cloud storage</span
            >
          </li>
          <li class="flex space-x-3">
            <svg
              class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
              >Integration help</span
            >
          </li>
          <!-- <li class="flex space-x-3 line-through decoration-gray-500">
            <svg
              class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
          </li>
          <li class="flex space-x-3 line-through decoration-gray-500">
            <svg
              class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500">API Access</span>
          </li>
          <li class="flex space-x-3 line-through decoration-gray-500">
            <svg
              class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500"
              >Complete documentation</span
            >
          </li>
          <li class="flex space-x-3 line-through decoration-gray-500">
            <svg
              class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500"
              >24×7 phone &amp; email support</span
            >
          </li> -->
        </ul>
        <!-- <button
          type="button"
          class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Choose plan
        </button> -->
      </div>
      <!-- <DatePicker> -->
      <div>
        <v-date-picker v-model="range" is-range />
        <button
          @click="doBookBallroom"
          type="button"
          class="mb-2 mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Booking
        </button>
        <button
          @click="doPayment"
          type="button"
          class="mt-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Payment
        </button>
      </div>
      <!-- </DatePicker> -->
    </div>
    <h2>Google Maps with Single Markers</h2>

    <gmap-map :center="center" :zoom="10" style="width: 100%; height: 555px">
      <gmap-marker
        :key="index"
        v-for="(gmp, index) in locations"
        :position="gmp"
        @click="center = gmp"
      ></gmap-marker>
    </gmap-map>
    <HFooter></HFooter>
  </div>
</template>

<script>
// import DatePicker from "v-calendar/lib/components/date-picker.umd";
import HFooter from "vue-hacktiv8-footer";
export default {
  name: "SingleMarkerGoogleMaps",
  // components: {
  // DatePicker,
  // },
  components: {
    HFooter,
  },
  data() {
    return {
      center: {
        lat: -6.2,
        lng: 106.816666,
      },
      locations: [],
      currentLocation: null,
      range: {
        start: new Date(2020, 0, 1),
        end: new Date(2020, 0, 5),
      },
    };
  },

  mounted() {
    this.setLocationLatLng();
  },

  methods: {
    setPlace(loc) {
      this.currentLocation = loc;
    },
    setLocationLatLng() {
      navigator.geolocation.getCurrentPosition((geolocation) => {
        this.center = {
          lat: geolocation.coords.latitude,
          lng: geolocation.coords.longitude,
        };
      });
      this.setLocations();
    },
    setLocations() {
      console.log(
        this.markersById.data?.body.pdpHeader.hotelLocation.coordinates.latitude,
        "Masuk 48 single marker page"
      );
      console.log(
        this.markersById.data?.body.pdpHeader.hotelLocation.coordinates.longitude,
        "Masuk 52 single marker page"
      );
      const output = [];
      const obj = {
        lat: this.markersById.data?.body.pdpHeader.hotelLocation.coordinates.latitude,
        lng: this.markersById.data?.body.pdpHeader.hotelLocation.coordinates.longitude,
        label: this.markersById.data?.body.propertyDescription.name,
      };
      // this.markers.data?.body.searchResults.results.forEach((el) => {
      //   let obj = {
      //     lat: el.coordinate.lat,
      //     lng: el.coordinate.lon,
      //     label: el.name,
      //   };
      output.push(obj);
      // });
      console.log(obj.name, "MASUK 70 nih");
      console.log(output, "masuk 71");
      this.locations = output;
      // ! BATASAN
      // this.locations.push(obj)
      // this.locations = [
      //   {
      //     lat: 39.7837304,
      //     lng: -100.4458825,
      //     label: "United States",
      //   },
      //   {
      //     lat: 38.6529545,
      //     lng: -90.2411166,
      //     label: "St. Louis",
      //   },
      //   {
      //     lat: 41.3828939,
      //     lng: 2.1774322,
      //     label: "Barcelona",
      //   },
      //   {
      //     lat: -10.3333333,
      //     lng: -53.2,
      //     label: "Brazil",
      //   },
      // ];
    },
    async doBookBallroom() {
      // const bookStart = this.range.start
      // const bookEnd = this.range.end
      await this.$store.dispatch("BookBallRoom", {
        bookDate: this.range,
        hotelId: this.$route.params.id,
        name: this.hotelName,
        price: this.ballroomPrice,
      });
    },
    doPayment() {
      this.$router.push({ name: "PaymentPage" });
    },
  },
  async created() {
    console.log(this.$route.params.id, "masuk 88");
    await this.$store.dispatch("fetchMarkerById", this.$route.params.id);
  },
  computed: {
    markersById() {
      return this.$store.state.markersById;
    },
    hotelName() {
      return this.$store.state.markersById.data.body.propertyDescription.name;
    },
    ballroomPrice() {
      return (
        this.$store.state.markersById.data.body.propertyDescription.featuredPrice.currentPrice
          .plain * 100
      );
    },
    formatPrice() {
      let formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      });
      return formatter.format(this.ballroomPrice);
    },
    facilities() {
      return this.markersById?.data.body.amenities[0].listItems[4].listItems;
    },
    // getLocations() {
    //   const locations = [];
    //   this.markers?.data.body.searchResults.results.forEach((marker) => {
    //     marker.coordinate.lat;
    //     marker.coordinate.lon;
    //   });
    //   return locations;
    // },
  },
};
</script>
