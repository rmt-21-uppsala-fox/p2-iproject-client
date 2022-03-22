import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allGames: [],
    UpcomingGames: [],
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
  },
  modules: {},
});
