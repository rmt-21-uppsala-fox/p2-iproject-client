import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hotels: [],
    markers: [],
    markersById: [],
  },
  getters: {},
  mutations: {
    COMMIT_HOTELS(state, payload) {
      state.hotels = payload;
    },
    COMMIT_MARKERS(state, payload) {
      state.markers = payload;
    },
    COMMIT_MARKERSBYID(state, payload) {
      state.markersById = payload;
    },
  },
  actions: {
    async fetchHotels(context) {
      try {
        const response = await axios({
          method: "get",
          url: "http://localhost:3000/hotels",
        });
        const data = response.data;
        context.commit("COMMIT_HOTELS", data);
      } catch (error) {
        console.log(error.response);
      }
    },
    async fetchMarker(context) {
      try {
        const response = await axios({
          method: "get",
          url: "http://localhost:3000/hotels/markers",
        });
        const data = response.data;
        context.commit("COMMIT_MARKERS", data);
      } catch (error) {
        console.log(error.response);
      }
    },
    async fetchMarkerById(context, hotelId) {
      try {
        console.log(hotelId, "MASUK 43 index store");
        const response = await axios({
          method: "get",
          url: `http://localhost:3000/hotels/markers/${hotelId}`,
        });
        const data = response.data;
        console.log(data, "Masuk 49 INDEX STORE");
        context.commit("COMMIT_MARKERSBYID", data);
      } catch (error) {
        console.log(error.response);
      }
    },
    async doRegister(context, payload) {
      try {
        const url = "http://localhost:3000/register";
        const response = await axios({
          method: "post",
          url,
          data: {
            username: payload.username,
            email: payload.email,
            password: payload.password,
          },
        });
        const data = response.data;
        console.log(data);
      } catch (error) {
        console.log(error.response);
      }
    },
    async doLogin(context, payload) {
      try {
        const url = "http://localhost:3000/login";
        const response = await axios({
          method: "post",
          url,
          data: {
            email: payload.email,
            password: payload.password,
          },
        });
        const data = response.data;
        console.log(data);
        localStorage.setItem("access_token", data.access_token);
      } catch (error) {
        console.log(error.response);
      }
    },
    async BookBallRoom(context, payload) {
      try {
        console.log(payload.name, "masuk 90");
        const url = `http://localhost:3000/hotels/book/${payload.hotelId}`;
        const response = await axios({
          method: "post",
          url,
          data: {
            name: payload.name,
            price: payload.price,
            bookDateStart: payload.bookDate.start,
            bookDateEnd: payload.bookDate.end,
          },
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        const data = response.data;
        console.log(data);
      } catch (error) {
        console.log(error.response);
      }
    },
  },
  modules: {},
});
