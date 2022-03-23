import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chats:false,
    friends:[],
    roomId:false,
    posts:[],
    UserId:1,
    NameOfUser:'Rio'
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
    },
    FETCH_NAMEOFUSER(state,NameOfUser){
      state.NameOfUser = NameOfUser
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
    socket_receiveChat(context,data){
      context.commit('FETCH_CHATS',data[0])
      context.commit('CHANGE_ROOMID',data[1])
    },
    async getAllMessage(context,ReceiverId){
      await this._vm.$socket.client.emit('gettingAllMessage',context.state.UserId,ReceiverId,context.state.NameOfUser)
    },
    async sendingMessage(context,chat){
      await this._vm.$socket.client.emit('sendMessage',context.state.roomId,context.state.UserId,chat)
    }
    
  },
  modules: {
  }
})
