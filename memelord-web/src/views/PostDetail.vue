<template>
  <div class="card bg-dark text-white container">
    <img class="card-img" :src="postData.imgUrl" />
    <div class="card-img">
      <h5 class="card-title">{{ postData.caption }}</h5>
      <p>By: {{ postData.User.username }}</p>
      <p>Category: {{ postData.Category.name }}</p>
    </div>
    <CommentSection></CommentSection>
  </div>
</template>

<script>
import CommentSection from "@/components/CommentSection.vue";
export default {
  name: "PostDetail",
  components: {
    CommentSection,
  },
  computed: {
    postData() {
      return this.$store.state.postDetail.postDetail;
    },
    postId() {
      return this.$store.state.postId;
    },
  },
  created() {
    this.$store.dispatch("fetchPostDetail", this.postId);
  },
};
</script>
