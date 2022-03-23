import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    loginHandler(context, payload){
      return axios.post('http://localhost:3000/login', payload)
    },
  },
  modules: {
  }
})
