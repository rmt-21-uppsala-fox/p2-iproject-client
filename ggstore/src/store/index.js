import Vue from "vue";
import Vuex from "vuex";
import { firebase, auth } from "../../firebase/firebase";
// import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async register(ctx, payload) {
      try {
        const { email, password } = payload;
        await firebase.createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        console.log(error);
      }
    },
    async signIn(ctx, payload) {
      try {
        const { email, password } = payload;
        await firebase.signInWithEmailAndPassword(auth, email, password);
        const idToken = await auth.currentUser.getIdToken();
        console.log(idToken);
      } catch (error) {
        console.log(error);
      }
    },
    getAuthResponse() {},
  },
  modules: {},
});
