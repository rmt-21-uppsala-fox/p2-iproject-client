import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		allManga: [],
		mangaById: {},
	},
	getters: {},
	mutations: {
		ALL_MANGA(state, payload) {
			state.allManga = payload;
		},
		MANGA_BY_ID(state, payload) {
			state.mangaById = payload;
		},
	},
	actions: {
		async getAllManga(context) {
			try {
				const response = await axios({
					method: "GET",
					url: "https://kitsu.io/api/edge/manga",
					headers: {
						Content_Type: "application/vnd.api+json",
					},
				});
				context.commit("ALL_MANGA", response.data.data);
			} catch (err) {
				console.log(err);
			}
		},
		async getMangaById(context, id) {
			try {
				const response = await axios({
					method: "GET",
					url: `https://kitsu.io/api/edge/manga/${id}`,
					headers: {
						Content_Type: "application/vnd.api+json",
					},
				});
				context.commit("MANGA_BY_ID", response.data.data);
			} catch (err) {
				console.log(err);
			}
		},
	},
	modules: {},
});
