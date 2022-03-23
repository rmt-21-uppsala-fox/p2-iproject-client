import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {},
    currentUserImagesUrl: {},
    packages: [],
    cart: [],
    faceRecognitionLoaded: false,
    labeledDescriptors: [],
    ableToPay: false,
  },
  getters: {
    getCart(state) {
      return state.cart
    }
  },
  mutations: {
    setCurrentUser(state, payload) {
      state.currentUser = payload
    },
    setCurrentUserImagesUrl(state, payload) {
      state.currentUserImagesUrl = payload
    },
    setPackages(state, payload) {
      state.packages = payload
    },
    addToCart(state, payload) {
      state.cart.push(payload)
    },
    setFaceRecognitionLoaded(state) {
      state.faceRecognitionLoaded = true
    },
    setLabeledDescriptors(state, payload) {
      state.labeledDescriptors = payload
    },
    setAbleToPay(state) {
      state.ableToPay = true
    },
  },
  actions: {
    async doLogin(context, loginData) {
      try {
        const response = await axios.post('http://localhost:3000/login', loginData)

        const {
          access_token,
          name,
          id
        } = response.data

        localStorage.setItem('access_token', access_token)
        localStorage.setItem('currentUserName', name)
        localStorage.setItem('currentUserId', id)
        
        context.commit('setCurrentUser', {id, name})
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
    async fetchImages(context) {
      try {
        const response = await axios.get('http://localhost:3000/currentUserImagesUrl', {
          headers: {
            'access_token': localStorage.access_token
          }
        })

          context.commit('setCurrentUserImagesUrl', response.data)
      } catch (error) {
        console.log(error)
      }
    },
    async doXenditPay({
      getters
    }) {
      try {
        let data = {
          "external_id": "invoice-1",
          "amount": 0,
          "customer": {
            "given_names": "Tommy",
            "email": "tomthedeveloper11@gmail.com",
            "mobile_number": "08123234586",
            "address": {
              "city": "Medan",
              "country": "Indonesia"
            }
          },
          "items": [],
          "description": "Invoice Demo #123",
        }
        const cartItems = getters.getCart

        cartItems.forEach((item) => {
          data.amount += item.price
          data.items.push({
            "name": item.name,
            "quantity": 1,
            "price": item.price,
            "description": item.description
          })
        });

        const response = await axios.post('http://localhost:3000/xenditPay', data, {
          headers: {
            'access_token': localStorage.access_token
          }
        })

        return response.data
      } catch (error) {
        console.log(error)
      }
    },
    async uploadToImgBB(context, base64) {
      try {
        const response = await axios.post('http://localhost:3000/uploadToImgBB', {img: base64},{
          headers: {
            'access_token': localStorage.access_token
          }
        })

        console.log(response.data);

      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {}
})