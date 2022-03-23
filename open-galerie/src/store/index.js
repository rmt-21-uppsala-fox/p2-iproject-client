import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const BASE_URL = "http://localhost:3000"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: [],
    gallery: []
  },
  getters: {},
  mutations: {
    SET_NEWS(state, payload) {
      state.news = payload.data.slice(0, 10);
    },
    SET_GALLERY(state, payload) {
      state.gallery = payload.data;
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
    async getGallery(ctx) {
      try {
        const gallery = await axios.get(`${BASE_URL}/gallery`);
        ctx.commit("SET_GALLERY", gallery)
      } catch (error) {
        console.log(error.response.data);
      }
    },
  },
  modules: {}
})