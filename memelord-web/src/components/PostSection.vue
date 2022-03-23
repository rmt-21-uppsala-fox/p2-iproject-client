<template>
  <div class="form-control bg-black text-white">
    <div class="row mb-5" v-for="item in postData" :key="item.id">
      <div class="col-3">
        <h2 v-html="item.caption"></h2>
        <br />
        <p v-html="item.Category.name">Category</p>
        <button class="btn btn-dark mt-3" @click="postDetail(item.id)">
          Show Details
        </button>
      </div>
      <div class="col-4">
        <img id="postImg" :src="item.imgUrl" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostSection",
  methods: {
    // postDetail(postId){
    // this is for post detail
    // }
  },
  computed: {
    postData() {
      return this.$store.state.postData;
    },
  },
};
</script>

<style scoped>
#postImg {
  max-width: 600px;
  max-height: 600px;
}
</style>
