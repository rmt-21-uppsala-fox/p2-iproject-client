import Vue from "vue";
import Vuex from "vuex";
import axios from "@/api/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    postData: [],
  },
  getters: {},
  mutations: {
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
  },
  modules: {},
});
