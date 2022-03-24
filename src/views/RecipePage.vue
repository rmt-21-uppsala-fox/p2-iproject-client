<template>
  <!-- Start Detail Recipe -->
  <div class="detail-recipe">
    <HeaderComponent />
    <!-- component -->
    <link
      rel="stylesheet"
      href="https://cdn.tailgrids.com/tailgrids-fallback.css"
    />
    <!-- ====== Blog Section Start -->
    <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
      <div class="container">
        <div class="flex flex-wrap justify-center -mx-4">
          <div class="w-full px-4">
            <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <span class="font-semibold text-lg text-primary mb-2 block">
                Our Blogs
              </span>
              <h2 class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  ">
                Our Recent News
              </h2>
              <p class="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap -mx-4">
          <div
            v-for="recipe in filteredRecipe"
            :key="recipe.uri"
            class="w-full md:w-1/2 lg:w-1/3 px-4"
          >
            <div class="max-w-[370px] mx-auto mb-10">
              <div class="rounded overflow-hidden mb-8 card-recipe">
                <img
                  :src="recipe.recipe.image"
                  alt="image"
                  class="w-full"
                />
              </div>
              <div>
                <span
                  @click="createHandler(recipe.recipe.uri)"
                  class="
                     bg-primary
                     rounded
                     text-center
                     text-white button-bookmark
                     p-2
                     "
                >
                  Add to bookmark
                </span>
                <h3>
                  <a
                    @click.prevent="gotoDetail(recipe.recipe.uri)"
                    href="javascript:void(0)"
                    class="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary mt-2
                        "
                  >
                    {{recipe.recipe.label}}
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ====== Blog Section End -->
  </div>
  <!-- End Detail Recipe -->
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
export default {
  name: "RecipePage",
  components: { HeaderComponent },
  computed: {
    filteredRecipe() {
      return this.$store.state.filteredRecipe;
    },
    isLogin() {
      return this.$store.state.isLogin;
    },
    currentUser() {
      return this.$store.state.currentUser;
    },
  },
  methods: {
    createHandler(params) {
      const RecipeId = params.split("#")[1];
      console.log(RecipeId);
      this.$store.dispatch("createRecipes", RecipeId);
    },
    gotoDetail(params) {
      const RecipeId = params.split("#")[1];
      this.$store.dispatch("fetchDetailReciped", RecipeId);
      this.$store.commit("SET_DETAIL_PAGE", true);
      this.$router.push({ name: "detail-recipe" });
    },
  },
  created: function () {
    if (localStorage.getItem("access_token")) {
      this.$store.commit("SET_STATUS_LOGIN", {
        isLogin: true,
        currentUser: this.$store.state.currentUser,
      });
    }
    this.$store.dispatch("getRecipes");
  },
};
</script>

<style>
</style>