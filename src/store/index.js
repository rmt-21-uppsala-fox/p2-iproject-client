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
    isLogin: false
  },
  getters: {},
  mutations: {
    FETCH_STATUS_LOGIN(state, payload) {
      state.isLogin = payload
    },
  },
  actions: {
    async loginHandler(context, payload) {
      return await axios.post(`${baseUrl}/login`, {
        username: payload.username,
        password: payload.password
      })
    },
  },
  modules: {}
})