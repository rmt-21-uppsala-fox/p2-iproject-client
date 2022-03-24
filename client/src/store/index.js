import Vue from "vue";
import Vuex from "vuex";
import local from "@/api/axios.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: true,
    photos: [],
    photosHome: [],
    trip: [],
    tripById: {},
    translate: {},
  },
  mutations: {
    SET_ISLOGIN(stage, payload) {
      stage.isLogin = payload;
    },
    FETCH_PHOTOS(state, payload) {
      state.photos = payload;
    },
    FETCH_PHOTOS_HOME(state, payload) {
      state.photosHome = payload;
    },
    FETCH_TRIP(state, payload) {
      state.trip = payload;
    },
    FETCH_TRIP_BY_ID(state, payload) {
      state.tripById = payload;
    },
    FETCH_TRANSLATE(state, payload) {
      state.translate = payload;
    },
  },
  actions: {
    loginHandler(context, payload) {
      return local.post("/login", payload);
    },
    registerHandler(context, payload) {
      return local.post("/register", payload);
    },
    async fetchPhotos(context) {
      try {
        const data = await local.get("/photos");
        context.commit("FETCH_PHOTOS", data.data.img);
      } catch (err) {
        console.log(err);
      }
    },
    async fetchPhotosHome(context) {
      try {
        const data = await local.get("/photos/home");
        context.commit("FETCH_PHOTOS_HOME", data.data.img);
      } catch (err) {
        console.log(err);
      }
    },
    async fetchTrip(context) {
      try {
        const data = await local.get("/trip");
        context.commit("FETCH_TRIP", data.data);
      } catch (err) {
        console.log(err);
      }
    },
    async fetchTripByid(context, id) {
      try {
        console.log(id, " id");
        const response = await local.get(`/trip/${id}`, {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(response.data, "dari by id");
        context.commit("FETCH_TRIP_BY_ID", response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async xenditPay(context, price) {
      try {
        const response = await local.post(
          "/xenditPay",
          { price },
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );
        console.log(response.data);
        window.open(response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async getTranslate(context, data) {
      try {
        console.log(data,"INI RESPONE DATA");
        const response = await local.post("/translate",{ data },
          {
            headers: {
              access_token: localStorage.access_token,
            },
          });
          console.log(response.data.data.translations.translatedText,"INI RESPONE TRANSLATE")
          context.commit("FETCH_TRANSLATE", response.data.data.translations.translatedText);
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {},
  modules: {},
});
