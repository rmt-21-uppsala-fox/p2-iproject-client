<template>
  <div class="container bg-black text-white">
    <form @submit.prevent="Comment" v-if="isLogin">
      <textarea
        v-model="comment"
        class="bg-dark form-control text-white"
        type="text"
      ></textarea>
      <button type="submit" class="btn btn-dark">Comment</button>
    </form>
    <div class="container-sm mt-3">
      <h2>Comment Section</h2>
      <div v-for="item in commentData" :key="item.id">
        <div>
          <h6>By: {{ item.User.username }}</h6>
        </div>
        <div>
          <p>comment: {{ item.comment }}</p>
        </div>
        <div>
          <button @click.prevent="activeEdit(item.id)">edit</button>
          <br />
          <button @click.prevent="deleteComment(item.id)">delete</button>
        </div>
      </div>
      <form v-if="this.edit" @submit.prevent="editComment">
        <textarea v-model="editCommentData" class="form-control"></textarea>
        <button type="submit">submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentSection",
  data() {
    return {
      comment: "",
      editCommentData: "",
      edit: false,
      commentId: 0,
    };
  },
  methods: {
    async Comment() {
      const error = await this.$store.dispatch("doComment", this.comment);
      if (error) {
        console.log(error);
      }
      this.$store.dispatch("fetchPostDetail");
    },
    activeEdit(id) {
      if (this.edit === true) {
        this.edit = false;
      } else {
        this.edit = true;
      }
      this.commentId = id;
    },
    async editComment() {
      const payload = {
        comment: this.editCommentData,
        commentId: this.commentId,
      };
      await this.$store.dispatch("editComment", payload);
    },
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
    commentData() {
      return this.$store.state.postDetail.comments;
    },
  },
};
</script>
