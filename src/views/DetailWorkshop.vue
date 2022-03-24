<template>
  <div class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
    <NavBar></NavBar>
    <section
      class="w-3/4 mx-auto bg-nordic-gray-light flex flex-col pt-12 md:pt-0 md:items-center bg-cover bg-right"
    >
      <div class="container flex pt-10 items-center">
        <div class="w-full md:w-3/4 px-4">
          <img :src="workshop.logo" class="object-cover w-full h-72 border-2" />
        </div>
        <div class="w-full md:w-1/4 mx-4">
          <img
            src="https://assets.website-files.com/5e83362767d71ffd59a0c8a9/5e9d812a8a5e0b00a064f7a6_streets_map.jpg"
            class="object-cover w-full"
          />
        </div>
      </div>
      <div class="container flex flex-col pt-4 px-4">
        <div class="flex flex-col w-full md:w-3/4 mt-4">
          <p class="font-bold text-gray-900 text-lg">Workshop Name</p>
          <p class="mt-2">{{workshop.name}}</p>
        </div>
        <div class="flex flex-col w-full md:w-3/4 mt-4">
          <p class="font-bold text-gray-900 text-lg">Specialization</p>
          <p class="mt-2">{{workshop.specialization}}</p>
        </div>
        <div class="flex flex-col w-full md:w-3/4 mt-4">
          <p class="font-bold text-gray-900 text-lg">Location</p>
          <p class="mt-2">{{workshop.location}}</p>
        </div>
        <div class="flex flex-col w-full md:w-3/4 mt-4">
          <p class="font-bold text-gray-900 text-lg">Phone Number</p>
          <p class="mt-2">{{workshop.phoneNumber}}</p>
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
  name: "DetailWorkshop",
  components: {
    NavBar,
    PageFooter,
  },
  computed: {
    workshop() {
      return this.$store.state.workshop;
    },
  },
  methods: {
    async fetchWorkshopById() {
      await this.$store.dispatch("fetchWorkshopById", this.$route.params.id);
    },
  },
  async created() {
    await this.fetchWorkshopById();
  },
};
</script>