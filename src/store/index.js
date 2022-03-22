import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packages: [],
    cart: []
  },
  getters: {},
  mutations: {
    setPackages(state, payload) {
      state.packages = payload
    },
    addToCart(state, payload) {
      state.cart.push(payload)
    },
  },
  actions: {
    async doLogin(context, loginData) {
      try {
        const response = await axios.post('http://localhost:3000/login', loginData)

        const {
          access_token
        } = response.data

        localStorage.setItem('access_token', access_token)
      } catch (error) {
        console.log(error);
      }
    },
    async fetchPackages(context) {
      try {
        const response = await axios.get('http://localhost:3000/packages', {
          headers: {
            'access_token': localStorage.access_token
          }
        })
        response.data.sort((a, b) => a.id > b.id ? 1 : -1);
        context.commit('setPackages', response.data)
      } catch (error) {
        console.log(error)
      }
    },
    async doXenditPay(context, payload) {
      try {
        console.log(payload.price);
        let data = {
          "external_id": "invoice-1",
          "amount": payload.price,
          "customer": {
            "given_names": "Tommy",
            "email": "tomthedeveloper11@gmail.com",
            "mobile_number": "08123234586",
            "address": {
              "city": "Medan",
              "country": "Indonesia"
            }
          },
          "customer_notification_preference": {
            "invoice_created": [],
            "invoice_paid": []
          },
          "items": [{
            "name": payload.name,
            "quantity": 1,
            "price": payload.price,
            "category": "Toiletries"
          }],
          "description": "Invoice Demo #123",
        }

        const response = await axios.post('http://localhost:3000/xenditPay', data, {
          headers: {
            'access_token': localStorage.access_token
          }
        })
        console.log(response);
      } catch (error) {
        console.log(error)
      }
    },
  },
  modules: {}
})