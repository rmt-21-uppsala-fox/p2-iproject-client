<template>
  <div>
    <h2>Google Maps with Single Markers</h2>

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
  name: "SingleMarkerGoogleMaps",
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
  },
  async created() {
    console.log(this.$route.params.id, "masuk 88");
    await this.$store.dispatch("fetchMarkerById", this.$route.params.id);
  },
  computed: {
    markersById() {
      return this.$store.state.markersById;
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
