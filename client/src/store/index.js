import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    museumData: "",
    wikipediaData: "",
  },
  getters: {
    museumTitles(state) {
      return state.museumData.artObjects.map((e) => e.title);
    },
  },
  mutations: {
    SET_MUSEUM_DATA(state, payload) {
      state.museumData = payload.data;
    },
    SET_WIKIPEDIA(state, payload) {
      console.log(payload);
      state.wikipediaData = payload;
    },
  },
  actions: {
    async callRijksmuseum(context) {
      try {
        const response = await axios({
          method: "get",
          url: "http://localhost:3000/paintings",
        });
        context.commit("SET_MUSEUM_DATA", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async callWikipedia(context, payload) {
      try {
        console.log(context.getters.museumTitles[payload]);
        return await axios({
          method: "post",
          url: "http://localhost:3000/wikis",
          data: { data: context.getters.museumTitles[payload] },
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
