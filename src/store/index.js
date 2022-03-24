import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
let baseUrl = "http://localhost:3000"
export default new Vuex.Store({
  state: {
    currentUser: "",
    isLogin: false,
    recipes: [],
    filteredRecipe: [],
    detailPage: false,
    bookmarks: []
  },
  getters: {},
  mutations: {
    SET_STATUS_LOGIN(state, payload) {
      state.isLogin = payload.isLogin
      state.currentUser = payload.currentUser
    },
    FETCH_RECIPES(state, payload) {
      state.recipes = payload
    },
    FETCH_FILTERED_RECIPES(state, payload) {
      state.filteredRecipe = payload
    },
    SET_DETAIL_PAGE(state, payload) {
      state.detailPage = payload
    },
    FETCH_BOOKMARK(state, payload) {
      state.bookmarks = payload
    },
    ADD_BOOKMARK(state, payload) {
      state.bookmarks.push(payload)
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
    },
    async getRecipes(_, query) {
      return await axios({
        method: 'POST',
        url: `${baseUrl}/recipes`,
        data: query,
      })
    },
    async fetchDetailReciped(context, RecipeId) {
      try {
        const response = await axios.get(`${baseUrl}/recipes/filter${RecipeId}`)
        context.commit("FETCH_RECIPES", response.data)
      } catch (error) {
        console.log(error);
      }
    },
    async createRecipes(context, RecipeId) {
      try {
        const access_token = localStorage.getItem("access_token")
        const response = await axios.post(`${baseUrl}/recipes/${RecipeId}`, {}, {
          headers: {
            access_token
          }
        })
        context.commit("ADD_BOOKMARK", response.data.bookmark)
      } catch (error) {
        console.log(error);
      }
    },
    async fetchBookmark(context) {
      const access_token = localStorage.getItem("access_token")
      const response = await axios.get(`${baseUrl}/recipes/bookmark`, {
        headers: {
          access_token
        }
      })
      console.log(response);
      context.commit("FETCH_BOOKMARK", response.data)
    }
  },
  modules: {}
})