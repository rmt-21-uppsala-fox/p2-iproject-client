<template>
  <div>
    <Mapbox
      access-token="pk.eyJ1IjoiYWxpenRhMjciLCJhIjoiY2wxM2xnNTI3MGZ6czNqczY1c2UwYWlxZiJ9.AA6ABgKLKQt2Xt4QvfOokg"
      :map-options="{
        style: 'mapbox://styles/alizta27/cl13q1zlg005i14p2j8nk1syu',
        center: [-96, 37.8],
        zoom: 3,
      }"
      :geolocate-control="{
        show: true,
        position: 'top-left',
      }"
      :scale-control="{
        show: true,
        position: 'top-left',
      }"
      :fullscreen-control="{
        show: true,
        position: 'top-left',
      }"
    ></Mapbox>
  </div>
</template>

<script>
import Mapbox from "vue2-mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

export default {
  components: {
    Mapbox,
  },
};
</script>
