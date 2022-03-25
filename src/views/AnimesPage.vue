<template>
  <div class="px-lg-5" style="background-color: #bdc3c7">
    <div class="row">
      <animeCard
        v-for="anime in animes"
        :key="anime.mal_id"
        :anime="anime"
      ></animeCard>
    </div>
  </div>
</template>

<script>
import animeCard from "../components/animeCard.vue";
export default {
  name: "AnimePage",
  components: {
    animeCard,
  },
  async created() {
    // console.log(`MASUK`);
    if (localStorage.access_token) {
      this.$store.commit("SET_ISLOGIN", true)
    }
    await this.$store.dispatch("getTopAnimes");
  },
  computed: {
    animes() {
      return this.$store.state.animes;
    },
  },
  methods: {

  }
};
</script>

<style>
</style>