<template>
  <div class="flex flex-col min-h-screen w-full lg:flex-row">
    <div class="card w-1/2 bg-neutral text-neutral-content">
      <div class="card-body items-center text-center">
        <h2 class="card-title">About Me!</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
        <div class="card-actions justify-end"></div>
      </div>
    </div>
    <div class="divider lg:divider-horizontal"></div>
    <div class="card w-1/2 bg-neutral text-neutral-content">
      <div class="card-body items-center text-center">
        <figure class="px-10 pt-10">
          <img :src="qrCode" alt="QrCode" class="rounded-xl" />
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