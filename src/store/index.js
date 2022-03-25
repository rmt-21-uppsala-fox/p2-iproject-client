import Vue from "vue";
import Vuex from "vuex";
import customerAPI from "../apis/customerApi";
import swal from "sweetalert";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    flagLogin: false,
    flagRegister: false,
    cart: [],
    cities: [],
    costs: [],
    // transactions: []
  },

  mutations: {
    ADD_CART(state, payload) {
      state.cart.push(payload);
    },

    SET_CART(state, payload) {
      state.cart = payload;
    },

    SET_PRODUCTS(state, payload) {
      state.products = payload;
    },

    SET_FLAGLOGIN(state, paylod) {
      state.flagLogin = paylod;
    },
    SET_REGISTER(state, payload) {
      state.flagRegister = payload;
    },

    SET_CITIES(state, payload) {
      state.cities = payload;
    },

    SET_COSTS(state, payload) {
      state.costs = payload;
    },

    // SET_TRANSACTIONS(state, payload) {
    //   state.transactions = payload;
    // },

    ADD_QUANTITY(state, payload) {
      const itemFound = state.cart.find((el) => el.id === payload.id);
      if (itemFound) {
        itemFound.quantity += payload.add_value;
      }
      itemFound.totalPrice = itemFound.quantity * itemFound.price;
    },
  },

  actions: {
    addCart(context, product) {
      const itemFound = context.state.cart.find((el) => el.id === product.id);
      if (itemFound) {
        itemFound.quantity++;
        itemFound.totalPrice = itemFound.quantity * itemFound.price;
      } else {
        product.quantity = 1;
        product.totalPrice = product.quantity * product.price;
        context.commit("ADD_CART", product);
      }
      localStorage.setItem("cart", JSON.stringify(context.state.cart));
      const cart = JSON.parse(localStorage.getItem("cart") || []);
      context.commit("SET_CART", cart);
    },

   checkLogin(context) {
      try {
        if (localStorage.getItem("access_token")) {
          context.commit("SET_FLAGLOGIN", true);
          const cart = JSON.parse(localStorage.getItem("cart") || []);
          context.commit("SET_CART", cart);
        }
      } catch (error) {
        console.log(error);
      }
    },

    async fetchProducts(context) {
      try {
        const response = await customerAPI.get("/customers/products");
        context.commit("SET_PRODUCTS", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async login(context, payload) {
      try {
        const response = await customerAPI.post("/customers/login", payload);
        if (response.status === 200) {
          context.commit("SET_FLAGLOGIN", true);
        }
        localStorage.setItem("access_token", response.data.access_token);
        swal("LOGIN", "Success Login", "success");
      } catch (error) {
        console.log(error);
      }
    },

    async register(context, payload) {
      try {
        const response = await customerAPI.post("/customers/register", payload);
        swal("Register", "Success Register", "success");
        if (response.status === 201) {
          context.commit("SET_REGISTER", true);
        }
      } catch (error) {
        console.log(error.response);
        swal("ERROR", "Please Fill Form", "error");
      }
    },

    async getCities(context) {
      try {
        const response = await customerAPI.get("/raja-ongkirs/cities", {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        context.commit("SET_CITIES", response.data.rajaongkir.results);
      } catch (error) {
        console.log(error);
      }
    },

    async postCosts(context, payload) {
      try {
        const response = await customerAPI.post(
          "/raja-ongkirs/costs",
          payload,
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );

        context.commit("SET_COSTS", response.data.rajaongkir.results);
      } catch (error) {
        console.log(error);
      }
    },

    // async postTransaction(context, payload) {
    //   try {
    //     const response = await customerAPI.post(
    //       "/customers/orders",
    //       payload,
    //       {
    //         headers: {
    //           access_token: localStorage.getItem("access_token"),
    //         },
    //       }
    //     );

    //     context.commit("SET_TRANSACTIONS", response.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },

    logout(context) {
      localStorage.clear();
      context.commit("SET_CART", []);
      context.commit("SET_FLAGLOGIN", false);
    },
  },
  modules: {},
});
