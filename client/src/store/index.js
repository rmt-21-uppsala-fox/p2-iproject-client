import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index"
import axios from 'axios'
import Swal from 'sweetalert2'
const BASE_URL = "https://iproject2.herokuapp.com"
//const LOCAL_URL = "http://localhost:3000"


Vue.use(Vuex);



export default new Vuex.Store({
  state: {
    movies: [],
    purchasedMovies: [],
    genres: [],
    movie: {},
    price: {},
    paymentToken: '',
    purchaseSuccess: false,
    errorMsg: '',
    chatMessages: [],
    searchResults: []
  },
  mutations: {
    SOCKET_MESSAGESFROMSERVER(state, messages) {
      state.chatMessages = messages
    },
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
    SET_PRICE(state, price) {
      state.price = price
    },
    SET_PURCHASE_SUCCESS(state, status) {
      state.purchaseSuccess = status
    },
    SET_ERR_MSG(state, error) {
      state.errorMsg = error

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
    SET_PAYMENT_TOKEN(state, token) {
      state.paymentToken = token
    },
    SET_SEARCH_RESULTS(state, results) {
      state.searchResults = results
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
        const response = await axios.post(`${BASE_URL}/login`, body)

        
        
        const access_token  =  response.data.access_token
        console.log(access_token, "INI HASIL LOGIN")
        context.commit("SET_USER_DATA", response.data)
        console.log(localStorage.access_token, "INI LOCALSTORAGE")
        
        router.push('/')
        Swal.fire("Login Success")
      } catch (error) {
        console.log(error)
        Swal.fire(error.response.data.message)
        
        console.log(error.response.data.message)
      }
    },
    async getGenres(context) {
      try {
         
        const response = await axios.get(`${BASE_URL}/genres`)

        
        
        
        context.commit("SET_GENRES", response.data)
        
        
      } catch (error) {
        console.log(error)
        Swal.fire(error.response.data.message)
        
        console.log(error.response.data.message)
      }
    },
    async logout(context) {
       context.commit("SET_LOGOUT")
    },
    async getTop5Movies(context) {
      try {
         
        const response = await axios.get(`${BASE_URL}/movies`, {
          headers: {
            access_token: localStorage.access_token

          }
        })

        
        
        
        context.commit("SET_MOVIES", response.data.results)
        
        
      } catch (error) {
        console.log(error)
        Swal.fire(error.response.data.message)
        
        console.log(error.response.data.message)
      }
    },

    async getMoviePrice(context, imdbId) {
      try {
         
        const response = await axios.get(`${BASE_URL}/movies/price/${imdbId}`, {
          headers: {
            access_token: localStorage.access_token

          }
        })

        
        
        
        context.commit("SET_PRICE", response.data)
        
        
      } catch (error) {
        Swal.fire(error.response.data.message)
        
        console.log(error.response.data.message)
      }
    },

    async getMovie(context, imdbId) {
      try {
         
        const response = await axios.get(`${BASE_URL}/movies/${imdbId}`, {
          headers: {
            access_token: localStorage.access_token

          }
        })

        
        
        
        context.commit("SET_MOVIE", response.data)
        
        
      } catch (error) {
        Swal.fire(error.response.data.message)
        
        console.log(error.response.data.message)
      }
    },


    async searchMovies(context, queries) {
      try {
         
        const response = await axios.get(`${BASE_URL}/movies/search?page=${queries.page}&title=${queries.title}&genre=${queries.genre}`, {
          headers: {
            access_token: localStorage.access_token

          }
        })

        
        
        
        context.commit("SET_SEARCH_RESULTS", response.data)
        
        
      } catch (error) {
        // Swal.fire(error.response.data.message)
        
        console.log(error.response.data.message)
      }
    },
    async getPurchased(context) {
      try {
         
        const response = await axios.get(`${BASE_URL}/movies/purchased/all`, {
          headers: {
            access_token: localStorage.access_token

          }
        })

        
        
        
        context.commit("SET_PURCHASED", response.data)
        
        
      } catch (error) {
        Swal.fire(error.response.data.message)
        
        console.log(error.response.data.message)
      }
    },
    async postPayToken(context, payload) {
      try {
        const body =  {
          email: localStorage.email,
          username: localStorage.username,
          title: this.state.movie.title,
          type: payload.type,
          price: this.state.price[`${payload.type}`]

        } 
        console.log(body, payload.imdbId, "INI BODY PAYMENT")
        const response = await axios.post(`${BASE_URL}/payment/${payload.imdbId}`, body, {
          headers: {
            access_token: localStorage.access_token
          }
        })

        
        
        
        console.log(response.data.token, "INI HASIL PAYMENT TOKEN")
         context.commit("SET_PAYMENT_TOKEN", response.data.token)
         console.log(this.state.paymentToken, "INI STATE PAYMENT TOKEN")
        
        // router.push('/')
        // Swal.fire("Login Success")
      } catch (error) {
        console.log(error)
        Swal.fire(error.response.data.message)
        
        console.log(error.response.data.message)
      }
    },
    async addToPurchased(context, payload) {
      try {
        const body= {
          
          title: payload.title,
          synopsis: payload.synopsis,
          imageUrl: payload.imageUrl,
          trailerUrl: payload.trailerUrl
        }
        console.log(body, payload.imdbId, "INI BODY PAYMENT")
        const response = await axios.post(`${BASE_URL}/movies/purchased/${payload.imdbId}`, body, {
          headers: {
            access_token: localStorage.access_token
          }
        })

         
        
        
        console.log(response.data, "INI HASIL ADD ")
        //  context.commit("SET_PAYMENT_TOKEN", response.data.token)
        //  console.log(this.state.paymentToken, "INI STATE PAYMENT TOKEN")
        context.commit("SET_PURCHASE_SUCCESS", true)
        
        
         Swal.fire(`Movie Succesfully purchased`)
      } catch (error) {
        console.log(error)
        context.commit("SET_PURCHASE_SUCCESS", false)
        //Swal.fire(error.response.data.message)
        context.commit("SET_ERR_MSG", error.response.data.message)
        
        console.log(error.response.data.message)
      }
    },
    socket_connect() {
      console.log("socket connected", this._vm.$socket)
    },
    socket_disconnect() {
      console.log("socket disconnected", this._vm.$socket)
    },

    socket_customEventFromServer(_, payload) {
      console.log("customEventFromServer", payload)
    },

    sendCustomEvenetToServer(_, payload) {
      this._vm.$socket.client.emit("customEventFromClient", payload)
    },
    setChatUser(_, payload) {
      this._vm.$socket.client.emit("setUsername", payload)
    },
    sendMessage(_, payload) {
      this._vm.$socket.client.emit("sendMessageToServer", {
        user: localStorage.username,
        message: payload.message.trim(),
        room: payload.room

      })
    },
    socket_messagesFromServer(context, payload) {
      
      context.commit("SOCKET_MESSAGESFROMSERVER", payload)
    }

    
  },
  modules: {},
});
