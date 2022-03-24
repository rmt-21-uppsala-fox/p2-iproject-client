<template>
  <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
    <div class="bg-white rounded shadow-sm">
      <img
        :src="anime.images.jpg.image_url"
        style="max-height: 500px"
        class="img-fluid card-img-top"
      />
      <div class="p-4">
        <h5><a href="#" class="text-dark">{{anime.title}}</a></h5>
        <p class="small text-muted mb-0 overflow-auto" style="height: 110px">
          {{anime.synopsis}}
        </p>
        <div
          class="
            d-flex
            align-items-center
            justify-content-center
            rounded-pill
            bg-light
            px-3
            py-2
            mt-4
          "
        >
          <a class="btn btn-primary" @click.prevent="animeDetail(anime.mal_id)">See Detail</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "animeCard",
  props: ["anime"],
  methods: {
    async animeDetail(animeId) {
      try {
        await this.$store.dispatch("getAnimeDetail", { animeId });

        this.$router.push({ name: "AnimeDetail" });
      } catch (error) {
        console.log(error.response.data);
      }
    },
  },
};
</script>

<style>
</style>