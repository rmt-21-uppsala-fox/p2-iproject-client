import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    news: [],
    playerRank:[],
    matches:[]
  },
  getters: {
  },
  mutations: {
    SET_ISLOGIN(state, payload){
      state.isLogin = payload
    },
    FETCH_NEWS(state, payload){
      state.news = payload
    },
    FETCH_PLAYER_RANK(state, payload){
      state.playerRank = payload
    },
    FETCH_MATCHES(state, payload){
      state.matches = payload
    }
  },
  actions: {
    loginHandler(context, payload){
      return axios.post('http://localhost:3000/login', payload)
    },
    async fetchNews(context){
      try {
        const {data} = await axios.get('http://localhost:3000/news', {
          headers:{
          access_token: localStorage.getItem('access_token')
          }
        });
        context.commit('FETCH_NEWS', data)
      } catch (error) {
        console.log(error);
      }
    },
    async fetchPlayerRank(context){
      try {
        const {data} = await axios.get('http://localhost:3000/playerRank', {
          headers:{
          access_token: localStorage.getItem('access_token')
          }
        });
        context.commit('FETCH_PLAYER_RANK', data)
      } catch (error) {
        console.log(error);
      }
    },
    async fetchMatches(context){
      try {
        const {data} = await axios.get('http://localhost:3000/matches', {
          headers:{
          access_token: localStorage.getItem('access_token')
          }
        });
        context.commit('FETCH_MATCHES', data)
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})
