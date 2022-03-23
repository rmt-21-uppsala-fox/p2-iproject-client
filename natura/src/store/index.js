import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menus: [],
    customerName: '',
    phoneNumber: '',
    totalPerson: '',
  },
  getters: {
  },
  mutations: {
    FETCH_MENUS(state, payload) {
      state.menus = payload;
    },
    SET_CUSTOMERNAME(state, payload) {
      state.customerName = payload;
    },
    SET_PHONENUMBER(state, payload) {
      state.phoneNumber = payload;
    },
    SET_TOTALPERSON(state, payload) {
      state.totalPerson = payload;
    }
  },
  actions: {
    async fetchMenus (context) {
      try {
        const { data } = await axios.get('/menus') 
        context.commit("FETCH_MENUS", data)
      } catch (error) {
        console.log(error.response.data)
      }
    }
  },
  modules: {
  }
})
