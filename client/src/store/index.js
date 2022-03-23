import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chats:[],
    friends:[],
    roomId:false,
    posts:[],
    UserId:false
  },
  mutations: {
    FETCH_CHATS(state,chats){
      state.chats = chats
    },
    FETCH_FRIENDS(state,friends){
      state.friends = friends
    },
    CHANGE_ROOMID(state,roomId){
      state.roomId = roomId
    },
    FETCH_POSTS(state,posts){
      state.posts = posts
    }
  },
  actions: {
    async getAllPosts(context,id){
      try {
        const {data} = await axios({url:`http://localhost:3000/posts/${id}`})
        context.commit('FETCH_POSTS',data)
      } catch (error) {
        swal(error.response.data.message)
      }
    },
    async getAllRelations(context,id){
      try {
        const {data} = await axios({url:`http://localhost:3000/relations/${id}`})
        context.commit('FETCH_FRIENDS',data)
      } catch (error) {
        swal(error.response.data.message)
      }
    },
    
    
  },
  modules: {
  }
})
