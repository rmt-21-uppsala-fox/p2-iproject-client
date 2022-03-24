<template>
  <div class="px-[10%] py-4 flex flex-grow self-stretch justify-center">
    <div
      class="self-strectch flex flex-col my-5 rounded-xl px-11 py-8 gap-3 w-3/4 relative bg-neutral"
    >
      <p class="font-bold text-xl">Game Deals</p>
      <div class="form-control">
        <div class="input-group input-group-sm flex">
          <input
            type="text"
            placeholder="Search by title…"
            class="input input-bordered input-sm flex-grow"
            v-model="search"
          />
          <button
            class="btn btn-square btn-secondary btn-sm"
            @click.prevent="getSearch"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <!-- card -->
      <div class="flex-grow flex flex-col gap-3">
        <deal-card v-for="(deal, i) in deals" :key="i" :deal="deal"></deal-card>
      </div>
      <div class="btn-group ml-auto">
        <button
          :class="`btn btn-secondary ${page > 0 ? '' : 'btn-disabled'}`"
          @click.prevent="decreasePage"
        >
          «
        </button>
        <button class="btn btn-secondary">Page {{ page + 1 }}</button>
        <button :class="`btn btn-secondary`" @click.prevent="increasePage">
          »
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import DealCard from "../components/DealCard.vue";
  export default {
    name: "HomeView",
    components: { DealCard },
    data() {
      return {
        page: 0,
        search: "",
      };
    },
    methods: {
      increasePage() {
        this.page++;
        this.$store.dispatch("getDeals", { page: this.page });
      },
      decreasePage() {
        if (this.page > 0) {
          this.page--;
          this.$store.dispatch("getDeals", { page: this.page });
        }
      },
      getSearch() {
        this.$store.dispatch("getDeals", { search: this.search });
        this.page = 0;
        this.search = "";
      },
    },
    computed: {
      deals() {
        return this.$store.state.deals || [];
      },
    },
    beforeCreate() {
      this.$store.dispatch("getDeals", { page: this.page });
    },
  };
</script>
