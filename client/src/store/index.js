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
      console.log(payload);
      state.isLogin = payload;
    },
  },
  actions: {
    async PopularGamesAYearAgo(context) {
      try {
        const data = await axios({
          method: `get`,
          url: `http://localhost:3000/games`,
        });
        // console.log(data);
        context.commit(`GAMES_A_YEAR_AGO`, data);
      } catch (err) {
        console.log(err);
      }
    },
    async UpcomingGames(context) {
      try {
        const data = await axios({
          method: `get`,
          url: `http://localhost:3000/games/next-week`,
        });
        // console.log(data);
        context.commit(`UPCOMING_GAMES`, data);
      } catch (err) {
        console.log(err);
      }
    },
    async getDataGame(context, payload) {
      try {
        const data = await axios({
          method: `get`,
          url: `http://localhost:3000/games/${payload}`,
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
          url: "http://localhost:3000/login",
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
          url: "http://localhost:3000/register",
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
  },
  modules: {},
});
