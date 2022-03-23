<template>
  <div class="map-holder">
    <div id="map" class="w-full h-full"></div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Swal from "sweetalert2";

export default {
  name: "MapDisplay",
  data() {
    return {
      loading: false,
      location: "",
      access_token:
        "pk.eyJ1IjoibXNncm91bSIsImEiOiJjbDBvejR3b3Qwb2dyM29vN3oxczlxZWtiIn0.iokUpDxaIVuFlBR_zrw5Dw", // starting position [lng, lat]
      map: {},
      direction: {},
      draw: {},
    };
  },
  computed: {
    display() {
      return this.$store.state.display;
    },
  },
  methods: {
    showUserLocation() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(this.success, this.failed, {
          enableHighAccuracy: true,
        });
      } else {
        throw { message: "Navigator not found" };
      }
    },
    success(position) {
      this.center = [position.coords.longitude, position.coords.latitude];
      this.createMap(this.center);
    },
    failed() {
      //default to jakarta
      this.createMap([106.8456, 6.2088]);
    },
    async updateRoute() {
      try {
        // Get the coordinates that were drawn on the map
        const data = this.draw.getAll();
        const lastFeature = data.features.length - 1;
        const coords = data.features[lastFeature].geometry.coordinates;
        // Format the coordinates
        let newCoords = coords.join("%3B").replace(",", "%2C");
        // Set the radius for each coordinate pair to 25 meters
        const radius = coords.map(() => 25);
        const response = await this.$store.dispatch("getMatchRoute", {
          newCoords,
          radius,
        });
        const routeCoords = response.data.coords;
        this.$store.commit("SET_DISTANCE", response.data.distance);
        this.drawRoute(routeCoords);
      } catch (error) {
        if (error.response) {
          Swal.fire({
            title: "Something's Wrong",
            text: error.response.message,
            icon: "error",
            confirmButtonText: "Cool",
          });
        } else {
          console.error(error);
        }
      }
    },
    async drawRoute(coords) {
      if (this.map.getSource("route")) {
        this.map.removeLayer("route");
        this.map.removeSource("route");
      } else {
        this.map.addLayer({
          id: "route",
          type: "line",
          source: {
            type: "geojson",
            data: {
              type: "Feature",
              properties: {},
              geometry: coords,
            },
          },
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#03AA46",
            "line-width": 8,
            "line-opacity": 0.8,
          },
        });
      }
    },
    async createDrawMap() {
      this.draw = new MapboxDraw({
        displayControlsDefault: false,
        controls: {
          line_string: true,
          trash: true,
        },
        defaultMode: "draw_line_string",
        styles: [
          {
            id: "gl-draw-line",
            type: "line",
            filter: [
              "all",
              ["==", "$type", "LineString"],
              ["!=", "mode", "static"],
            ],
            layout: {
              "line-cap": "round",
              "line-join": "round",
            },
            paint: {
              "line-color": "#438EE4",
              "line-dasharray": [0.2, 2],
              "line-width": 4,
              "line-opacity": 0.7,
            },
          },
          {
            id: "gl-draw-polygon-and-line-vertex-halo-active",
            type: "circle",
            filter: [
              "all",
              ["==", "meta", "vertex"],
              ["==", "$type", "Point"],
              ["!=", "mode", "static"],
            ],
            paint: {
              "circle-radius": 12,
              "circle-color": "#FFF",
            },
          },
          {
            id: "gl-draw-polygon-and-line-vertex-active",
            type: "circle",
            filter: [
              "all",
              ["==", "meta", "vertex"],
              ["==", "$type", "Point"],
              ["!=", "mode", "static"],
            ],
            paint: {
              "circle-radius": 8,
              "circle-color": "#438EE4",
            },
          },
        ],
      });
      this.map.addControl(this.draw, "top-right");
      this.map.on("draw.create", this.updateRoute);
      this.map.on("draw.update", this.updateRoute);
    },
    async createMap(center) {
      try {
        mapboxgl.accessToken = this.access_token;
        this.map = new mapboxgl.Map({
          container: "map", // container ID
          style: "mapbox://styles/mapbox/streets-v11", // style URL
          center, // starting position [lng, lat]
          zoom: 15, // starting zoom
        });

        const nav = new mapboxgl.NavigationControl();
        this.map.addControl(nav, "top-right");

        if (this.display == "travelPage") {
          this.map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/streets-v11",
            center,
            zoom: 13,
          });

          this.map.addControl(
            new MapboxDirections({
              accessToken: mapboxgl.accessToken,
            }),
            "top-left"
          );
        } else {
          const geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
          });
          this.map.addControl(geocoder, "top-left");
          this.createDrawMap();
          this.map.on("draw.delete", this.removeRoute);
        }
      } catch (error) {
        if (error.response) {
          Swal.fire({
            title: "Something's Wrong",
            text: error.response.message,
            icon: "error",
            confirmButtonText: "Cool",
          });
        } else {
          console.error(error);
        }
      }
    },
    removeRoute() {
      if (!this.map.getSource("route")) return;
      this.map.removeLayer("route");
      this.map.removeSource("route");
    },
  },
  created() {
    this.showUserLocation();
  },
  mounted() {},
};
</script>

<style>
.mapboxgl-ctrl-geocoder {
  width: 900px !important;
}

.mapboxgl-ctrl-geocoder--icon {
  display: none !important ;
}
</style>
