import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index"
import axios from 'axios'
import Swal from 'sweetalert2'
//const BASE_URL = ""
const LOCAL_URL = "http://localhost:3000"


Vue.use(Vuex);



export default new Vuex.Store({
  state: {
    movies: [],
    purchasedMovies: [],
    genres: [],
    movie: {}
  },
  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = movies
    },
    SET_PURCHASED(state, purchasedMovies) {
      state.purchasedMovies = purchasedMovies
    },
    SET_MOVIE(state, movie) {
      state.movie = movie
    },
    SET_GENRES(state, genres) {
      state.genres = genres
    },
    SET_USER_DATA(state, payload) {
      state.userData = payload
      console.log(JSON.stringify(payload))
      console.log(state.userData.access_token, " INI ACCESS TOKEN")
      localStorage.setItem("access_token", state.userData.access_token);
      localStorage.setItem("id", state.userData.id);
      localStorage.setItem("email", state.userData.email);
      localStorage.setItem("username", state.userData.username);
      
      console.log(state.userData, "INI STATE UserData")
    },
    SET_LOGOUT() {
      localStorage.clear()
    }
    
  },
  actions: {
    async login(context, userData) {
      try {
        const body =  {
          email: userData.email,
          password: userData.password
        } 
        const response = await axios.post(`${LOCAL_URL}/login`, body)

        
        
        const access_token  =  response.data.access_token
        console.log(access_token, "INI HASIL LOGIN")
        context.commit("SET_USER_DATA", response.data)
        console.log(localStorage.access_token, "INI LOCALSTORAGE")
        
        router.push('/')
        Swal.fire("Login Success")
      } catch (error) {
        Swal.fire(error.response.data.message)
        
        console.log(error.response.data.message)
      }
    },
    async getGenres(context) {
      try {
         
        const response = await axios.get(`${LOCAL_URL}/genres`)

        
        
        
        context.commit("SET_GENRES", response.data)
        
        
      } catch (error) {
        Swal.fire(error.response.data.message)
        
        console.log(error.response.data.message)
      }
    },
    async logout(context) {
       context.commit("SET_LOGOUT")
    }
  },
  modules: {},
});
