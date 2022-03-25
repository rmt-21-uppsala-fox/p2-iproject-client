import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import swal from "sweetalert";
const address = "https://fast-order-server.herokuapp.com";
// const address = "http://localhost:3000";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    customerIsLogin: false,
    restaurantIsLogin: false,
    inFirstPage: false,
    RestaurantId: "",
    restaurantMenu: [],
    QRCode: {},
    foodCategory: [],
    inLoginPageOrRegister: false,
    customersOrderLists: [],
    xenditResponse: [],
  },
  getters: {},
  mutations: {
    CHANGE_QRCODE(state, payload) {
      state.QRCode = payload;
    },
    CHANGE_customersOrderLists(state, payload) {
      state.customersOrderLists = payload;
    },
    CHANGE_inFirstPage(state, payload) {
      state.inFirstPage = payload;
    },
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
    CHANGE_RestaurantId(state, payload) {
      state.RestaurantId = payload;
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
        let { page, search, filter, RestaurantId } = payload;
        if (!search) {
          search = "";
        }
        if (!filter) {
          filter = "";
        }
        let params = localStorage.getItem("RestaurantId");
        if (!params) {
          params = +RestaurantId;
        }
        const response = await axios({
          method: "get",
          url: `${address}/menu/${params}?page=${page}&size=8&filter=${filter}&search=${search}`,
        });
        context.commit("CHANGE_RESTAURANTMENU", response.data);
      } catch (err) {
        let errorMsg = err.response.data.message;
        if (Array.isArray(errorMsg)) {
          errorMsg = errorMsg.join(", ");
        }
        swal(errorMsg, "", "warning");
      }
    },
    async getFoodCategories(context) {
      try {
        const response = await axios({
          method: "get",
          url: `${address}/category`,
        });
        context.commit("CHANGE_FOODCATEGORY", response.data);
      } catch (err) {
        let errorMsg = err.response.data.message;
        if (Array.isArray(errorMsg)) {
          errorMsg = errorMsg.join(", ");
        }
        swal(errorMsg, "", "warning");
      }
    },
    async registerRestaurant(context, payload) {
      try {
        await axios({
          method: "post",
          url: `${address}/register/restaurant`,
          headers: {
            "Content-Type": "multipart/form-data",
          },
          data: payload,
        });
        swal("Register Success!", "", "success");
      } catch (err) {
        let errorMsg = err.response.data.message;
        if (Array.isArray(errorMsg)) {
          errorMsg = errorMsg.join(", ");
        }
        swal(errorMsg, "", "warning");
      }
    },
    async addMenu(context, payload) {
      try {
        const RestaurantId = localStorage.getItem("RestaurantId");
        await axios({
          method: "post",
          url: `${address}/menu/${+RestaurantId}`,
          headers: {
            "Content-Type": "multipart/form-data",
            access_token_Resto: localStorage.access_token_Resto,
          },
          data: payload,
        });
        swal("Success adding menu!", "", "success");
      } catch (err) {
        let errorMsg = err.response.data.message;
        if (Array.isArray(errorMsg)) {
          errorMsg = errorMsg.join(", ");
        }
        swal(errorMsg, "", "warning");
      }
    },
    async doRegisCust(context, payload) {
      try {
        const { name, email, RestaurantId } = payload;
        console.log(payload);
        const response = await axios({
          method: "post",
          url: `${address}/register/${+RestaurantId}/customer`,
          data: {
            name,
            email,
          },
        });
        localStorage.access_token_Cust = response.data.access_token_Cust;
        localStorage.CustId = response.data.CustId;
        swal("Good food, happy tummy!", "", "success");
        context.commit("CHANGE_customerIsLogin", true);
      } catch (err) {
        let errorMsg = err.response.data.message;
        if (Array.isArray(errorMsg)) {
          errorMsg = errorMsg.join(", ");
        }
        swal(errorMsg, "", "warning");
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
        localStorage.access_token_Resto = response.data.access_token_Resto;
        localStorage.RestaurantId = response.data.id;
        swal("Login Success", "", "success");
        context.commit("CHANGE_RestaurantId", response.data.id);
        context.commit("CHANGE_RESTAURANT_IS_LOGIN", true);
      } catch (err) {
        let errorMsg = err.response.data.message;
        if (Array.isArray(errorMsg)) {
          errorMsg = errorMsg.join(", ");
        }
        swal(errorMsg, "", "warning");
      }
    },
    async doLogout(context) {
      try {
        localStorage.clear();
        context.commit("CHANGE_RESTAURANT_IS_LOGIN", false);
        context.commit("CHANGE_customerIsLogin", false);
        swal("Logout Success!", "", "success");
      } catch (err) {
        let errorMsg = err.response.data.message;
        if (Array.isArray(errorMsg)) {
          errorMsg = errorMsg.join(", ");
        }
        swal(errorMsg, "", "warning");
      }
    },
    async addOrder(context, payload) {
      try {
        await axios({
          method: "post",
          url: `${address}/order/${payload}`,
          headers: {
            access_token_Cust: localStorage.access_token_Cust,
          },
        });
        swal("Success add Order!", "", "success");
      } catch (err) {
        let errorMsg = err.response.data.message;
        if (Array.isArray(errorMsg)) {
          errorMsg = errorMsg.join(", ");
        }
        swal(errorMsg, "", "warning");
      }
    },
    async getCustomerOrder(context) {
      try {
        const response = await axios({
          method: "get",
          url: `${address}/order`,
          headers: {
            access_token_Cust: localStorage.access_token_Cust,
          },
        });
        context.commit("CHANGE_customersOrderLists", response.data);
      } catch (err) {
        let errorMsg = err.response.data.message;
        if (Array.isArray(errorMsg)) {
          errorMsg = errorMsg.join(", ");
        }
        swal(errorMsg, "", "warning");
      }
    },
    async getQrCode(context, payload) {
      try {
        const response = await axios({
          method: "get",
          url: `https://api.happi.dev/v1/qrcode?data=https://fastorder-ican.web.app/${payload}/customer&width=128&dots=000000&bg=FFFFFF&apikey=bb3e295YFnt3FJuFfYIdvSOqiKpGOE0ABuTddpsZAQahRyp19hSDyuk2
          `,
        });
        context.commit("CHANGE_QRCODE", response.data.qrcode);
      } catch (err) {
        let errorMsg = err.response.data.message;
        if (Array.isArray(errorMsg)) {
          errorMsg = errorMsg.join(", ");
        }
        swal(errorMsg, "", "warning");
      }
    },
    async createPayment(context, payload) {
      try {
        const response = await axios({
          method: "post",
          url: `${address}/xendit`,
          headers: {
            access_token_Cust: localStorage.access_token_Cust,
          },
          data: {
            amount: payload,
            RestaurantId: localStorage.RestaurantId,
          },
        });
        localStorage.payment = response.data.external_id;
        context.commit("CHANGE_xenditResponse", response.data);
      } catch (err) {
        let errorMsg = err.response.data.message;
        if (Array.isArray(errorMsg)) {
          errorMsg = errorMsg.join(", ");
        }
        swal(errorMsg, "", "warning");
      }
    },
  },
  modules: {},
});
