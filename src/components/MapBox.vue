<template>
  <div>
    <mapbox
      access-token="pk.eyJ1IjoiYWxpenRhMjciLCJhIjoiY2wxM2wzNHFzMDI0ajNjdWs1a2pya3plciJ9.DvN5_4ZKto6V8gtXT2szgQ"
      :map-options="{
        style: 'mapbox://styles/alizta27/cl13q1zlg005i14p2j8nk1syu',
        center: [122.545108, -4.005283],
        zoom: 15,
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
                  coordinates: [122.545108, -4.005283],
                },
                properties: {
                  title: 'Kantor',
                  icon: 'monument',
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
