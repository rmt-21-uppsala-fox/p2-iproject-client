import Vue from "vue";
import Vuex from "vuex";
import axios from "@/api/axios";
import meme from "@/api/imgFlip";
import prev from "@/api/imgFlipPrev";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    imgFlipAPI: [],
    postData: [],
    isLogin: false,
    userId: 0,
    username: "",
    imgPreview: "",
    categoryData: [],
  },
  getters: {},
  mutations: {
    LOGIN_STATUS(state, data) {
      state.isLogin = data;
    },
    FETCH_POST(state, data) {
      state.postData = data;
    },
    USERNAME_COMMIT(state, data) {
      state.username = data;
    },
    USERID_COMMIT(state, data) {
      state.userId = data;
    },
    IMGFLIP_DATA(state, data) {
      state.imgFlipAPI = data;
    },
    COMMIT_PREVIEW(state, data) {
      state.imgPreview = data;
    },
    CATEGORY_DATA(state, data) {
      state.categoryData = data;
    },
  },
  actions: {
    loginCheck(context) {
      if (localStorage.access_token) {
        context.commit("LOGIN_STATUS", true);
        context.commit("USERNAME_COMMIT", localStorage.username);
        context.commit("USERID_COMMIT", localStorage.id);
      } else {
        context.commit("LOGIN_STATUS", false);
      }
    },
    async fetchAll(context) {
      const { data } = await axios({
        method: "get",
        url: "/meme/post/",
      });
      context.commit("FETCH_POST", data);
    },
    async doLogin(context, userData) {
      try {
        const { data } = await axios({
          method: "post",
          url: "/login",
          data: userData,
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("id", data.id);
        localStorage.setItem("username", data.username);
        context.commit("LOGIN_STATUS", true);
        context.commit("USERNAME_COMMIT", data.username);
        context.commit("USERID_COMMIT", data.id);
      } catch (error) {
        return error.response.data.message;
      }
    },
    async doLogout(context) {
      try {
        await axios({
          method: "get",
          url: "/logout",
        });
        localStorage.clear();
        context.commit("LOGIN_STATUS", false);
      } catch (error) {
        return error.response.data.message;
      }
    },
    async doRegister(context, userData) {
      try {
        await axios({
          method: "post",
          url: "/register",
          data: userData,
        });
      } catch (error) {
        return error.response.data.message;
      }
    },
    async fetchPreview(context, option) {
      try {
        const { data } = await prev({
          method: "post",
          data: option,
        });
        console.log(data, "<<<<<<<<<<<<<<");
        context.commit("COMMIT_PREVIEW", data.url);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchAPI(context) {
      const { data } = await meme({
        method: "get",
      });
      let data2 = [];
      data.data.memes.forEach((el) => {
        if (el.box_count === 2) {
          data2.push(el);
        }
      });
      context.commit("IMGFLIP_DATA", data2);
    },
    async fetchCategories(context) {
      const { data } = await axios({
        method: "get",
        url: "/meme/category",
      });
      context.commit("CATEGORY_DATA", data);
    },
    async UploadImage(context, data) {
      try {
        let formData = new FormData();
        formData.append("caption", data.caption);
        formData.append("file", data.file);
        formData.append("categoryId", data.categoryId);
        let config = {
          headers:{access_token: localStorage.access_token,}, 
          header: {
            "Content-Type": "multipart/form-data",
          },
        };

        await axios.post("/meme/upload", formData, config);
      } catch (error) {
        return error
      }
    },
  },
});
