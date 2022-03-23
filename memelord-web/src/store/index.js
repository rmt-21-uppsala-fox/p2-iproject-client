import Vue from "vue";
import Vuex from "vuex";
import axios from "@/api/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    postData: [],
    isLogin: false,
    userId: 0,
    username: "",
  },
  getters: {},
  mutations: {
    LOGIN_STATUS(state, data) {
      state.isLogin = data;
    },
    FETCH_POST(state, data) {
      state.postData = data;
    },
    USERNAME_COMMIT(state, data) {
      state.username = data;
    },
    USERID_COMMIT(state, data) {
      state.userId = data;
    },
  },
  actions: {
    loginCheck(context) {
      if (localStorage.access_token) {
        context.commit("LOGIN_STATUS", true);
        context.commit("USERNAME_COMMIT", localStorage.username);
        context.commit("USERID_COMMIT", localStorage.id);
      } else {
        context.commit("LOGIN_STATUS", false);
      }
    },
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
        context.commit("USERNAME_COMMIT", data.username);
        context.commit("USERID_COMMIT", data.id);
      } catch (error) {
        return error.response.data.message;
      }
    },
    async doLogout(context) {
      try {
        await axios({
          method: "get",
          url: "/logout",
        });
        localStorage.clear();
        context.commit("LOGIN_STATUS", false);
      } catch (error) {
        return error.response.data.message;
      }
    },
    async doRegister(context, userData) {
      try {
        await axios({
          method: "post",
          url: "/register",
          data: userData,
        });
      } catch (error) {
        return error.response.data.message;
      }
    },
  },
});
