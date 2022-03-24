<template>
  <div
    @click="gotoDetail(card.id)"
    class="card bg-white rounded-lg shadow-xl mt-4 cursor-pointer"
  >
    <img class="rounded-t-lg" :src="card.imageUrl" alt="" />
    <div class="caption px-2 py-3 truncate">
      <span class="text-lg font-semibold">{{ card.title }}</span>
      <div class="progressbar w-full bg-slate-200 rounded-full h-3">
        <div class="bg-blue-400 rounded-full h-3" style="width: 25%"></div>
      </div>
      <div class="donation flex flex-row justify-between">
        <span>{{ collectedFunds }}</span>
        <span>{{ formatTarget }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardHomePage",
  props: ["card"],
  methods: {
    gotoDetail(id) {
      this.$store.dispatch("gotoDetail", id);
      this.$router.push({ name: "DetailPage" });
    },
  },
  computed: {
    formatTarget() {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(this.card.target);
    },
    collectedFunds() {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(this.card.collectedFunds);
    },
  },
};
</script>

<style>
</style>