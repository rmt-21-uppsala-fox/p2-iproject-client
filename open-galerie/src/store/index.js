import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const BASE_URL = "http://localhost:3000"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: []
  },
  getters: {},
  mutations: {
    SET_NEWS(state, payload) {
      state.news = payload.data.slice(0, 10);
    }
  },
  actions: {
    async getNews(ctx) {
      try {
        const news = await axios.get(`${BASE_URL}/news`);
        ctx.commit("SET_NEWS", news)
      } catch (error) {
        console.log(error.response.data);
      }
    },
  },
  modules: {}
})