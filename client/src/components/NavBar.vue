<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Welcome to Public</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a @click.prevent="logout" class="nav-link" href="#">Logout</a>
          </li>
        </ul>
        <form class="d-flex">
          <!-- <div class="me-2"><h3 >Search</h3></div> -->
          <input v-model="name" @keyup="findUsers" class="form-control me-2 ml-3" type="search" placeholder="Search" aria-label="Search" />
          <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import swal from 'sweetalert'
export default {
  data(){
    return{
      name:''
    }
  },
  methods: {
    logout() {
      swal('logged out')
      localStorage.clear();
      this.$store.commit("FETCH_CHATS", false);
      this.$store.commit("FETCH_FRIENDS", false);
      this.$store.commit("CHANGE_ROOMID", false);
      this.$store.commit("FETCH_POSTS", false);
      this.$store.commit("FETCH_NAMEOFUSER", false);
      this.$store.commit("CHANGE_USERID", false);
      this.$router.push("/login");
    },
    findUsers(){
      // console.log(this.name);
      if(this.name){
        this.$store.dispatch('findAllUser',{search:this.name})
      }else{
        this.$store.commit('FETCH_USERS',false)
      }
      
    }
  },
};
</script>

<style></style>
