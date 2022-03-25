import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from "sweetalert2";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    pages: 1,
    chatHistories: [],
    favoriteAnimes: [],
    animes: [],
    animeDetail: {}
  },
  getters: {
  },
  mutations: {
    SOCKET_MESSAGESHISTORY(state, payload) {
      state.chatHistories = payload
    },
    SET_ANIMES(state, payload) {
      state.animes = payload
    },
    SET_FAVORITEANIMES(state, payload) {
      state.animes = payload
    },
    SET_ANIMEDETAIL(state, payload) {
      state.animeDetail = payload
    },
    SET_PAGES(state, payload) {
      state.pages = payload
    },
    SET_ISLOGIN(state, payload) {
      state.isLogin = payload
    },
  },
  actions: {
    async register(context, payload) {
      try {
        const { data } = await axios.post(
          "https://desolate-basin-45168.herokuapp.com/users/register",
          {
            email: payload.email,
            password: payload.password,
          }
        );
        swal.fire({
          icon: "success",
          title: `Account Created`,
          text: `${data.email}, Your Account Has Been Created!`,
        });
      } catch (error) {
        swal.fire({
          icon: "error",
          title: error.response.status,
          text: error.response.data.Error,
        });
      }
    },

    async login(context, payload) {
      try {
        const { data } = await axios.post(
          "https://desolate-basin-45168.herokuapp.com/users/login",
          {
            email: payload.email,
            password: payload.password,
          }
        );
        localStorage.access_token = data.access_token;
        context.commit("SET_ISLOGIN", true);

        swal.fire({
          icon: "success",
          title: `Login Succesful`,
          text: `Welcome Back!`,
        });

      } catch (error) {
        swal.fire({
          icon: "error",
          title: error.response.status,
          text: error.response.data.Error,
        });
      }
    },

    logout(context) {
      localStorage.clear();
      context.commit("SET_ISLOGIN", false);
    },

    async getAnimes(context, payload) {
      try {
        // console.log(payload);
        let url = `https://desolate-basin-45168.herokuapp.com/animes`;
        if (!payload.page) {
          url += `?page=1`;
        } else {
          url += `?page=${payload.page}`;
        }
        if (payload.q) {
          url += `&q=${payload.q}`;
        }
        if (payload.sfw) {
          url += `&sfw=true`;
        }
        if (payload.genres) {
          //! get genreId with https://api.jikan.moe/v4/genres/anime
          url += `&genres=${payload.genres}`;
        }
        if (payload.score) {
          url += `&score=${payload.score}`;
        }
        console.log(url, `URL`);

        // console.log(payload, `req query getAnimes`);
        const {data} = await axios.get(`${url}`, {
        });
        // context.commit("SET_PAGES", response.data.count);
        context.commit("SET_ANIMES", data.data);
      } catch (error) {
        console.log(error);
      }
    },

    async getTopAnimes(context) {
      try {
        // console.log(payload);
        let url = `https://desolate-basin-45168.herokuapp.com/animes/season`;
        
        console.log(url, `URL`);

        // console.log(payload, `req query getAnimes`);
        const {data} = await axios.get(`${url}`, {
        });
        // context.commit("SET_PAGES", response.data.count);
        context.commit("SET_ANIMES", data.data);
      } catch (error) {
        console.log(error);
      }
    },

    async getAnimeDetail(context, payload) {
      try {
        console.log(`masuk detail`);
        const { data } = await axios.get(
          `https://desolate-basin-45168.herokuapp.com/animes/${payload.animeId}`,
          {}
        );
        console.log(data, `SETANIMEDETAIL`);
        context.commit("SET_ANIMEDETAIL", data);
      } catch (error) {
        console.log(error);
      }
    },

    async sendMessage(_, payload) {
      await this._vm.$socket.client.emit("clientMessage", {
        message: payload.message.trim()
      })
      // SOCKET_MESSAGESHISTORY
    },

    async socket_messagesHistory(context, payload) {
      await context.commit("SOCKET_MESSAGESHISTORY", payload)
    }
  },
  modules: {
  }
})
