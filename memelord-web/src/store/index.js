import Vue from "vue";
import Vuex from "vuex";
import axios from "@/api/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    postData: [],
    isLogin: false,
  },
  getters: {},
  mutations: {
    LOGIN_STATUS(state, data) {
      state.isLogin = data;
    },
    FETCH_POST(state, data) {
      state.postData = data;
    },
  },
  actions: {
    async fetchAll(context) {
      const { data } = await axios({
        method: "get",
        url: "/meme/post/",
      });
      context.commit("FETCH_POST", data);
    },

    async doLogin(context, userData) {
      try {
        const { data } = await axios({
          method: "post",
          url: "/login",
          data: userData,
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("id", data.id);
        localStorage.setItem("username", data.username);
        context.commit("LOGIN_STATUS", true);
      } catch (error) {
        return error.response.data.message;
      }
    },
  },
});
