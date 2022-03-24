<template>
  <div>
    <mapbox
      access-token="pk.eyJ1IjoiYWxpenRhMjciLCJhIjoiY2wxM2xnNTI3MGZ6czNqczY1c2UwYWlxZiJ9.AA6ABgKLKQt2Xt4QvfOokg"
      :map-options="{
        style: 'mapbox://styles/mapbox/light-v9',
        center: [-96, 37.8],
        zoom: 3,
      }"
      :geolocate-control="{
        show: true,
        position: 'top-left',
      }"
      @map-load="loaded"
      @map-zoomend="zoomend"
      @map-click:points="clicked"
      @geolocate-error="geolocateError"
      @geolocate-geolocate="geolocate"
    />
  </div>
</template>

<script>
import Mapbox from 'mapbox-gl-vue'

export default {
  components: { Mapbox },
  methods: {
    loaded(map) {
      map.addLayer({
        id: 'points',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-4.005283, 122.545108],
                },
                properties: {
                  title: 'Mapbox DC',
                  icon: 'monument',
                },
              },
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-4.005283, 122.545108],
                },
                properties: {
                  title: 'Mapbox SF',
                  icon: 'harbor',
                },
              },
            ],
          },
        },
        layout: {
          'icon-image': '{icon}-15',
          'text-field': '{title}',
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-offset': [0, 0.6],
          'text-anchor': 'top',
        },
      })
    },
    zoomend(map, e) {
      console.log(map, e)
      console.log('Map zoomed')
    },
    clicked(map, e) {
      const title = e.features[0].properties.title
      console.log(title)
      console.log(map)
    },
    geolocateError(control, positionError) {
      console.log(positionError)
    },
    geolocate(control, position) {
      console.log(
        `User position: ${position.coords.latitude}, ${position.coords.longitude}`
      )
    },
  },
}
</script>
<style scoped>
#map {
  height: 300px;
  width: 300px;
}
</style>
