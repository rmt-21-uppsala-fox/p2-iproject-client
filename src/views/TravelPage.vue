<template>
  <div>
    <CustomNavbar></CustomNavbar>
    <MapDisplay class="w-[100%] h-[55em]"></MapDisplay>
  </div>
</template>

<script>
import MapDisplay from "@/components/MapDisplay.vue";
import CustomNavbar from "@/components/CustomNavbar.vue";
export default {
  name: "TravelPage",
  components: {
    MapDisplay,
    CustomNavbar,
  },
  created() {
    this.$store.commit("SET_DISPLAY", "travelPage");
  },
};
</script>

<style></style>
