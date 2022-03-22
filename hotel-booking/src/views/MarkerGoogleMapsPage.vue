<template>
  <div>
    <h2>Google Maps with Multiple Markers</h2>

    <gmap-map :center="center" :zoom="10" style="width: 100%; height: 555px">
      <gmap-marker
        :key="index"
        v-for="(gmp, index) in locations"
        :position="gmp"
        @click="center = gmp"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "MarkerGoogleMapsPage",
  data() {
    return {
      center: {
        lat: -6.2,
        lng: 106.816666,
      },
      locations: [],
      currentLocation: null,
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
      const output = [];
      // const obj = {};
      console.log(this.markers.data?.body.searchResults.results, "MASUK 50");
      this.markers.data?.body.searchResults.results.forEach((el) => {
        let obj = {
          lat: el.coordinate.lat,
          lng: el.coordinate.lon,
          label: el.name,
        };
        output.push(obj);
      });
      console.log(output, "MASUK 59 marker google maps page");
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
      this.locations = output;
    },
  },
  async created() {
    await this.$store.dispatch("fetchMarker");
  },
  computed: {
    markers() {
      return this.$store.state.markers;
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
