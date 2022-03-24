import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// const baseUrl = "http://localhost:5000"
const baseUrl = "https://data-kib.web.app"

export default new Vuex.Store({
  state: {
    school: [],
    qrCode: "",
    isLogin: false,
    isPage: "home",
    dashboardPage: "dashboard",
    isRegis: false,
    dataKib: []
  },
  getters: {
  },
  mutations: {
    SET_SCHOOL_DATA(state, payload) {
      state.school = payload
    },
    QR_CODE(state, payload) {
      state.qrCode = payload
    },
    SET_LOGIN(state, payload) {
      state.isLogin = payload
    },
    SET_PAGE(state, payload) {
      state.isPage = payload
    },
    SET_DASHBOARD_PAGE(state, payload) {
      state.dashboardPage = payload
    },
    SET_REGIS(state, payload) {
      state.isRegis = payload
    },
    SET_DATA_KIB(state, payload) {
      state.dataKib = payload
    }
  },
  actions: {
    async getSchoolData(ctx) {
      try {
        const res = await axios({
          url: 'https://api-sekolah-indonesia.herokuapp.com/sekolah/SMP?page=1&perPage=10',
          method: 'get'
        })
        let data = res.data.dataSekolah
        ctx.commit('SET_SCHOOL_DATA', data)
      } catch (err) {
        console.log(err);
      }
    },
    async getSchoolDataPage(ctx, payload) {
      try {
        const res = await axios({
          url: `https://api-sekolah-indonesia.herokuapp.com/sekolah/SMP?page=${payload}&perPage=10`,
          method: 'get'
        })
        let data = res.data.dataSekolah
        ctx.commit('SET_SCHOOL_DATA', data)
      } catch (err) {
        console.log(err);
      }
    },
    async getSchoolDataPageOption(ctx) {
      try {
        const res = await axios({
          url: `https://api-sekolah-indonesia.herokuapp.com/sekolah/SMP?page=1&perPage=50`,
          method: 'get'
        })
        let data = res.data.dataSekolah
        ctx.commit('SET_SCHOOL_DATA', data)
      } catch (err) {
        console.log(err);
      }
    },
    async generateQrCode(ctx) {
      try {
        const res = await axios({
          url: `https://api.happi.dev/v1/qrcode?data=${baseUrl}&width=&dots=000000&bg=FFFFFF&apikey=16eb06O3BCzskSJ80h5uaZfkUtG6zZ6UZF9eTEfj77qaLLJYEI9Q8twg`,
          method: 'get'
        })
        ctx.commit('QR_CODE', res.data.qrcode)
      } catch (err) {
        console.log(err.response);
      }
    },
    async login(ctx, payload) {
      try {
        const res = await axios({
          url: `${baseUrl}/login`,
          method: 'post',
          data: {
            email: payload.email,
            password: payload.password
          }
        })
        const token = res.data.token
        if (token) {
          localStorage.setItem("access_token", token)
          ctx.commit('SET_LOGIN', true)
        }
      } catch (err) {
        console.log(err.response);
      }
    },
    async registerUser(ctx, payload) {
      try {
        const res = await axios({
          url: `${baseUrl}/register`,
          method: "post",
          data: {
            email: payload.email,
            password: payload.password,
            schoolId: payload.schoolId,
            role: "operator"
          }
        })
        ctx.commit("SET_REGIS", true)
        console.log(res.data.message);
      } catch (err) {
        console.log(err);
      }
    },
    async getDataList(ctx) {
      try {
        const res = await axios({
          url: `${baseUrl}/kib`,
          method: "get",
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        ctx.commit("SET_DATA_KIB", res.data.kib)
      } catch (err) {
        console.log(err);
      }
    },
    async deleteKib(ctx, payload) {
      try {
        await axios({
          url: `${baseUrl}/kib/delete/${payload}`,
          method: "delete",
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        ctx.dispatch("getDataList")
      } catch (err) {
        console.log(err);
      }
    },
    async postDataKib(ctx, payload) {
      try {
        await axios({
          url: `${baseUrl}/kib/post`,
          method: "post",
          headers: {
            access_token: localStorage.getItem("access_token")
          },
          data: {
            name: payload.name,
            type: payload.type,
            date: payload.date,
            originOfFounds: payload.originOfFounds,
            price: payload.price,
          }
        })
        console.log("sukses posting data");
      } catch (err) {
        console.log(err);
      }
    }
  },
  modules: {
  }
})
