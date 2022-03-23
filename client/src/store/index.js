import Vue from 'vue'
import Vuex from 'vuex'
import local from '@/api/axios.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photos:[],

  },
  mutations: {
    FETCH_PPHOTOS(state,payload) {
      state.photos = payload
    }
  },
  actions: {
    async fetchPhotos(context) {
      try {
        const data = await local.get('/photos')
        context.commit("FETCH_PPHOTOS",data.data.img)
      } catch (err) {
        console.log(err);
      }
    },

    
  },
  getters: {
  },
  modules: {
  }
})
