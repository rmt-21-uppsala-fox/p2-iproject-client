import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
let baseUrl = "http://localhost:3000"
export default new Vuex.Store({
  state: {
    currentUser: "",
    isLogin: false,
    recipes: [],
    detailPage: false,
  },
  getters: {},
  mutations: {
    SET_STATUS_LOGIN(state, payload) {
      state.isLogin = payload.isLogin
      state.currentUser = payload.currentUser
    },
    FETCH_RECIPES(state, payload) {
      state.recipes = payload
    },
    SET_DETAIL_PAGE(state, payload) {
      state.detailPage = payload
    }
  },
  actions: {
    async loginHandler(context, payload) {
      return await axios.post(`${baseUrl}/login`, {
        username: payload.username,
        password: payload.password
      })
    },
    async fetchRecipes(context) {
      const response = await axios.get(`${baseUrl}/recipes/filter`)
      context.commit("FETCH_RECIPES", response.data)
    },
    async fetchDetailReciped(context, RecipeId) {
      try {
        const response = await axios.get(`${baseUrl}/recipes/filter${RecipeId}`)
        context.commit("FETCH_RECIPES", response.data)
      } catch (error) {
        console.log(error);
      }
    },
    //mendengar event connect dari server
    socket_connect() {
      console.log("connected", this._vm.$socket);
    },
    //mendengarkan event disconnect dari server
    socket_disconnect() {
      console.log("disconnect", this._vm.$socket);
    },
    //mendengar custom event "customEventFromServer"
    socket_customEventFromServer(_, payload) {
      console.log("customEventFromServer", payload);
    },
    //karna disini mau mengirimkan(emit) ke server
    //dan tidak mendengarkan event dari server
    //maka tidak perlu menggunakan awalan/prefix socket_
    sendCustomEventToServer(_, payload) {
      this._vm.$socket.client.emit("customEventFromClient", payload)
    }
  },
  modules: {}
})