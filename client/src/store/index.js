import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chats:false,
    friends:false,
    roomId:false,
    posts:false,
    UserId:false,
    NameOfUser:false,
    users:false
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
    },
    CHANGE_USERID(state,UserId){
      state.UserId = UserId
    },
    FETCH_USERS(state,users){
      state.users = users
    }
  },
  actions: {
    async getAllPosts(context){
      try {
        const {data} = await axios({url:`http://localhost:3000/posts`,method:'GET',headers:{token:localStorage.getItem('token')}})
        context.commit('FETCH_POSTS',data)
      } catch (error) {
        swal(error.response.data.message)
      }
    },
    async getAllRelations(context){
      try {
        const {data} = await axios({url:`http://localhost:3000/relations`,method:'GET',headers:{token:localStorage.getItem('token')}})
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
    },
    googleLogin(context,token){
      return axios({url:`http://localhost:3000/users/googleSignIn`,method:'POST',data:token})
    },
    async findAllUser(context,payload){
      try {
        const {data} = await axios({url:'http://localhost:3000/users',params:payload})
        context.commit('FETCH_USERS',data)
      } catch (error) {
        swal(error.response.data.message)
      }
    },
    async fetchNameAndId(context){
      try {
        const {data} = await axios({url:`http://localhost:3000/name`,method:'GET',headers:{token:localStorage.getItem('token')}})
        context.commit("CHANGE_USERID",data.UserId);
        context.commit("FETCH_NAMEOFUSER",data.name);
      } catch (error) {
        swal(error.response.data.message)
      }
    },
    facebookLogin(context,token){
      return axios({url:`http://localhost:3000/users/facebookSignIn`,method:'POST',data:token})
    }
    

    
  },
  modules: {
  }
})
