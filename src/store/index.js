import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chats: []
  },
  getters: {},
  mutations: {},
  actions: {
    socket_connect() {
      console.log("connected", this._vm.$socket)
    },
    socket_disconnect() {
      console.log("disconnected", this._vm.$socket)
    },
    socket_customEventFromServer(_, payload) {
      console.log("customEventFromServer", payload)
    },
    sendChatToServer(_, payload) {
      this._vm.$socket.client.emit("chatFromClient", payload)
    }
  },
  modules: {},
});
