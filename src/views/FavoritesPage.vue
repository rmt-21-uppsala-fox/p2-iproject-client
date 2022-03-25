<template>
  <div class="px-lg-5" style="background-color: #bdc3c7">
    <div class="row">
      <favoriteCardPage
        v-for="favorite in favoriteAnimes"
        :key="favorite.id"
        :favorite="favorite"
      ></favoriteCardPage>
    </div>
  </div>
</template>

<script>
import favoriteCardPage from "../components/favoriteCardPage.vue";
export default {
  name: "FavoritesPage",
  components: {
    favoriteCardPage,
  },
  async created() {
    if (localStorage.access_token) {
      this.$store.commit("SET_ISLOGIN", true)
    }
    // console.log(`MASUK`);
    await this.$store.dispatch("getFavoriteAnimes");
    
  },
  computed: {
    favoriteAnimes() {
      return this.$store.state.favoriteAnimes;
    },
  },
};
</script>