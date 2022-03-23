<template>
  <div class="position-relative">
    <NavBar></NavBar>
    <div v-if="users.length" style="width:300px"  class="position-absolute top-20 end-0 container">
        <!-- <a v-for="item in users" :key="item.id" href="">{{item.name}}</a> -->
        <div v-for="item in users" :key="item.id">
            <a href="">{{item.name}}</a>
        </div>
    </div>
    <div class="container mt-3" >
      <div class="row">
        <div class="col-2">
          <SideBar></SideBar>
        </div>
        <div class="col-7">
          <div class="mb-3">
              <form action="">
                  <textarea class="w-100 form-control mb-1"></textarea>
                  <div class="d-flex flex-row">
                      <input type="file" class="form-control me-1">
                  <button type="submit" class="btn btn-primary">Post</button>
                  </div>
              </form>
              </div>
          <PostCard v-for="item in posts" :key="item.id" :data="item"></PostCard>
          <h1 v-if="posts.length === 0" class="text-muted mt-5">There is no post to show</h1>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import NavBar from "../components/NavBar.vue";
import PostCard from "../components/PostCard.vue";
export default {
  components: {
    NavBar,
    SideBar,
    PostCard,
  },
  created() {
    this.$store.dispatch("getAllRelations");
    this.$store.dispatch("getAllPosts");
    this.$store.dispatch("fetchNameAndId");
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    UserId() {
      return this.$store.state.UserId;
    },
    users(){
      return this.$store.state.users
    }
  },
};
</script>

<style scoped>
textarea {
  width: 300px;
  height: 150px;
}
</style>
