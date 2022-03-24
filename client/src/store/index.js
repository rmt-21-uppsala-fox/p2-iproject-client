import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    image_0: "",
    image_1: "",
    image_2: "",
    wikipediaData0: "",
    wikipediaData1: "",
    wikipediaData2: "",
    userFile: "",
  },
  getters: {
    imageTitle_0(state) {
      return state.image_0.artObjects[0].longTitle;
    },
    imageTitle_1(state) {
      return state.image_1.artObjects[0].longTitle;
    },
    imageTitle_2(state) {
      return state.image_2.artObjects[0].longTitle;
    },
    file(state) {
      return state.file;
    },
  },
  mutations: {
    SET_MUSEUM_DATA(state, payload) {
      state.image_0 = payload.imageData_0;
      state.image_1 = payload.imageData_1;
      state.image_2 = payload.imageData_2;
    },
    SET_WIKIPEDIA0(state, payload) {
      state.wikipediaData0 = payload;
    },
    SET_WIKIPEDIA1(state, payload) {
      state.wikipediaData1 = payload;
    },
    SET_WIKIPEDIA2(state, payload) {
      state.wikipediaData2 = payload;
    },
    SET_FILE_(state, payload) {
      state.file = payload.value;
    },
    SET_USER_FILE(state, payload) {
      state.userFile = payload;
    },
  },
  actions: {
    async callRijksmuseum(context, payload) {
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3000/paintings",
          data: payload,
        });
        context.commit("SET_MUSEUM_DATA", response.data);
      } catch (error) {
        console.log(error.response);
      }
    },
    async callWikipedia(context) {
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3000/wikis",
        });
        context.commit("SET_WIKIPEDIA0", response.data.data0)
        context.commit("SET_WIKIPEDIA1", response.data.data1)
        context.commit("SET_WIKIPEDIA2", response.data.data2)
        console.log(response);
        console.log(context);
      } catch (error) {
        console.log(error);
      }
    },
    async upload(context, payload) {
      const response = await axios.post(
        "http://localhost:3000/upload",
        payload
      );
      console.log(response);
      context.commit("SET_USER_FILE", response.data);
      return response.data;
    },
  },
  modules: {},
});
