import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
let baseUrl = "http://localhost:3000"
export default new Vuex.Store({
  state: {
    users: {
      username: "",
      password: "",
    },
    isLogin: false,
    recipes: [],
  },
  getters: {},
  mutations: {
    FETCH_STATUS_LOGIN(state, payload) {
      state.isLogin = payload
    },
    FETCH_RECIPES(state, payload) {
      state.recipes = payload
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
    }
  },
  modules: {}
})