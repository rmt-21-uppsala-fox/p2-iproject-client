<template>
  <div class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
    <NavBar></NavBar>
    <section
      class="w-3/4 mx-auto bg-nordic-gray-light flex flex-col pt-12 md:pt-0 md:items-center bg-cover bg-right"
    >
      <div class="container flex pt-10 items-center">
        <div class="w-full md:w-3/4 px-4">
          <img :src="food.imgUrl" class="object-cover w-full h-72" />
        </div>
        <div class="w-full md:w-1/4 mx-4">
          <img :src="qrCode" class="object-cover w-full" />
        </div>
      </div>
      <div class="container flex flex-col pt-4 px-4">
        <div class="flex flex-col w-full md:w-3/4 mt-4">
          <p class="font-bold text-gray-900 text-lg">Name</p>
          <p class="mt-2">{{food.name}}</p>
        </div>
        <div class="flex flex-col w-full md:w-3/4 mt-4">
          <p class="font-bold text-gray-900 text-lg">Category</p>
          <p class="mt-2">{{category}}</p>
        </div>
        <div class="flex flex-col w-full md:w-3/4 mt-4">
          <p class="font-bold text-gray-900 text-lg">Description</p>
          <p class="mt-2">{{food.description}}.</p>
        </div>
        <div class="flex flex-col w-full md:w-3/4 mt-4">
          <p class="font-bold text-gray-900 text-lg">Price</p>
          <p class="mt-2">{{rupiahPrice}}</p>
        </div>
      </div>
    </section>

    <PageFooter class="mt-24"></PageFooter>
  </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";
import PageFooter from "../components/PageFooter.vue";
export default {
  name: "DetailFood",
  components: {
    NavBar,
    PageFooter,
  },
  computed: {
    food() {
      return this.$store.state.food;
    },
    category() {
      return this.$store.state.category;
    },
    rupiahPrice() {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(this.food.price);
    },
    qrCode() {
      return this.$store.state.qrCode;
    },
  },
  methods: {
    async fetchFoodById() {
      await this.$store.dispatch("fetchFoodById", this.$route.params.id);
    },
    async getQRCode() {
      const baseUrl = window.location.origin;
      const path = this.$route.path;
      await this.$store.dispatch("getQRCode", baseUrl + path);
    },
  },
  async created() {
    await this.fetchFoodById();
    await this.getQRCode();
  },
};
</script>