import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as faceapi from 'face-api.js';
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {},
    imagesUrl: null,
    packages: [],
    cart: [],
    faceRecognitionLoaded: false,
    labeledDescriptors: [],
    ableToPay: false,
    isLoggedIn: false,
  },
  getters: {
    getCart(state) {
      return state.cart
    },
    getimagesUrl(state) {
      return state.imagesUrl
    }
  },
  mutations: {
    setCurrentUser(state, payload) {
      state.currentUser = payload
    },
    setImagesUrl(state, payload) {
      state.imagesUrl = payload
    },
    setPackages(state, payload) {
      state.packages = payload
    },
    addToCart(state, payload) {
      state.cart.push(payload)
    },
    clearCartAndAbleToPay(state) {
      state.cart = []
      state.ableToPay = false
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
    setIsLoggedIn(state) {
      state.isLoggedIn = true
    },
    doLogout(state) {
      localStorage.clear()
      state.currentUser = []
      state.cart = []
      state.ableToPay = false
      state.isLoggedIn = false
    }
  },
  actions: {
    async doRegister(context, registerData) {
      try {
        await axios.post('https://lyfe-tomthedeveloper11.herokuapp.com/register', registerData)
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please check your inputs'
        })
      }
    },
    async doLogin(context, loginData) {
      try {
        const response = await axios.post('https://lyfe-tomthedeveloper11.herokuapp.com/login', loginData)

        const {
          access_token,
          name,
          id,
          email
        } = response.data

        localStorage.setItem('access_token', access_token)
        localStorage.setItem('currentUserName', name)
        localStorage.setItem('currentUserId', id)
        localStorage.setItem('currentUserEmail', email)

        context.commit('setCurrentUser', {
          id,
          name,
          email
        })
        context.commit('setIsLoggedIn')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please check your inputs'
        })
      }
    },
    async fetchPackages(context) {
      try {

        const response = await axios.get('https://lyfe-tomthedeveloper11.herokuapp.com/packages', {
          headers: {
            'access_token': localStorage.access_token
          }
        })
        response.data.sort((a, b) => a.id > b.id ? 1 : -1);
        context.commit('setPackages', response.data)
      } catch (error) {
        console.log(error);
      }
    },
    async fetchImages(context) {
      try {
        const response = await axios.get('https://lyfe-tomthedeveloper11.herokuapp.com/imagesUrl', {
          headers: {
            'access_token': localStorage.access_token
          }
        })

        context.commit('setImagesUrl', response.data)
      } catch (error) {
        this.$toast.error(error.response.data, {
          position: 'top-right'
        });
      }
    },
    async doXenditPay(context) {
      try {
        let data = {
          "external_id": `invoice-${new Date().getTime()}`,
          "amount": 0,
          "customer": {
            "given_names": localStorage.currentUserName,
            "email": localStorage.currentUserEmail,
          },
          "items": [],
          "description": `Invoice Demo #${new Date().getTime()}`,
        }
        const cartItems = context.getters.getCart

        cartItems.forEach((item) => {
          data.amount += item.price
          data.items.push({
            "name": item.name,
            "quantity": 1,
            "price": item.price,
            "description": item.description
          })
        });

        const response = await axios.post('https://lyfe-tomthedeveloper11.herokuapp.com/xenditPay', data, {
          headers: {
            'access_token': localStorage.access_token
          }
        })
        context.commit('clearCartAndAbleToPay')

        return response.data
      } catch (error) {
        this.$toast.error(error.response.data, {
          position: 'top-right'
        });
      }
    },
    async uploadToImgBB(context, base64) {
      try {
        await axios.post('https://lyfe-tomthedeveloper11.herokuapp.com/uploadToImgBB', {
          img: base64
        }, {
          headers: {
            'access_token': localStorage.access_token
          }
        })
      } catch (error) {
        this.$toast.error(error.response.data, {
          position: 'top-right'
        });
      }
    },
    async initializeFaceRecognition(context) {
      try {
        await faceapi.nets.faceRecognitionNet.loadFromUri('/assets/models')
        await faceapi.nets.faceLandmark68Net.loadFromUri('/assets/models')
        await faceapi.nets.ssdMobilenetv1.loadFromUri('/assets/models')

        await context.dispatch('fetchImages')

        const images = context.getters.getimagesUrl

        const labels = []
        for (const key in images) {
          labels.push(key)
        }

        Promise.all(labels.map(async (label) => {
          const descriptions = []
          for (let i = 0; i <= 1; i++) {

            const img = await faceapi.fetchImage(images[label][i]);

            const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
            descriptions.push(detections.descriptor)
          }
          return new faceapi.LabeledFaceDescriptors(label, descriptions)
        })).then((data) => {
          context.commit('setLabeledDescriptors', data)
          context.commit('setFaceRecognitionLoaded')
        })
      } catch (error) {
        this.$toast.error(error.response.data, {
          position: 'top-right'
        });
      }
    },
  },
  modules: {}
})