import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert'

Vue.use(Vuex)
const baseUrl = `https://iproject21.herokuapp.com`

export default new Vuex.Store({
  state: {
    edamanList: [],
    nutritionixList: [],
    bmiList: []
  },
  getters: {
  },
  mutations: {
    EDAMAN_LIST(state, payload){
      state.edamanList = payload
    },
    NUTRITIONIX_LIST(state, payload){
      state.nutritionixList = payload
    },
    BMI_LIST(state, payload){
      state.bmiList = payload
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
    },
    async postBMI(context, payload){
      try{
        await axios({
          method: 'post',
          url: `${baseUrl}`,
          data: payload,
          headers: { access_token: localStorage.getItem("access_token") }
        })
      } catch(err){
        swal("Error", err.response.data.msg, "error");
      }
    },
    async getBMI(context){
      try{
        const allData = await axios({
          method: 'get',
          url: `${baseUrl}/bmi`,
          headers: { access_token: localStorage.getItem("access_token") }
        })
        const clearData = allData.data[0]
        const mappedData = clearData.map(function(el){
          return el.BMI
        });
        context.commit("BMI_LIST", mappedData)
      } catch(err){
        swal("Error", err.response.data, "error");
      }
    }
  },
  modules: {
  }
})
