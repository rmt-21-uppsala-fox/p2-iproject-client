import router from "@/router";
import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import swal from "sweetalert";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    leagues: [
      {
        id: 1,
        name: "Premier League",
        description:
          "The Premier League, also known exonymously as the English Premier League or the EPL (legal name: The Football Association Premier League Limited), is the top level of the English football league system. Contested by 20 clubs, it operates on a system of promotion and relegation with the English Football League (EFL).",
        image:
          "https://banner2.cleanpng.com/20180601/plw/kisspng-premier-league-england-national-football-team-live-5b10ebe5a94620.9186064015278356216934.jpg",
      },
      {
        id: 2,
        name: "Serie A",
        description:
          "The Serie A , also called Serie A TIM for sponsorship reasons, is a professional league competition for football clubs located at the top of the Italian football league system and the winner is awarded the Scudetto and the Coppa Campioni d'Italia.",
        image:
          "https://logosvector.net/wp-content/uploads/2012/12/serie-a-vector-logo.png",
      },
      {
        id: 3,
        name: "La Liga",
        description:
          "The Campeonato Nacional de Liga de Primera División, commonly known simply as Primera División in Spain, and as La Liga in English-speaking countries and officially as LaLiga Santander for sponsorship reasons, stylized as LaLiga, is the men's top professional football division of the Spanish football league system.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LaLiga_Santander_logo_%28stacked%29.svg/1200px-LaLiga_Santander_logo_%28stacked%29.svg.png",
      },
    ],
    eplClubs: [],
    spaClubs: [],
    itaClubs: [],
    eplTop: [],
    spaTop: [],
    itaTop: [],
    chats: [],
    header: "",
    currentuser: "",
    photos: [],
    vids: [],
    favLeague: "",
    isLogin: false,
  },
  getters: {},
  mutations: {
    SET_HEADER(state, payload) {
      state.header = payload;
    },
    SET_EPL(state, payload) {
      state.eplClubs = payload;
    },
    SET_SPA(state, payload) {
      state.spaClubs = payload;
    },
    SET_ITA(state, payload) {
      state.itaClubs = payload;
    },
    SET_EPLTOP(state, payload) {
      state.eplTop = payload;
    },
    SET_SPATOP(state, payload) {
      state.spaTop = payload;
    },
    SET_ITATOP(state, payload) {
      state.itaTop = payload;
    },
    SET_CURRENTUSER(state, payload) {
      console.log(payload, "<<< ini di set");
      state.currentuser = payload;
    },
    SET_CHAT(state, payload) {
      state.chats = payload;
    },
    SET_VID(state, payload) {
      state.vids = payload;
    },
    SET_PHOTOS(state, payload) {
      state.photos = payload;
    },
    SET_FAV(state, payload) {
      state.favLeague = payload;
    },
    SET_ISLOGIN(state, payload) {
      state.isLogin = payload;
    },
  },
  actions: {
    socket_connect(context) {
      context.commit("SET_CHAT", []);
      console.log("connected", this._vm.$socket);
    },
    socket_disconnect(context) {
      context.commit("SET_CHAT", []);
      console.log("disconnected", this._vm.$socket);
    },
    socket_messageFromServer(context, payload) {
      context.commit("SET_CHAT", payload);
      console.log("customEventFromServer", payload);
    },
    sendChatToServer(_, payload) {
      console.log(payload);
      this._vm.$socket.client.emit("chatFromClient", {
        user: localStorage.getItem("name"),
        message: payload,
      });
    },
    async claimFav(context, payload) {
      try {
        const access_token = localStorage.getItem("access_token");
        const response = await axios({
          method: "POST",
          url: "https://soccer-supreme-app.herokuapp.com/myfav",
          headers: { access_token },
          data: payload,
        });
        console.log(response.data);
        context.commit("SET_FAV", response.data.leagueName);
        router.push("/landing");
      } catch (err) {
        console.log(err);
      }
    },
    async findFav(context) {
      try {
        const access_token = localStorage.getItem("access_token");
        const response = await axios({
          method: "GET",
          url: "https://soccer-supreme-app.herokuapp.com/myfav",
          headers: { access_token },
        });
        console.log(response.data);
        if (!response.data) {
          router.push("/");
        } else {
          context.commit("SET_FAV", response.data);

          router.push("/landing");
        }
      } catch (err) {
        console.log(err);
      }
    },
    async getEplTable(context) {
      try {
        const access_token = localStorage.getItem("access_token");
        const response = await axios({
          method: "GET",
          url: "https://soccer-supreme-app.herokuapp.com/epl",
          headers: { access_token },
        });
        console.log(response.data);
        context.commit("SET_EPL", response.data.teams);
        context.commit("SET_HEADER", response.data.competition.name);
      } catch (err) {
        console.log(err);
      }
    },
    async getSPATable(context) {
      try {
        const access_token = localStorage.getItem("access_token");
        const response = await axios({
          method: "GET",
          url: "https://soccer-supreme-app.herokuapp.com/laliga",
          headers: { access_token },
        });
        console.log(response.data);
        context.commit("SET_SPA", response.data.teams);
        context.commit("SET_HEADER", response.data.competition.name);
      } catch (err) {
        console.log(err);
      }
    },
    async getITATable(context) {
      try {
        const access_token = localStorage.getItem("access_token");
        const response = await axios({
          method: "GET",
          url: "https://soccer-supreme-app.herokuapp.com/seriea",
          headers: { access_token },
        });
        console.log(response.data);
        context.commit("SET_ITA", response.data.teams);
        context.commit("SET_HEADER", response.data.competition.name);
      } catch (err) {
        console.log(err);
      }
    },
    async getEplTop(context) {
      try {
        const access_token = localStorage.getItem("access_token");
        const response = await axios({
          method: "GET",
          url: "https://soccer-supreme-app.herokuapp.com/epltop",
          headers: { access_token },
        });
        console.log(response.data);
        context.commit("SET_EPLTOP", response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async getSPATop(context) {
      try {
        const access_token = localStorage.getItem("access_token");
        const response = await axios({
          method: "GET",
          url: "https://soccer-supreme-app.herokuapp.com/laligatop",
          headers: { access_token },
        });
        console.log(response.data);
        context.commit("SET_SPATOP", response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async getITATop(context) {
      try {
        const access_token = localStorage.getItem("access_token");
        const response = await axios({
          method: "GET",
          url: "https://soccer-supreme-app.herokuapp.com/serieatop",
          headers: { access_token },
        });
        console.log(response.data);
        context.commit("SET_ITATOP", response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async register(context, payload) {
      try {
        const response = await axios({
          method: "POST",
          url: "https://soccer-supreme-app.herokuapp.com/register",
          data: {
            email: payload.email,
            name: payload.name,
            password: payload.password,
          },
        });
        console.log(response.data);
        router.push("/login");
        swal("Welcome", "Success register", "success");
      } catch (err) {
        console.log(err);
        swal("Error", err.message, "error");
      }
    },
    async login(context, payload) {
      try {
        const response = await axios({
          method: "POST",
          url: "https://soccer-supreme-app.herokuapp.com/login",
          data: {
            email: payload.email,
            password: payload.password,
          },
        });
        console.log(response.data);
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("id", response.data.id);
        let name = localStorage.getItem("name");
        context.commit("SET_CURRENTUSER", name);
        context.commit("SET_ISLOGIN", true);
        this.dispatch("findFav");
        swal("Welcome", "Success login", "success");
        if (this.state.favLeague != "") {
          router.push("/landing");
        } else router.push("/");
      } catch (err) {
        console.log(err);
        swal("Error", err.message, "error");
      }
    },
    async googleSignIn(context, payload) {
      try {
        let googleUser = payload;
        const id_token = googleUser.getAuthResponse().id_token;
        const response = await axios.post(
          "https://soccer-supreme-app.herokuapp.com/authGoogle",
          { id_token }
        );
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("id", response.data.id);
        context.commit("SET_ISLOGIN", true);
        swal("Welcome", "Success login", "success");
        router.push("/landing");
      } catch (err) {
        console.log(err);
        swal("Error", err.message, "error");
      }
    },
    async sendEmail(context, payload) {
      try {
        const response = await axios({
          method: "POST",
          url: "https://soccer-supreme-app.herokuapp.com/sendReset",
          data: {
            email: payload.email,
          },
        });
        localStorage.setItem("id", response.data.id);
        swal("Email sent", `email sent to ${payload.email}`, "success");
        router.push("/login");
      } catch (err) {
        console.log(err);
        swal("Error", err.message, "error");
      }
    },
    async changePassword(context, payload) {
      try {
        let id = localStorage.getItem("id");
        await axios({
          method: "PATCH",
          url: "https://soccer-supreme-app.herokuapp.com/changePassword",
          data: {
            password: payload.password,
            id,
          },
        });
        swal("OK", "Password changed", "success");
        router.push("/login");
      } catch (err) {
        console.log(err);
        swal("Error", err.message, "error");
      }
    },
    async getCarousel(context) {
      try {
        const access_token = localStorage.getItem("access_token");
        const response = await axios({
          method: "GET",
          url: "https://soccer-supreme-app.herokuapp.com/carousel",
          headers: { access_token },
        });
        console.log(response.data);
        context.commit("SET_PHOTOS", response.data.image);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
