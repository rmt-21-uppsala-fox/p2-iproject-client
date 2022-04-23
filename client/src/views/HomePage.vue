<template>
  <div class="position-relative">
    <NavBar @profileClicked="profileClickedFunct"></NavBar>
    <div v-click-outside="onClickOutside" v-if="profileClicked" id="profile" class="text-start border b-1 rounded bg-light">
      <div @click.prevent="toProfilePage" style="cursor: pointer" class="border b-1 option text-dark">
        My Profile
      </div>
      <div style="cursor: pointer" class="border b-1 option text-dark">
        Friend Requests
      </div>
      <div style="cursor: pointer" class="border b-1 option text-dark">
        My Posts
      </div>
    </div>

    <div v-if="users.length" style="width: 300px" class="position-absolute top-20 end-0 container">
      <!-- <a v-for="item in users" :key="item.id" href="">{{item.name}}</a> -->
      <div style="width: 190px" class="text-start ms-5 border bg-light" v-for="item in users" :key="item.id">
        <a style="text-decoration: none" class="text-dark" href="">{{ item.name }}</a>
      </div>
    </div>
    <div class="container mt-3">
      <div class="row">
        <div class="col-2">
          <SideBar></SideBar>
        </div>
        <div class="col-7">
          <div class="mb-3">
            <form @submit.prevent="post">
              <textarea v-model="desc" placeholder="write your post here" class="w-100 mb-1"></textarea>
              <div class="d-flex flex-row">
                <input v-if="uploadReady" @change="previewFiles" ref="image" type="file" class="form-control me-1" />
                <button type="submit" class="btn btn-primary">Post</button>
              </div>
            </form>
          </div>
          <PostCard  v-for="item in posts" :key="item.id" :data="item"></PostCard>
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
import vClickOutside from "v-click-outside";
export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  components: {
    NavBar,
    SideBar,
    PostCard,
  },
  data() {
    return {
      desc: "",
      uploadReady: true,
      profileClicked: false,
    };
  },
  async created() {
    await this.$store.dispatch("getAllRelations");
    await this.$store.dispatch("getAllPosts");
    await this.$store.dispatch("fetchNameAndId");
    await this.$store.dispatch("joinMyOwnRoom");
    await this.$store.dispatch("joinMyFriendsRoom");
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    UserId() {
      return this.$store.state.UserId;
    },
    users() {
      return this.$store.state.users;
    },

    // post(){

    // }
  },
  methods: {
    previewFiles(e) {
      // console.log(e.target.files);
      this.$store.commit("CHANGE_POSTIMG", e.target.files[0]);
      // console.log(this.$store.state.postImg);
    },
    post() {
      // this.$refs.fileupload=null
      this.$store.dispatch("uploadPost", this.desc);
      this.clearInputFile();
      this.dataReset();
    },
    clearInputFile() {
      this.uploadReady = false;
      this.$nextTick(() => {
        this.uploadReady = true;
      });
    },
    profileClickedFunct() {
      if (!this.profileClicked) {
        this.profileClicked = true;
      } else {
        this.profileClicked = false;
      }
    },
    dataReset() {
      this.desc = "";
      this.profileClicked = false;
      this.$store.commit("CHANGE_POSTIMG", false);
    },
    onClickOutside() {
      // console.log("Clicked outside. Event: ", event);
      this.profileClicked = false
    },
    toProfilePage(){
      this.profileClicked = false
      this.$router.push('/profile')
    }
  },
};
</script>

<style scoped>
textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
}

#profile {
  width: 150px;
  position: absolute;
  top: 40px;
  right: 10px;
  left: 325px;
}

.option:hover {
  background-color: #b5dff0;
}
</style>
