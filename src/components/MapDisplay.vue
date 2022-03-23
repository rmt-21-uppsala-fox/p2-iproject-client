<template>
  <div class="map-holder">
    <div id="map" class="w-full h-full"></div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
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
      // If a route is already loaded, remove it
      if (this.map.getSource("route")) {
        this.map.removeLayer("route");
        this.map.removeSource("route");
      } else {
        // Add a new layer to the map
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
        // Instead of showing all the draw tools, show only the line string and delete tools.
        displayControlsDefault: false,
        controls: {
          line_string: true,
          trash: true,
        },
        // Set the draw mode to draw LineStrings by default.
        defaultMode: "draw_line_string",
        styles: [
          // Set the line style for the user-input coordinates.
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
          // Style the vertex point halos.
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
          // Style the vertex points.
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

        this.createDrawMap();
        this.map.on("draw.delete", this.removeRoute);
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

<style></style>
