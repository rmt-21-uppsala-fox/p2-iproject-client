<template>
  <div class="flex-col">
    <!--SideBar-->
    <div id="main" class="flex gap-2">
      <div>
        <aside class="w-64" aria-label="Sidebar">
          <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded bg-neutral">
            <ul class="space-y-2">
              <ul>
                <li>
                  <button
                    class="
                      flex
                      items-center
                      p-2
                      btn
                      text-base
                      font-normal
                      text-gray-900
                      rounded-lg
                      dark:text-white
                    "
                    type="submit"
                    v-if="searchOrFilterMode"
                    @click="backToNormal"
                  >
                    back
                  </button>
                </li>
                <form @submit.prevent="searchHandler">
                  <li>
                    <a
                      href="#"
                      class="
                        flex
                        items-center
                        p-2
                        text-base
                        font-normal
                        text-gray-900
                        rounded-lg
                        dark:text-white
                      "
                    >
                      <span class="flex-1 ml-3 whitespace-nowrap"
                        >Search News</span
                      >
                    </a>
                  </li>
                  <li>
                    <input
                      type="text"
                      placeholder="Type here"
                      class="input w-full max-w-xs"
                      v-model="search"
                    />
                    <button
                      class="
                        flex
                        items-center
                        p-2
                        btn
                        text-base
                        font-normal
                        text-gray-900
                        rounded-lg
                        dark:text-white
                      "
                      type="submit"
                    >
                      search
                    </button>
                  </li>
                </form>
              </ul>
              <li>
                <div tabindex="0" class="collapse">
                  <input type="checkbox" />
                  <div
                    class="
                      collapse-title
                      btn
                      m-1
                      flex
                      items-center
                      p-2
                      text-base
                      font-normal
                      text-gray-900
                      rounded-lg
                      dark:text-white
                    "
                  >
                    <p>
                      <i class="fa-solid fa-hand-point-right"></i> &nbsp; &nbsp;
                      News By Category
                    </p>
                  </div>
                  <div class="collapse-content">
                    <!--Categories-->
                    <list-categories
                      v-for="category in foodCategory"
                      :key="category.id"
                      :data="category"
                      @getInputFilter="getInputFilter"
                    ></list-categories>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      <div class="flex flex-col">
        <div class="grid grid-cols-4 gap-4 flex-grow-1 justify-center">
          <card-comp
            v-for="menu in restaurantMenu"
            :key="menu.id"
            :data="menu"
          ></card-comp>
        </div>
        <div class="btn-group">
          <button class="btn" @click="decrementPage">«</button>
          <button class="btn">{{ printPage }}</button>
          <button class="btn" @click="incrementPage">»</button>
        </div>
        <!-- <div class="card-body">
          <form @submit.prevent="loginCust" class="flex flex-col">
            <label for="name">Name</label>
            <input
              v-model="name"
              class="input input-bordered input-secondary w-full max-w-xs"
              type="text"
              id="name"
            />
            <label for="email">Email</label>
            <input
              v-model="email"
              class="input input-bordered input-secondary w-full max-w-xs"
              type="Email"
              name="emal"
              id="email"
            />
            <button type="submit">Start</button>
          </form>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import listCategories from "../components/ListCategories.vue";
import cardComp from "../components/CardList.vue";
export default {
  name: "custHomeComp",
  data() {
    return {
      page: 1,
      search: null,
      filter: null,
      searchOrFilterMode: false,
      name: "",
      email: "",
    };
  },
  components: {
    listCategories,
    cardComp,
  },
  methods: {
    async loginCust() {
      await this.$store.dispatch("doLoginCust", {
        restoId: this.$route.params.restoId,
        name: this.name,
        email: this.email,
      });
    },
    backToNormal() {
      this.searchOrFilterMode = false;
      this.search = null;
      this.filter = null;
      this.page = 1;
      this.$store.dispatch("getRestaurantMenu", {
        restoId: this.$route.params.restoId,
        page: this.page,
        search: this.search,
        filter: this.filter,
      });
    },
    getInputFilter(filter) {
      this.searchOrFilterMode = true;
      this.filter = filter;
      this.$store.dispatch("getRestaurantMenu", {
        restoId: this.$route.params.restoId,
        page: this.page,
        search: this.search,
        filter: this.filter,
      });
    },
    searchHandler() {
      this.searchOrFilterMode = true;
      this.$store.dispatch("getRestaurantMenu", {
        restoId: this.$route.params.restoId,
        page: this.page,
        search: this.search,
        filter: this.filter,
      });
    },
    incrementPage() {
      this.page++;
      this.searchOrFilterMode = true;
      this.$store.dispatch("getRestaurantMenu", {
        restoId: this.$route.params.restoId,
        page: this.page,
        search: this.search,
        filter: this.filter,
      });
    },
    decrementPage() {
      this.page--;
      this.searchOrFilterMode = true;
      this.$store.dispatch("getRestaurantMenu", {
        restoId: this.$route.params.restoId,
        page: this.page,
        search: this.search,
        filter: this.filter,
      });
    },
  },
  computed: {
    printPage() {
      return this.page;
    },
    restaurantMenu() {
      return this.$store.state.restaurantMenu;
    },
    customerIsLogin() {
      return this.$store.state.customerIsLogin;
    },
  },
  created() {
    this.$store.commit("CHANGE_customerIsLogin", true);
    this.$store.dispatch("doLoginCust", {
      restoId: this.$route.params.restoId,
    });
    this.$store.dispatch("getRestaurantMenu", {
      restoId: this.$route.params.restoId,
      page: this.page,
      search: this.search,
      filter: this.filter,
    });
    this.$store.dispatch("getFoodCategories");
  },
};
</script>

<style>
</style>