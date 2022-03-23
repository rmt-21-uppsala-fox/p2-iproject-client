import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hotels: [],
    markers: [],
    markersById: [],
    bookedBallroom: [],
    invoiceUrl: "",
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
    COMMIT_BOOKEDBALLROOM(state, payload) {
      state.bookedBallroom = payload;
    },
    COMMIT_INVOICEURL(state, payload) {
      state.invoiceUrl = payload;
    },
  },
  actions: {
    async fetchHotels(context) {
      try {
        const response = await axios({
          method: "get",
          url: "https://hotel-ballroom-booking.herokuapp.com/hotels",
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
          url: "https://hotel-ballroom-booking.herokuapp.com/hotels/markers",
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
          url: `https://hotel-ballroom-booking.herokuapp.com/hotels/markers/${hotelId}`,
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
        const url = "https://hotel-ballroom-booking.herokuapp.com/register";
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
        const url = "https://hotel-ballroom-booking.herokuapp.com/login";
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
        const url = `https://hotel-ballroom-booking.herokuapp.com/hotels/book/${payload.hotelId}`;
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
    async getBookedBallroom(context) {
      try {
        const url = "https://hotel-ballroom-booking.herokuapp.com/hotels/book/";
        const response = await axios({
          method: "get",
          url,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        const data = response.data;
        console.log(data);
        context.commit("COMMIT_BOOKEDBALLROOM", data);
      } catch (error) {
        console.log(error.response);
      }
    },
    async payWithXendit(context, payload) {
      try {
        console.log(payload, "masuk 146");
        const url = `https://hotel-ballroom-booking.herokuapp.com/hotels/book/payment/${payload}`;
        const response = await axios({
          method: "post",
          url,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        const data = response.data;
        console.log(data, " index Masuk 156");
        // return data;
        window.open(data.url);
        context.commit("COMMIT_INVOICEURL", data.url);
      } catch (error) {
        console.log(error.response);
      }
    },
  },
  modules: {},
});
