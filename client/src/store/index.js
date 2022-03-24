import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allGames: [],
    UpcomingGames: [],
    detailGame: [],
    isLogin: false,
    purchasedGames: [],
    gamesCollection: [],
    gamesWishList: []
  },
  getters: {},
  mutations: {
    GAMES_A_YEAR_AGO(state, payload) {
      state.allGames = payload.data;
    },
    UPCOMING_GAMES(state, payload) {
      // console.log(payload);
      state.UpcomingGames = payload.data;
    },
    DETAIL_GAME(state, payload) {
      // console.log(payload);
      state.detailGame = payload;
    },
    IS_LOGIN(state, payload) {
      // console.log(payload);
      state.isLogin = payload;
    },
    GAME_PURCHASED(state, payload) {
      state.purchasedGames = payload.data;
    },
    GAME_COLLECTION(state, payload) {
      // console.log(payload)
      state.gamesCollection = payload.data;
    },
    GAME_WISHLIST(state, payload) {
      // console.log(payload)
      state.gamesWishList = payload.data;      
    }
  },
  actions: {
    async PopularGamesAYearAgo(context) {
      try {
        const token = localStorage.getItem(`access_token`);
        const data = await axios({
          method: `get`,
          url: `https://iproject-hacktiv8.herokuapp.com/games`,
          headers: { access_token: token },
        });
        // console.log(data);
        context.commit(`GAMES_A_YEAR_AGO`, data);
      } catch (err) {
        console.log(err);
      }
    },
    async UpcomingGames(context) {
      try {
        const token = localStorage.getItem(`access_token`);
        const data = await axios({
          method: `get`,
          url: `https://iproject-hacktiv8.herokuapp.com/next-month`,
          headers: { access_token: token },
        });
        // console.log(data);
        context.commit(`UPCOMING_GAMES`, data);
      } catch (err) {
        console.log(err);
      }
    },
    async getDataGame(context, payload) {
      try {
        const token = localStorage.getItem(`access_token`);
        const data = await axios({
          method: `get`,
          url: `https://iproject-hacktiv8.herokuapp.com/${payload}`,
          headers: { access_token: token },
        });
        // console.log(data);
        context.commit(`DETAIL_GAME`, data);
      } catch (err) {
        console.log(err);
      }
    },
    async postLogin(context, payload) {
      try {
        const res = await axios({
          method: "POST",
          url: "https://iproject-hacktiv8.herokuapp.com/login",
          data: payload,
        });
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("id", res.data.id);
        context.commit(`IS_LOGIN`, true);
      } catch (err) {
        console.log(err);
      }
    },
    async signUp(context, payload) {
      try {
        const res = await axios({
          method: "POST",
          data: payload,
          url: "https://iproject-hacktiv8.herokuapp.com/register",
        });
        // console.log(res);
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("id", res.data.id);
        context.commit("IS_LOGIN", true);
      } catch (err) {
        console.log(err);
      }
    },
    async logout(context) {
      try {
        localStorage.clear();
        context.commit("IS_LOGIN", false);
      } catch (err) {
        console.log(err);
      }
    },
    async buyTheGame(context, payload) {
      try {
        // console.log(payload)
        const token = localStorage.getItem(`access_token`);
        const data = await axios({
          method: "POST",
          url: `https://iproject-hacktiv8.herokuapp.com/${payload}`,
          headers: { access_token: token },
        });
        // console.log(data)
        context.commit("GAME_PURCHASED", data);
      } catch (err) {
        console.log(err);
      }
    },
    async addToCollection(context, payload) {
      try {
        // console.log(payload)
        const token = localStorage.getItem(`access_token`);
        const id = payload.gameId
        const data = await axios({
          method: "POST",
          url: `https://iproject-hacktiv8.herokuapp.com/${id}`,
          data: {
            gameId: payload.gameId,
            name: payload.name,
            price: payload.price,
            background_image: payload.background_image,
            released: payload.released, 
            rating: payload.rating, 
          },
          headers : { access_token: token },
        })
        // console.log(data)
        context.commit("GAME_COLLECTION", data);
      } catch (err) {
        console.log(err)
      }
    },
    async showGameCollection(context) {
      try {
        const token = localStorage.getItem(`access_token`);
        const id = localStorage.getItem(`id`)
        const data = await axios({
          method: "GET",
          url: `https://iproject-hacktiv8.herokuapp.com/${id}`,
          headers: { access_token: token },
        })
        // console.log(data)
        context.commit("GAME_COLLECTION", data);
      } catch (err) {
        console.log(err)
      }
    },
    async addToWishlist(context, payload) {
      try {
        console.log(payload)
        const token = localStorage.getItem(`access_token`);
        const UserId = localStorage.getItem(`id`)
        const data = await axios({
          method: "POST",
          url: `http://localhost:3000/games/Wishlist/${payload}`,
          headers: {
            access_token: token,
          }, data: {
            UserId: UserId,
            GameId: payload
          }
        })
        // console.log(data)
        context.commit("GAME_WISHLIST", data);
      } catch (err) {
        console.log(err)
      }
    },
    async showWishlist(context) {
      try {
        const token = localStorage.getItem(`access_token`);
        const id = localStorage.getItem(`id`)
        const data = await axios({
          method: "GET",
          url: `http://localhost:3000/games/Wishlist/${id}`,
          headers: { access_token: token },
        })
        // console.log(data)
        context.commit("GAME_WISHLIST", data);
      } catch (err) {
        console.log(err)
      }
    }
  },
  modules: {},
});
