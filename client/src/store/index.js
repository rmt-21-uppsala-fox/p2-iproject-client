import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import SpotifyWebApi from 'spotify-web-api-node'

Vue.use(Vuex)
const url = `http://localhost:3000`
export default new Vuex.Store({
  state: {
    isLogin: false,
    artistImage: '',
    track: null,
    playing: false,
    trackTime: 0,
    isPreLogin:false
  },
  getters: {
  },
  mutations: {
    LOGIN(state) {
      state.isLogin = true
    },
    ISPRELOGIN(state){
      state.isPreLogin = true
    }
  },
  actions: {
    audioTimeUpdated() {
      let amountPlayed = (this.track.currentTime / this.track.duration) * 100;

      this.trackTime = amountPlayed;
    },
    addListeners() {
      this.track.addEventListener(
        'timeupdate',
        this.audioTimeUpdated,
        false
      );
    },
    // handleClick(item) {
    //   let phoneScreen = document.querySelector('.c-phone__screen');

    //   phoneScreen.scrollTop = 0;

    //   this.artistImage = item.images[0].url;

    //   this.fetchTrack(item.id);
    // },
    async prelogin(context, payload){
      try {
        await axios.post(`${url}/prelogin`, {email:payload})
        context.commit(`PRELOGIN`)
      } catch (error) {
        console.log(error)
      }
    },
    async login(context, payload) {
      try {
        const response = await axios.post(`${url}/login`, { code:payload })
        localStorage.setItem('access_token', response.data.access_token)
        context.commit('LOGIN')
      } catch (error) {
        console.log(error)
      }
    },
    pauseTrack() {
        if (this.track) {
          this.track.pause();
          this.playing = false;
        }
      },
  
      playTrack() {
        if (this.track) {
          this.track.play();
          this.playing = true;
        }
      },
    
    async player(context, payload) {
      try {
        const access_token = localStorage.access_token
        const spotifyApi = new SpotifyWebApi({clientId:`19049e5d8ae6427c901e89b1599da589`})
        spotifyApi.setAccessToken(access_token)
        const response = await spotifyApi.searchTracks(`${payload}`, { limit : 3, offset : 0 })
        console.log(response)

        let audioObject = new Audio(response.body.tracks.items[0].preview_url);
  
        audioObject.play();
  
        this.playing = true;
  
        this.track = audioObject;
  
        this.addListeners();
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
