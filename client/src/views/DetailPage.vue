<template>
  <main class="">
    <img class="relative" :src="detailCard.imageUrl" alt="" />
    <div
      @click="backtoHome"
      class="absolute top-3 left-3 text-xl cursor-pointer text-slate-700"
    >
      <i
        class="
          fa-solid fa-arrow-left
          bg-white
          rounded-full
          px-2
          py-2
          bg-opacity-50
        "
      ></i>
    </div>
    <div class="container mx-auto px-4 sm:p-0">
      <div class="caption py-3">
        <span class="text-xl font-semibold">{{ detailCard.title }}</span>
        <br />
        <span>300 Donasi</span>
        <div class="progressbar w-full bg-slate-200 rounded-full h-3 mt-5">
          <div class="bg-blue-400 rounded-full h-3" style="width: 25%"></div>
        </div>
        <div class="donation flex flex-row justify-between mt-5">
          <span>{{
            new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(detailCard.collectedFunds)
          }}</span>
          <span>{{
            new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(detailCard.target)
          }}</span>
        </div>
      </div>
      <button
        v-if="!invoice"
        @click="donationNow(detailCard.id)"
        class="
          px-4
          py-2
          bg-blue-400
          rounded-md
          text-white
          font-bold
          tracking-wide
          hover:bg-blue-500
          trasition
          duration-300
        "
      >
        Donasi sekarang
      </button>
      <a
        v-else
        :href="invoice"
        class="
          px-4
          py-2
          bg-blue-400
          rounded-md
          text-white
          font-bold
          tracking-wide
          hover:bg-blue-500
          trasition
          duration-300
        "
      >
        Bayar
      </a>
      <div class="description mt-7">
        <h1 class="text-xl font-semibold mb-2">Cerita</h1>
        <p class="text-justify">
          {{ detailCard.story }}
        </p>
      </div>
      <div class="author my-7">
        <h1 class="text-xl font-semibold mb-4">Informasi Penggalangan Dana</h1>
        <div class="card border-2 p-4 rounded">
          <span class="font-medium">Penggalang Dana</span>
          <div class="flex flex-row mt-5">
            <img
              class="w-14 h-14 object-cover mr-5"
              src="https://cdn-2.tstatic.net/makassar/foto/bank/images/ghozali-everday.jpg"
              alt=""
            />
            <div class="name">
              <h1 class="font-semibold">
                Admin {{ detailCard.AdminId }}
                <i class="fa-solid fa-circle-check text-blue-600"></i>
              </h1>
              <span class="text-xs text-slate-600 tracking-wide"
                >Admin {{ detailCard.AdminId }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "DetailPage",
  methods: {
    backtoHome() {
      this.$router.push({ name: "HomePage" });
    },
    donationNow(id) {
      this.$store.dispatch("donationNow", id);
    },
  },
  computed: {
    detailCard() {
      return this.$store.state.detailCard;
    },
    invoice() {
      return this.$store.state.invoice;
    },
  },
};
</script>

<style>
</style>