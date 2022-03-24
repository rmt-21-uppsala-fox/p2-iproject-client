<template>
  <!-- mydonation -->
  <div class="container px-4 relative">
    <span
      @click="$router.push({ name: 'HomePage' })"
      class="absolute top-5 bg-slate-100 px-2 rounded"
      >Back</span
    >
    <h1 class="text-center mb-8 pt-10 font-semibold">Riwayat donasi saya</h1>

    <card-my-donation
      v-for="myDonation in myDonations"
      :key="myDonation.id"
      :myDonation="myDonation"
    ></card-my-donation>
    <!-- card -->
    <!-- <div class="card border-2 flex flex-row justify-between mb-4">
      <div class="left">
        <p>22/12/2022</p>
        <p>Rp. 10,000,00</p>
      </div>
      <div class="status bg-yellow-100 my-auto px-2">pending</div>
      <div class="right my-auto">
        <p class="my-auto">Bantu sesama</p>
      </div>
    </div> -->
    <!-- endcard -->
  </div>
  <!-- mydonation -->
</template>

<script>
import CardMyDonation from "../components/CardMyDonation.vue";
export default {
  name: "MyDonationPage",
  components: {
    CardMyDonation,
  },
  methods: {
    fetchMyDonation() {
      this.$store.dispatch("fetchMyDonation");
    },
  },
  computed: {
    myDonations() {
      return this.$store.state.myDonation;
    },
  },
  created() {
    this.fetchMyDonation();
  },
};
</script>

<style>
</style>