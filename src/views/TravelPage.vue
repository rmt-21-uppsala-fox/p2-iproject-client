<template>
  <div>
    <CustomNavbar></CustomNavbar>
    <MapDisplay class="w-[100%] h-[55em]"></MapDisplay>
    <HFooter></HFooter>
  </div>
</template>

<script>
import MapDisplay from "@/components/MapDisplay.vue";
import CustomNavbar from "@/components/CustomNavbar.vue";
import HFooter from "vue-hacktiv8-footer";
export default {
  name: "TravelPage",
  components: {
    MapDisplay,
    CustomNavbar,
    HFooter,
  },
  created() {
    this.$store.commit("SET_DISPLAY", "travelPage");
  },
};
</script>

<style>
.social-links {
  display: flex;
  flex-direction: row;
}
</style>
