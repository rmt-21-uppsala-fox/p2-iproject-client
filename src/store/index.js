import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mapbox_token: "pk.eyJ1IjoibXNncm91bSIsImEiOiJjbDBvejR3b3Qwb2dyM29vN3oxczlxZWtiIn0.iokUpDxaIVuFlBR_zrw5Dw",
    baseUrl: "http://localhost:3000"
  },
  getters: {
  },
  mutations: {
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
    }
  }
})

