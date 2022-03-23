import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menus: [],
    selectedMenu: [],
    orderName: '',
    paymentStatus: 'Unpaid',
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
    SET_ORDER_NAME(state, payload) {
      state.orderName = payload
    },
    SET_PAYMENT_STATUS(state) {
      state.paymentStatus = 'Paid'
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
        context.commit("SET_ORDER_NAME", data.orderName)
      } catch (error) {
        console.log(error.response.data)
      }
    },
    async payXendit (context, payload) {
      try {
        const { data } = await axios.post('/payment', payload)
        window.open(data.actions.mobile_deeplink_checkout_url)
        context.commit("SET_PAYMENT_STATUS")
      } catch (error) {
        console.log(error.response.data)
      }
    }
  },
  modules: {
  }
})
