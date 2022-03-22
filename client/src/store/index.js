import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allGames: [],
  },
  getters: {},
  mutations: {
    SHOW_ALL_GAMES(state, payload) {
      state.allGames = payload.data.results;
    },
  },
  actions: {
    async ShowAllGames(context) {
      try {
        const dateNow = new Date().toISOString().slice(0, 10);
        const date = new Date();
        date.setDate(date.getDate() - 6);
        date.setFullYear(date.getFullYear() - 1);
        const aYearBefore = date.toISOString().slice(0, 10);
        // console.log(test);
        const data = await axios({
          method: `get`,
          url: `https://api.rawg.io/api/games`,
          params: {
            key: `7b6f7730d9af4cfebf2a880376bda74c`,
            date: `${dateNow},${aYearBefore}`,
          },
        });
        context.commit(`SHOW_ALL_GAMES`, data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
