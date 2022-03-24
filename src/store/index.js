import Vue from "vue";
import Vuex from "vuex";
import local from "../../apis/axios";
import {
	db,
	auth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "../../firebase/firebase-config";
import { doc, getDocs, setDoc, collection, where } from "firebase/firestore";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		allManga: [],
		mangaById: {},
		favorites: [],
		isLogin: false,
	},
	getters: {},
	mutations: {
		ALL_MANGA(state, payload) {
			state.allManga = payload;
		},
		MANGA_BY_ID(state, payload) {
			state.mangaById = payload;
		},
		ALL_FAVORITE(state, payload) {
			state.favorites = payload;
		},
		IS_LOGIN(state, payload) {
			state.isLogin = payload;
		},
	},
	actions: {
		async getAllManga(context, payload) {
			try {
				console.log(payload);
				const response = await local({
					method: "GET",
					url: `/manga`,
					params: payload,
					headers: {
						Content_Type: "application/vnd.api+json",
					},
				});
				context.commit("ALL_MANGA", response.data);
			} catch (err) {
				console.log(err.response.data);
			}
		},

		async getMangaById(context, id) {
			try {
				console.log(id);
				const response = await local({
					method: "GET",
					url: `/manga/${id}`,
					headers: {
						Content_Type: "application/vnd.api+json",
					},
				});
				context.commit("MANGA_BY_ID", response.data);
			} catch (err) {
				console.log(err.response.data);
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
				console.log(err.response.data);
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
			const bookmarkId = UserId + "here" + id;
			await local({
				method: "get",
				url: `/authenticate`,
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			});
			const response = await setDoc(doc(db, "Favorites", bookmarkId), {
				UserId,
				MangaId: id,
			});
			return response;
		},

		async getFavorite(context) {
			try {
				await local({
					method: "get",
					url: `/authenticate`,
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				});
				const UserId = localStorage.getItem("uid");

				const data = collection(db, "Favorites");

				const response = await getDocs(data, where("UserId", "==", UserId));

				const favorites = [];
				response.docs.forEach(async (el) => {
					try {
						el.data();
						let manga = await local({
							method: "GET",
							url: `/manga/${el.data().MangaId}`,
						});
						console.log(manga.data);
						favorites.push(manga.data);
					} catch (err) {
						console.log(err);
					}
				});
				context.commit("ALL_FAVORITE", favorites);
			} catch (err) {
				console.log(err.response.data);
			}
		},
	},
	modules: {},
});
