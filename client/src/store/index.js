import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chats: false,
    friends: false,
    roomId: false,
    posts: false,
    UserId: false,
    NameOfUser: false,
    users: false,
    postImg: false,
    friendRequests:false
  },
  mutations: {
    FETCH_CHATS(state, chats) {
      state.chats = chats
    },
    FETCH_FRIENDS(state, friends) {
      state.friends = friends
    },
    CHANGE_ROOMID(state, roomId) {
      state.roomId = roomId
    },
    FETCH_POSTS(state, posts) {
      state.posts = posts
    },
    FETCH_NAMEOFUSER(state, NameOfUser) {
      state.NameOfUser = NameOfUser
    },
    CHANGE_USERID(state, UserId) {
      state.UserId = UserId
    },
    FETCH_USERS(state, users) {
      state.users = users
    },
    CHANGE_POSTIMG(state, postImg) {
      state.postImg = postImg
    },
    FETCH_FRIENDREQUESTS(state, friendRequests) {
      state.friendRequests = friendRequests
    }
  },
  actions: {
    async getAllPosts(context) {
      try {
        const { data } = await axios({ url: `http://localhost:3000/posts`, method: 'GET', headers: { token: localStorage.getItem('token') } })
        context.commit('FETCH_POSTS', data)
      } catch (error) {
        swal(error.response.data.message)
      }
    },
    async getAllRelations(context) {
      try {
        const { data } = await axios({ url: `http://localhost:3000/relations`, method: 'GET', headers: { token: localStorage.getItem('token') } })
        context.commit('FETCH_FRIENDS', data)
      } catch (error) {
        swal(error.response.data.message)
      }
    },
    socket_receiveChats(context, data) {
      context.commit('FETCH_CHATS', data[0])
      context.commit('CHANGE_ROOMID', data[1])
    },
    async getAllMessage(context, ReceiverId) {
      await this._vm.$socket.client.emit('gettingAllMessage', context.state.UserId, ReceiverId, context.state.NameOfUser)
    },
    async sendingMessage(context, chat) {
      await this._vm.$socket.client.emit('sendMessage', context.state.roomId, context.state.UserId, chat)
    },
    googleLogin(context, token) {
      return axios({ url: `http://localhost:3000/users/googleSignIn`, method: 'POST', data: token })
    },
    async findAllUser(context, payload) {
      try {
        const { data } = await axios({ url: 'http://localhost:3000/users', params: payload })
        context.commit('FETCH_USERS', data)
      } catch (error) {
        swal(error.response.data.message)
      }
    },
    async fetchNameAndId(context) {
      try {
        const { data } = await axios({ url: `http://localhost:3000/name`, method: 'GET', headers: { token: localStorage.getItem('token') } })
        context.commit("CHANGE_USERID", data.UserId);
        context.commit("FETCH_NAMEOFUSER", data.name);
      } catch (error) {
        swal(error.response.data.message)
      }
    },
    facebookLogin(context, token) {
      return axios({ url: `http://localhost:3000/users/facebookSignIn`, method: 'POST', data: token })
    },
    async uploadPost(context, desc) {
      const formData = new FormData()
      formData.append('imgPost', context.state.postImg)
      formData.append('description', desc)
      const {data} = await axios.post('http://localhost:3000/posts',formData,{
        headers: { token: localStorage.getItem('token') } 
      })
      context.dispatch('broadcastPost',data.post)
    },
    socket_updatePosts(context,post){
      const posts = context.state.posts
      posts.unshift(post)
      context.commit('FETCH_POSTS',posts)
    },
    async broadcastPost(context,post){
      await this._vm.$socket.client.emit('broadcastPost',post,context.state.UserId)
    },
    socket_updateChat(context,chat){
      const chats = context.state.chats
      chats.unshift(chat)
      context.commit('FETCH_CHATS',chats)
    },
    async joinMyOwnRoom(context){
      await this._vm.$socket.client.emit('joinMyOwnRoom',context.state.UserId)
    },
    async joinMyFriendsRoom(context){
      const friendsIds = context.state.friends.map(e=>e.withId)
      await this._vm.$socket.client.emit('joinMyFriendsRoom',friendsIds)
    },
    socket_pendingRequest(context,pendingFriendRequest){
      if(pendingFriendRequest.toId === context.state.UserId){
        const friendRequests = context.state.friendRequests
        friendRequests.push({pendingFriendRequest})
        context.commit('FETCH_FRIENDREQUESTS',friendRequests)
      }
    },
    async sendFriendRequest(context,toId){
      await this._vm.$socket.client.emit('sendFriendRequest',context.state.NameOfUser,context.state.UserId,toId)
    }
    //fetch friend request
    //acc friend request
  },
  modules: {
  }
})
