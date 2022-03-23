import Vue from "vue";
import Vuex from "vuex";
import local from "../../apis/axios";
import {
	auth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "../../firebase/firebase-config";

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
				const response = await local({
					method: "GET",
					url: `https://kitsu.io/api/edge/manga?page%5Blimit%5D=12&page%5Boffset%5D=0"`,
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
				const response = await local({
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

		async registerHandler(context, payload) {
			try {
				const response = await createUserWithEmailAndPassword(
					auth,
					payload.email,
					payload.password
				);
				console.log(response);
				return response;
			} catch (err) {
				console.log(err);
			}
		},
		async loginHandler(context, payload) {
			try {
				const response = await signInWithEmailAndPassword(
					auth,
					payload.email,
					payload.password
				);
				return response;
			} catch (err) {
				console.log(err);
			}
		},
	},
	modules: {},
});
