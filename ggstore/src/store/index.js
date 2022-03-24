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
    myCart: null,
    myCartTotalPrice: 0,
    pendingInvoice: null,
    myCartTotalItems: 0,
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
    MUTATE_MY_CART(state, myCart) {
      state.myCart = myCart;
    },
    MUTATE_MY_CART_TOTAL_PRICE(state, myCartTotalPrice) {
      state.myCartTotalPrice = myCartTotalPrice;
    },
    MUTATE_PENDING_INVOICE(state, pendingInvoice) {
      state.pendingInvoice = pendingInvoice;
    },
    MUTATE_MY_CART_TOTAL_ITEMS(state, myCartTotalItems) {
      state.myCartTotalItems = myCartTotalItems;
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
    async getMyCart(ctx) {
      try {
        const idToken = await auth.currentUser.getIdToken();
        const { data } = await REST.get("/mycarts", {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        });

        ctx.commit("MUTATE_PENDING_INVOICE", data.invoice);
        ctx.commit("MUTATE_MY_CART", data.myCart);
        ctx.commit("MUTATE_MY_CART_TOTAL_PRICE", data.totalPrice);
        ctx.commit("MUTATE_MY_CART_TOTAL_ITEMS", data.count);
      } catch (err) {
        console.log(err);
      }
    },
    async addToCart(ctx, payload) {
      const idToken = await auth.currentUser.getIdToken();
      await REST.post(
        "/mycarts/" + payload,
        {},
        {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        }
      );
      ctx.dispatch("getMyCart");
    },
    async cancelCartItem(ctx, payload) {
      const idToken = await auth.currentUser.getIdToken();
      await REST.patch(
        "/mycarts/" + payload,
        {},
        {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        }
      );
      ctx.dispatch("getMyCart");
    },
    async checkoutCart(ctx) {
      const idToken = await auth.currentUser.getIdToken();
      try {
        await REST.get("/mycarts/checkout", {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        });
        ctx.dispatch("getMyCart");
      } catch (err) {
        console.log(err.message);
      }
    },
    async cancelInvoice(ctx, payload) {
      const idToken = await auth.currentUser.getIdToken();
      try {
        await REST.patch(
          "/mycarts/invoice/" + payload,
          {},
          {
            headers: {
              Authorization: `Bearer ${idToken}`,
            },
          }
        );
        ctx.dispatch("getMyCart");
      } catch (err) {
        console.log(err.message);
      }
    },
  },
  modules: {},
});
