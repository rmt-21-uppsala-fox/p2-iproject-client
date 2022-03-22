<template>
  <div class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
    <!--Nav-->
    <NavBar></NavBar>

    <BannerComp></BannerComp>

    <router-view />

    <PageFooter></PageFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/NavBar.vue";
import BannerComp from "../components/BannerComp.vue";
import PageFooter from "../components/PageFooter.vue";
export default {
  name: "HomePage",
  components: {
    NavBar,
    BannerComp,
    PageFooter,
  },
  methods: {
    setIsLogin(payload) {
      this.$store.commit("SET_ISLOGIN", payload);
    },
  },
  created() {
    if (localStorage.access_token) this.setIsLogin(true);
  },
};
</script>
