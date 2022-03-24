import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
const address = "https://fast-order-server.herokuapp.com";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    customerIsLogin: false,
    restaurantIsLogin: false,
    restoId: "",
    restaurantMenu: [],
    foodCategory: [],
    inLoginPageOrRegister: false,
    xenditResponse: {},
  },
  getters: {},
  mutations: {
    CHANGE_RESTAURANTMENU(state, payload) {
      state.restaurantMenu = payload;
    },
    CHANGE_RESTAURANT_IS_LOGIN(state, payload) {
      state.restaurantIsLogin = payload;
    },
    CHANGE_FOODCATEGORY(state, payload) {
      state.foodCategory = payload;
    },
    CHANGE_IN_LOGIN_PAGE_OR_REGISTER(state, payload) {
      state.inLoginPageOrRegister = payload;
    },
    CHANGE_restoId(state, payload) {
      state.restoId = payload;
    },
    CHANGE_customerIsLogin(state, payload) {
      state.customerIsLogin = payload;
    },
    CHANGE_xenditResponse(state, payload) {
      state.xenditResponse = payload;
    },
  },
  actions: {
    async getRestaurantMenu(context, payload) {
      try {
        let { page, search, filter, restoId } = payload;
        if (!search) {
          search = "";
        }
        if (!filter) {
          filter = "";
        }
        let params = localStorage.getItem("restoId");
        if (!params) {
          params = restoId;
        }
        console.log(restoId);
        const response = await axios({
          method: "get",
          url: `${address}/menu/${params}?page=${page}&size=8&filter=${filter}&search=${search}`,
        });
        context.commit("CHANGE_RESTAURANTMENU", response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async getFoodCategories(context) {
      const response = await axios({
        method: "get",
        url: `${address}/category`,
      });
      console.log(response.data);
      context.commit("CHANGE_FOODCATEGORY", response.data);
    },
    async doLoginCust(context, payload) {
      try {
        const { name, email, restoId } = payload;
        const response = await axios({
          method: "post",
          url: `${address}/register/${+restoId}/customer`,
          data: {
            name,
            email,
          },
        });
        console.log(response.data);
        localStorage.access_token_Cust = response.data.access_token_Cust;
      } catch (err) {
        console.log(err);
      }
    },
    async doLoginResto(context, payload) {
      try {
        const { email, password } = payload;
        const response = await axios({
          method: "post",
          url: `${address}/login/restaurant`,
          data: {
            email,
            password,
          },
        });
        console.log(response.data);
        localStorage.access_token_Resto = response.data.access_token_Resto;
        localStorage.restoId = response.data.id;
        context.commit("CHANGE_restoId", response.data.id);
        context.commit("CHANGE_RESTAURANT_IS_LOGIN", true);
      } catch (err) {
        console.log(err);
      }
    },
    async xenditPaymentCreate(context, payload) {
      try {
        const response = await axios({
          method: "post",
          url: `${address}/xendit/create`,
          data: {
            amount: payload.amount,
            // email: payload.email,
          },
        });
        console.log(response.data);
        context.commit("CHANGE_xenditResponse", response.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
