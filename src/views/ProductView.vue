<template>
  <div>
    <section class="bg-white py-8">
      <div class="container mx-auto flex flex-wrap pt-4" id="menu-view">
        <nav id="store" class="w-full z-30 top-0 px-6 py-1">
          <div
            class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3"
          >
            <a
              class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
              href="#"
            >Products</a>

            <div class="flex items-center" id="store-nav-content">
              <a class="pl-3 inline-block no-underline hover:text-black" href="#">
                <svg
                  class="fill-current hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                </svg>
              </a>

              <a class="pl-3 inline-block no-underline hover:text-black" href="#">
                <svg
                  class="fill-current hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </nav>

        <div class="w-full pb-6 md:w-1/5 pt-10 px-4">
          <div class="flex flex-col p-6 bg-gray-100" style="top: 9em">
            <!--Filters-->
            <p>Filter</p>
            <div
              class="flex justify-between items-center mb-3 mt-3"
              v-for="(category, i) in categoryFilterNames"
              :key="i"
            >
              <label class="ml-3 text-sm font-medium text-gray-900">{{category}}</label>
              <input
                v-model="categoryFilterStatus[category]"
                @change="changeRoutes(true)"
                type="checkbox"
                class="w-5 h-5 text-gray-600 mr-3 bg-gray-100 rounded border-gray-300 focus:ring-gray-500"
              />
            </div>

            <p class="mt-4 mb-1">Search</p>
            <div class="flex flex-col items-center">
              <input
                v-model="searchFilter"
                type="text"
                id="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 mb-4 mt-2"
                placeholder="search product name"
              />
              <div class="flex">
                <button
                  @click="changeRoutes(true)"
                  type="button"
                  class="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded text-xs py-1 px-2 text-center mr-2 mb-2"
                >search</button>
                <button
                  @click="clearSearch"
                  type="button"
                  class="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded text-xs py-1 px-2 text-center mr-2 mb-2"
                >clear</button>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full md:w-4/5 flex items-center flex-wrap pt-4 px-4">
          <!--section-->

          <ProductCard v-for="data in products.rows" :key="data.id" :data="data"></ProductCard>
        </div>
      </div>
    </section>

    <nav class="flex justify-center mb-4 mt-10">
      <ul class="inline-flex items-center -space-x-px">
        <li>
          <button
            @click="backPage"
            class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          >
            <span class="sr-only">Previous</span>
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </li>
        <li v-for="page in pageCount" :key="page">
          <button
            @click="changePage(page)"
            :class="`py-2 px-3 leading-tight border border-gray-300  ${page == pageState? 'text-white bg-gray-900':'hover:bg-gray-100 hover:text-gray-700 bg-white text-gray-500'}`"
          >{{page}}</button>
        </li>

        <li>
          <button
            @click="nextPage"
            class="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          >
            <span class="sr-only">Next</span>
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
export default {
  name: "ProductView",
  data() {
    return {
      categoryFilterNames: [
        "Suspension",
        "Wheel",
        "Accessories",
        "Exhaust",
        "Interior",
      ],
      categoryFilterStatus: {},
      searchFilter: "",
      pageState: 1,
    };
  },
  components: {
    ProductCard,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    pageCount() {
      return this.$store.state.pageCount;
    },
    queryParams() {
      return this.$route.query;
    },
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
  watch: {
    async queryParams() {
      await this.fetchData();
    },
  },
  methods: {
    async fetchData() {
      await this.$store.dispatch("fetchData", {
        category: this.$route.query.category,
        search: this.$route.query.search,
        page: this.$route.query.page ? this.$route.query.page : 1,
      });
    },
    async changeRoutes(resetPage) {
      if (resetPage) this.pageState = 1;
      const categoryFilter = [];
      Object.keys(this.categoryFilterStatus).forEach((key) => {
        if (this.categoryFilterStatus[key]) categoryFilter.push(key);
      });
      this.$router.push({
        path: "/",
        query: {
          category:
            categoryFilter.length > 0 ? categoryFilter.join(";") : undefined,
          search: this.searchFilter ? this.searchFilter : undefined,
          page: this.pageState > 1 ? this.pageState : undefined,
        },
      });
    },
    async clearSearch() {
      this.searchFilter = "";
      await this.changeRoutes(true);
    },
    async changePage(page) {
      this.pageState = page;
      await this.changeRoutes();
      document
        .getElementById("menu-view")
        .scrollIntoView({ behavior: "smooth" });
    },
    async backPage() {
      if (this.pageState > 1) {
        this.pageState--;
        await this.changeRoutes();
        document
          .getElementById("menu-view")
          .scrollIntoView({ behavior: "smooth" });
      }
    },
    async nextPage() {
      if (this.pageState < this.pageCount) {
        this.pageState++;
        await this.changeRoutes();
        document
          .getElementById("menu-view")
          .scrollIntoView({ behavior: "smooth" });
      }
    },
    async fetchFavorites() {
      await this.$store.dispatch("fetchFavorites");
    },
  },
  async created() {
    await this.fetchData();
  },
};
</script>