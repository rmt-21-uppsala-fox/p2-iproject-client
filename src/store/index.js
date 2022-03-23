import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mapbox_token: "pk.eyJ1IjoibXNncm91bSIsImEiOiJjbDBvejR3b3Qwb2dyM29vN3oxczlxZWtiIn0.iokUpDxaIVuFlBR_zrw5Dw",
    ninjas_api: "ULAeUu+S9XYvgHPEGWOg2Q==pKmdRYNeGdbvjyFf",
    baseUrl: "http://localhost:3000",
    distance: 0,
    display: "estimatePage"
  },
  getters: {
  },
  mutations: {
    SET_DISTANCE: function (state, distance) {
      state.distance = 0.001 * distance.value;
    },
    SET_DISPLAY: function (state, display) {
      state.display = display;
    }
  },
  actions: {
    getMatchRoute: async function (context, payload) {
      const { newCoords, radius } = payload;
      const radiuses = radius.join('%3B');
      return await axios({
        method: 'GET',
        url:
          context.state.baseUrl +
          `/route?coordinates=${newCoords}&radiuses=${radiuses}`
      })
    },
    getCarbonProduced: async function (context, payload) {
      const { distance, fuelEfficiency } = payload;
      return await axios({
        method: 'GET',
        url: context.state.baseUrl + "/carbon",
        params: {
          distance,
          fuelEfficiency
        }
      })
    },
    getCarModel: async function () {
      return await axios({
        method: 'GET',
        url: "https://private-f4d9b-carsapi1.apiary-mock.com/cars"
      })
    },
    getCarFuelEfficiency: async function (context, payload) {
      const { model, year } = payload
      return await axios({
        method: 'GET',
        url: context.state.baseUrl + "/carbon/fuelEfficiency",
        params: {
          model,
          year
        }
      })
    },
    sendResult: async function (context, payload) {
      return await axios({
        method: 'POST',
        url: context.state.baseUrl + "/carbon/screenshot",
        data: payload
      })
    }

  }
})

