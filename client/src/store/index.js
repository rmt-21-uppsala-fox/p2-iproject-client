import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cardContain: [],
    detailCard: [],
    myDonation: [],
    invoice: "",
  },
  getters: {},
  mutations: {
    SET_CARDCONTAIN(state, payload) {
      state.cardContain = payload;
    },
    SET_DETAILCARD(state, payload) {
      state.detailCard = payload;
    },
    SET_MYDONATION(state, payload) {
      state.myDonation = payload;
    },
    SET_INVOICE(state, payload) {
      state.invoice = payload;
    },
  },
  actions: {
    login(context, payload) {
      return axios.post("http://localhost:3000/login", payload);
    },
    register(context, payload) {
      return axios.post("http://localhost:3000/register", payload);
    },
    async fetchCardContain(context) {
      try {
        const { data } = await axios.get("http://localhost:3000/donation");
        context.commit("SET_CARDCONTAIN", data);
      } catch (error) {
        console.log(error.response.data);
      }
    },
    async gotoDetail(context, id) {
      try {
        let { data } = await axios.get(`http://localhost:3000/donation/${id}`);
        context.commit("SET_DETAILCARD", data);
      } catch (error) {
        console.log(error.response.data);
      }
    },
    async fetchMyDonation(context) {
      try {
        const { data } = await axios.get("http://localhost:3000/mydonation", {
          headers: { access_token: localStorage.access_token },
        });
        context.commit("SET_MYDONATION", data);
      } catch (error) {
        console.log(error.response.data);
      }
    },
    async donationNow(context, payload) {
      try {
        const { data } = await axios.post(
          `http://localhost:3000/donation/${payload}`,
          {},
          {
            headers: { access_token: localStorage.access_token },
          }
        );
        context.commit("SET_INVOICE", data.invoice);
      } catch (error) {
        console.log(error.response.data);
      }
    },
  },
  modules: {},
});
