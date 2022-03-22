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
      state.allGames = payload.data.results;
    },
    UPCOMING_GAMES(state, payload) {
      state.UpcomingGames = payload.data.results;
    },
  },
  actions: {
    async PopularGamesAYearAgo(context) {
      try {
        const dateNow = new Date().toISOString().slice(0, 10);
        const date = new Date();
        date.setDate(date.getDate() - 0);
        date.setFullYear(date.getFullYear() - 1);
        const aYearBefore = date.toISOString().slice(0, 10);
        console.log(`${aYearBefore},${dateNow}`);
        const data = await axios({
          method: `get`,
          url: `https://api.rawg.io/api/games`,
          params: {
            key: `7b6f7730d9af4cfebf2a880376bda74c`,
            dates: `${aYearBefore},${dateNow}`,
            ordering: `-added`,
          },
        });
        context.commit(`GAMES_A_YEAR_AGO`, data);
      } catch (err) {
        console.log(err);
      }
    },
    async UpcomingGames(context) {
      try {
        const dateNow = new Date().toISOString().slice(0, 10);
        const date = new Date();
        date.setDate(date.getDate() + 7);
        date.setFullYear(date.getFullYear() - 0);
        const nextWeek = date.toISOString().slice(0, 10);
        // console.log(test);
        const data = await axios({
          method: `get`,
          url: `https://api.rawg.io/api/games`,
          params: {
            key: `7b6f7730d9af4cfebf2a880376bda74c`,
            dates: `${dateNow},${nextWeek}`,
            ordering: `-added`,
          },
        });
        context.commit(`UPCOMING_GAMES`, data);
      } catch (err) {
        console.log(err);
      }
    },
    // async getDataGame(context, payload){
    //   try {

    //   } catch (err) {
    //     console.log(err)
    //   }
    // }
  },
  modules: {},
});
