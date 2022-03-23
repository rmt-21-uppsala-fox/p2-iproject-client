import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menus: [],
    selectedMenu: [],
    orderName: '',
  },
  getters: {
    totalItem: function(state) {
      let quantity = 0
      if(state.selectedMenu.length > 0) {
        state.selectedMenu.forEach(e => {
          quantity += e.quantity
        })
      }
      return quantity
    },
    totalPrice: function(state) {
      let totalPrice = 0
      if(state.selectedMenu.length > 0) {
        state.selectedMenu.forEach(e => {
          totalPrice += e.totalPrice
        })
      }
      return totalPrice
    }
  },
  mutations: {
    FETCH_MENUS(state, payload) {
      state.menus = payload;
    },
    SET_SELECTED_MENU(state, payload) {
      state.selectedMenu = payload;
    },
    SET_ORDERNAME(state, payload) {
      state.orderName = payload
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
    },
    async createOrder (context, payload) {
      try {
        const { data } = await axios.post('/neworder', payload)
        context.commit("SET_ORDERNAME", data.orderName)
      } catch (error) {
        console.log(error.response.data)
      }
    } 
  },
  modules: {
  }
})
