<template>
  <div>
    <NavBar></NavBar>
    <div class="container mt-3">
      <div class="row">
        <div class="col-2">
          <SideBar></SideBar>
        </div>
        <div class="col-7">
          <div class="mb-3">
              <textarea class="w-100 form-control"></textarea>
              </div>
          <PostCard v-for="item in posts" :key="item.id" :data="item"></PostCard>
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
    this.$store.dispatch("getAllRelations", this.UserId);
    this.$store.dispatch("getAllPosts", this.UserId);
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    UserId() {
      return this.$store.state.UserId;
    },
  },
};
</script>

<style scoped>
textarea {
  width: 300px;
  height: 150px;
}
</style>
