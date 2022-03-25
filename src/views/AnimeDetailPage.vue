<template>
  <div>
    <h4>{{ animeDetail.data.title }}</h4>
    <div class="d-flex flex-column">
      <div class="d-flex container mt-4 media">
        <img
          class="poster mt-3 mb-3"
          :src="animeDetail.data.images.jpg.image_url"
          alt=""
        />
        <div class="d-flex align-items-center justify-content-center w-100">
          <iframe
            max-height="500"
            :src="animeDetail.data.trailer.embed_url"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <div class="mt-3">
      <p>Synopsis : {{ animeDetail.data.synopsis }}</p>
      <p>Rating : {{ animeDetail.data.score }}</p>
    </div>
    <div class="">
      <div class="">
        <p class="">Discussion</p>
      </div>
      <div class="">
        <div class="">
          <form @submit.prevent="sendMessage">
            <input
              class=""
              type="text"
              v-model="message"
              placeholder="Message"
            />
            <input
              class=""
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimeDetailPage",
  data() {
    return {
      message: "",
    };
  },
  created() {
    // this.qrCode();
  },
  computed: {
    animeDetail() {
      return this.$store.state.animeDetail;
    },
    chatHistories(){
      return this.$store.state.chatHistories
    },
  },
  methods: {
    async sendMessage() {
      await this.$store.dispatch("sendMessage", {message: this.message});
      console.log("INI MESSAGE")
      this.message = ''
    },
  }
};
</script>

<style>
.poster {
  max-height: 500px;
  max-width: 350px;
}
.media {
  background: #000;
}
</style>