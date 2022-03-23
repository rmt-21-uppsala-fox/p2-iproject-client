import Vue from "vue";
import Vuex from "vuex";
import local from "../../apis/axios";
import {
	db,
	collection,
	auth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "../../firebase/firebase-config";
import { doc, setDoc } from "firebase/firestore";

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
				console.log(response.user.uid);
				await setDoc(doc(db, "Users", response.user.uid), {
					email: payload.email,
					password: payload.password,
				});
				return response;
			} catch (err) {
				console.log(err);
			}
		},

		async loginHandler(context, payload) {
			const response = await signInWithEmailAndPassword(
				auth,
				payload.email,
				payload.password
			);
			localStorage.setItem("uid", response.user.uid);
			localStorage.setItem("token", response.user.accessToken);
			return response;
		},
		async postFavorite(constext, id) {
			const UserId = localStorage.getItem("uid");
			console.log(`masuk`, id);
			const bookmarkId = UserId + "here" + id;
			const response = await setDoc(doc(db, "Favorites", bookmarkId), {
				UserId,
				MangaId: id,
			});
			return response;
		},

		async getFavorite() {
			try {
				const UserId = localStorage.getItem("uid");
				console.log(UserId);
			} catch (err) {
				console.log(err);
			}
		},
	},
	modules: {},
});
