<template>
  <div>
    <header class="bg-blue-400 text-white sticky top-0">
      <div class="container mx-auto flex flex-row px-4 sm:p-0 py-5">
        <div class="mr-5 my-auto">
          <span class="text-2xl font-semibold">KitaBantu</span>
        </div>
        <form action="" class="w-full my-auto">
          <input
            type="search"
            class="text-lg py-1 px-4 rounded-full text-slate-800 w-full"
            placeholder="Cari dan bantu ..."
          />
        </form>
      </div>
    </header>

    <main class="container mx-auto px-4 sm:p-0">
      <!-- card -->
      <card-home-page
        v-for="card in CardContain"
        :key="card.id"
        :card="card"
      ></card-home-page>
      <!-- endcard -->
    </main>
    <!-- navbar -->
    <div
      class="navbar grid grid-cols-12 h-16 sticky bottom-0 bg-white border-t-2"
    >
      <div
        class="
          col-span-4
          text-slate-500
          cursor-pointer
          text-center
          flex flex-col
          justify-center
          hover:bg-slate-300
        "
      >
        <i class="fa-solid fa-folder-plus"></i>
        Galang Dana
      </div>
      <div
        @click="mydonation"
        class="
          col-span-4
          text-slate-500
          cursor-pointer
          text-center
          flex flex-col
          justify-center
          hover:bg-slate-300
        "
      >
        <i class="fa-solid fa-clock-rotate-left"></i>
        Donasi Saya
      </div>
      <div
        @click="profileUser"
        class="
          col-span-4
          text-slate-500
          cursor-pointer
          text-center
          flex flex-col
          justify-center
          hover:bg-slate-300
        "
      >
        <i class="fa-solid fa-user"></i>
        Akun
      </div>
    </div>
    <!-- end navbar -->
    <HFooter></HFooter>
  </div>
</template>

<script>
import CardHomePage from "../components/CardHomePage.vue";
import HFooter from "vue-hacktiv8-footer";
export default {
  name: "HomePage",
  components: {
    CardHomePage,
    HFooter,
  },
  methods: {
    mydonation() {
      this.$router.push({ name: "MyDonationPage" });
    },
    fetchCardContain() {
      this.$store.dispatch("fetchCardContain");
    },
    profileUser() {
      this.$router.push({ name: "ProfileUser" });
    },
  },
  computed: {
    CardContain() {
      return this.$store.state.cardContain;
    },
  },
  created() {
    this.fetchCardContain();
  },
};
</script>

<style>
</style>