import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import SpotifyWebApi from 'spotify-web-api-node'
import Swal from 'sweetalert2'

Vue.use(Vuex)
const url = `http://localhost:3000`
export default new Vuex.Store({
  state: {
    isLogin: false,
    track: null,
    playing: false,
    trackTime: 0,
    isPreLogin:false,
    regis:false,
    dataSong:[],
    lirik:""
  },
  getters: {
  },
  mutations: {
    LOGIN(state) {
      state.isLogin = true
    },
    ISPRELOGIN(state){
      state.isPreLogin = true
    },
    AFTERREGIS(state, payload) {
      state.isRegister = payload
    },
    SONGLIST(state, payload){
      state.dataSong = payload
    },
    LIRIK(state, payload){
      state.lirik = payload
    }
  },
  actions: {
    async regis(context, payload) {
      try {
        await axios.post(`${url}/register`, { password: payload.password, email: payload.email })
        context.commit('AFTERREGIS', true)
      } catch (error) {
        console.log(error)
        Swal.fire({
          text: `${error}`,
        })
      }
    },
    async prelogin(context, payload){
      try {
        const response = await axios.post(`${url}/prelogin`, {email:payload.email, password:payload.password})
        localStorage.setItem('access_tokenCustom', response.data.access_tokenCustom)
        context.commit(`ISPRELOGIN`)
      } catch (error) {
        console.log(error)
        Swal.fire({
          text: `${error}`,
        })
      }
    },
    async login(context, payload) {
      try {
        console.log('test', payload)
        const response = await axios.post(`${url}/login`, { code:payload })
        localStorage.setItem('access_token', response.data.access_token)
        if(localStorage.access_token){
          context.commit('LOGIN')
        }
      } catch (error) {
        console.log(error)
        Swal.fire({
          text: `${error}`,
        })
      }
    },
    async player(context, payload) {
      try {
        const access_token = localStorage.access_token
        const spotifyApi = new SpotifyWebApi({clientId:`19049e5d8ae6427c901e89b1599da589`})
        spotifyApi.setAccessToken(access_token)
        const response = await spotifyApi.searchTracks(`${payload}`, { limit : 3, offset : 0 })
        console.log(response.body.tracks.items)
        context.commit('SONGLIST', response.body.tracks.items)
      } catch (error) {
        console.log(error)
        Swal.fire({
          text: `${error}`,
        })
      }
    },
    async playsong(context, payload){
      try {
        let audioObject = new Audio(payload.preview_url);
        audioObject.play();
      } catch (error) {
        console.log(error)
      }
    },
    async getLyric(context, payload){
      try {
        const response = await axios.get(`${url}/lyric?artist=${payload.artists[0].name}&track=${payload.name}`)
        context.commit('LIRIK', response.data.lirik.lyrics)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
