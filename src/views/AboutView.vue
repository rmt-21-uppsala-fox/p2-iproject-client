<template>
  <div class="flex flex-col min-h-screen w-full lg:flex-row">
    <div class="card w-1/2 bg-neutral text-neutral-content">
      <div class="card-body items-center text-center">
        <h2 class="card-title">About Me!</h2>
        <p>We are using cookies for no reason.</p>
        <div class="card-actions justify-end"></div>
      </div>
    </div>
    <div class="divider lg:divider-horizontal"></div>
    <div class="card w-1/2 bg-neutral text-neutral-content">
      <div class="card-body items-center text-center">
        <figure class="px-10 pt-10">
          <img
            :src="qrCode"
            alt="QrCode"
            class="rounded-xl"
          />
        </figure>
      </div>
      <div class="card-body items-center text-center">
        <h2 class="card-title btn btn-base">Scan Me!</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  created() {
    this.$store.dispatch("generateQrCode");
  },
  computed: {
    qrCode() {
      return this.$store.state.qrCode;
    },
  },
};
</script>

<style>
</style>