import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import { firebase, auth } from "../../firebase/firebase";
// import axios from "axios";

Vue.use(Vuex);

const REST = axios.create({
  baseURL: "http://localhost:3000",
});

export default new Vuex.Store({
  state: {
    deals: null,
    steamWallet: null,
    isSignedIn: false,
  },
  getters: {},
  mutations: {
    MUTATE_DEALS(state, deals) {
      state.deals = deals;
    },
    MUTATE_STEAM_WALLET(state, steamWallet) {
      state.steamWallet = steamWallet;
    },
    MUTATE_IS_SIGNED_IN(state, isSignedIn) {
      state.isSignedIn = isSignedIn;
    },
  },
  actions: {
    async register(ctx, payload) {
      try {
        const { email, password } = payload;
        const user = await firebase.createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (user) {
          ctx.commit("MUTATE_IS_SIGNED_IN", true);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async signIn(ctx, payload) {
      try {
        const { email, password } = payload;
        const user = await firebase.signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (user) {
          ctx.commit("MUTATE_IS_SIGNED_IN", true);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getDeals(ctx, payload = {}) {
      try {
        const { page, search } = payload;
        let endPoint = "/cheapShark";
        if (page) {
          endPoint += `?page=${page}`;
        }
        if (search) {
          endPoint += page ? "&" : "?";
          endPoint += `search=${search}`;
        }
        const res = await REST.get(endPoint);
        ctx.commit("MUTATE_DEALS", res.data);
      } catch (err) {
        console.log(err);
      }
    },
    async getSteamWallet(ctx) {
      try {
        const res = await REST.get("/walletcards");
        ctx.commit("MUTATE_STEAM_WALLET", res.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
