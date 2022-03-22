import router from "@/router";
import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    eplClubs: [],
    chats: [],
  },
  getters: {},
  mutations: {
    SET_EPL(state, payload) {
      state.eplClubs = payload;
    },
  },
  actions: {
    socket_connect() {
      console.log("connected", this._vm.$socket);
    },
    socket_disconnect() {
      console.log("disconnected", this._vm.$socket);
    },
    socket_customEventFromServer(_, payload) {
      console.log("customEventFromServer", payload);
    },
    sendChatToServer(_, payload) {
      this._vm.$socket.client.emit("chatFromClient", payload);
    },
    async getEplTable(context) {
      try {
        const access_token = localStorage.getItem("access_token");
        const response = await axios({
          method: "GET",
          url: "http://localhost:3000/epl",
          headers: { access_token },
        });
        console.log(response.data);
        context.commit("SET_EPL", response.data.teams);
      } catch (err) {
        console.log(err);
      }
    },
    async register(context, payload) {
      try {
        const response = await axios({
          method: "POST",
          url: "http://localhost:3000/register",
          data: {
            email: payload.email,
            name: payload.name,
            password: payload.password,
          },
        });
        console.log(response.data);
        router.push("/login");
      } catch (err) {
        console.log(err);
      }
    },
    async login(context, payload) {
      try {
        const response = await axios({
          method: "POST",
          url: "http://localhost:3000/login",
          data: {
            email: payload.email,
            password: payload.password,
          },
        });
        console.log(response.data);
        localStorage.setItem("access_token", response.data.access_token);
        router.push("/landing");
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
