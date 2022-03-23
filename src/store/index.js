import Vue from "vue";
import Vuex from "vuex";
import Swal from "sweetalert2";
import local from "@/api/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    myCart: [],
    isLogin: false,
    pageCount: 0,
    category: "",
    qrCode: "",
    paramsGOAuth: {
      client_id:
        "386702520020-7grsgt23c6eurmll5lt73j8h6itu41d8.apps.googleusercontent.com",
    },
  },
  getters: {},
  mutations: {
    FETCH_PRODUCTS(state, payload) {
      state.products = payload;
    },
    SET_ISLOGIN(state, payload) {
      state.isLogin = payload;
    },
    SET_PAGECOUNT(state, payload) {
      state.pageCount = Math.ceil(payload / 9);
    },
    FETCH_MYCART(state, payload) {
      state.myCart = payload;
    },
    SET_CATEGORY(state, payload) {
      state.category = payload;
    },
    SET_QRCODE(state, payload) {
      state.qrCode = payload;
    },
  },
  actions: {
    async fetchData(context, { category, search, page }) {
      try {
        const { data } = await local({
          url: "/products",
          method: "GET",
          params: {
            category,
            search,
            page,
          },
        });
        context.commit("FETCH_PRODUCTS", data);
        context.commit("SET_PAGECOUNT", data.count);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}!`,
        });
      }
    },
    async fetchProductById(context, payload) {
      try {
        const { data } = await local({
          url: `/products/${payload}`,
          method: "GET",
        });
        context.commit("FETCH_PRODUCTS", data);
        context.commit("SET_CATEGORY", data.Category.name);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}!`,
        });
      }
    },
    async fetchMyCart(context) {
      try {
        const { data } = await local({
          url: "/mycart",
          method: "GET",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        context.commit("FETCH_MYCART", data);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}!`,
        });
      }
    },
    async deleteMyCart(context, payload) {
      try {
        await local({
          url: `/mycart/${payload}`,
          method: "DELETE",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        Swal.fire("Product is deleted from your cart.", "", "success");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}!`,
        });
      }
    },
    loginHandler(context, payload) {
      return local({
        url: "/login",
        method: "POST",
        data: payload,
      });
    },
    registerHandler(context, payload) {
      return local({
        url: "/register",
        method: "POST",
        data: payload,
      });
    },
    googleOAuth(context, googleUser) {
      return local({
        url: "/authGoogle",
        method: "POST",
        data: {
          idToken: googleUser.getAuthResponse().id_token,
        },
      });
    },
    addMyCart(context, payload) {
      return local({
        url: `/mycart/${payload.productId}`,
        method: "POST",
        headers: {
          access_token: localStorage.access_token,
        },
        data: {
          quantity: payload.quantity,
        },
      });
    },
  },
  modules: {},
});
