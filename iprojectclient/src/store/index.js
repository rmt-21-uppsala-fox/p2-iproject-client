import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert'

Vue.use(Vuex)
const baseUrl = `http://localhost:3000`

export default new Vuex.Store({
  state: {
    edamanList: [],
    nutritionixList: []
  },
  getters: {
  },
  mutations: {
    EDAMAN_LIST(state, payload){
      state.edamanList = payload
    },
    NUTRITIONIX_LIST(state, payload){
      state.nutritionixList = payload
    }
  },
  actions: {
    async getEdamanMenu(context, payload){
      try{
        const result = await axios({
          method: 'get',
          url: `${baseUrl}/menus?q=${payload}`
        })
        const menuData = result.data
        context.commit("EDAMAN_LIST", menuData)
      } catch(err){
        swal("Error", err.response.data.msg, "error");
      }
    },
    async getNutritionixList(context, payload){
      try{
        const result = await axios({
          method: 'get',
          url: `${baseUrl}/ingredient?q=${payload}`
        })
        const menuData = result.data
        context.commit("NUTRITIONIX_LIST", menuData)
      } catch(err){
        swal("Error", err.response.data.msg, "error");
      }
    },
    loginUser(context, payload){
      return axios.post(`${baseUrl}/login`, payload)
    },
    registerUser(context, payload){
      return axios.post(`${baseUrl}/register`, payload)
    },
    async googleLogin(context, payload){
      try{
        await axios({
          method: 'post',
          url: `${baseUrl}/authGoogle`,
          data: payload
        })
      } catch(err){
        swal("Error", err.response.data.msg, "error");
      }
    }
  },
  modules: {
  }
})
