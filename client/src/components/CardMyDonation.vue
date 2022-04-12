<template>
  <div class="card border-2 flex flex-row justify-between mb-4">
    <div class="left">
      <p>{{ changeDate }}</p>
      <p>{{ myDonation.nominal }}</p>
    </div>
    <div class="status bg-yellow-100 my-auto px-2">{{ myDonation.status }}</div>
    <div class="right my-auto">
      <p class="my-auto">{{ myDonation.Donation.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardMyDonation",
  props: ["myDonation"],
  computed: {
    changeDate() {
      return new Date(this.myDonation.updatedAt).toLocaleDateString("id-ID");
    },
  },
};
</script>

<style>
</style>