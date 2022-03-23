import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    image_0: "",
    image_1: "",
    image_2: "",
    image_3: "",
    image_4: "",
    image_5: "",
    wikipediaData: "",
  },
  getters: {
    imageTitle_0(state) {
      return state.image_0.artObjects[0].title;
    },
    imageTitle_1(state) {
      return state.image_1.artObjects[0].title;
    },
    imageTitle_2(state) {
      return state.image_2.artObjects[0].title;
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
      state.image_3 = payload.imageData_3;
      state.image_4 = payload.imageData_4;
      state.image_5 = payload.imageData_5;
    },
    SET_WIKIPEDIA(state, payload) {
      state.wikipediaData = payload;
    },
    SET_FILE_(state, payload) {
      state.file = payload.value;
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
    async callWikipedia(context, payload) {
      try {
        let title;
        switch (payload) {
          case 0:
            title = context.getters.imageTitle_0;
            break;
          case 1:
            title = context.getters.imageTitle_1;
            break;
          case 2:
            title = context.getters.imageTitle_2;
            break;
          default:
            break;
        }
        return await axios({
          method: "post",
          url: "http://localhost:3000/wikis",
          data: { title },
        });
      } catch (error) {
        console.log(error);
      }
    },
    async upload(context, payload) {
      return axios.post("http://localhost:3000/upload", payload);
    },
  },
  modules: {},
});
