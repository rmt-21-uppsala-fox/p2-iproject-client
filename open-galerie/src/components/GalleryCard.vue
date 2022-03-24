<template>
  <div class="cardGallery" @click="gotoGallery(cardData.id)">
    <p>WalletID:</p>
    <h4 style="word-break: break-all; white-space: normal; margin-top: -30px">
      {{ cardData.wallet }}
    </h4>
    <h1 style="word-break: break-all; white-space: normal; margin-top: -30px">
      {{ jumlah }} NFT Images
    </h1>
  </div>
</template>

<script>
export default {
  name: "GalleryCard",
  props: ["cardData"],
  methods: {
    gotoGallery(id) {
      console.log(id);
      this.$router.push({ name: "gallery", params: { id: id } });
    },
  },
  computed: {
    jumlah() {
      var count = 0;
      Object.keys(this.cardData).forEach((key) => {
        if (key.indexOf("image") === 0 && this.cardData[key] !== null) {
          count++;
        }
      });
      return count;
    },
  },
};
</script>

<style>
</style>