<template>
  <div>
    <HeaderComponent />
    <LogoApiComponent />
    <!--====== Recommended Recipes PART START ======-->
    <section
      id="recommended-recipes"
      class="services-area pt-120 mb-10"
    >
      <div class="container">
        <div class="justify-center row">
          <div class="w-full lg:w-2/3">
            <div class="pb-10 text-center section-title">
              <div class="m-auto line"></div>
              <h3 class="title">Recommendation Recipes, <span> Based on today's weather!</span>
                <p>Today's weather is {{recipes.weather}}, so we recommend you to makes this foods!</p>
              </h3>
            </div> <!-- section title -->
          </div>
        </div> <!-- row -->
        <div class="justify-center row">
          <div
            class="w-full sm:w-2/3 lg:w-1/3"
            v-for="(recipe, index) in recipes.recipes"
            :key="index"
          >
            <div
              class="single-services wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div class="services-icon">
                <img
                  class="shape"
                  :src="recipe.recipe.image"
                  alt="shape"
                >
              </div>
              <div class="mt-8 services-content">
                <h4 class="mb-8 text-xl font-bold text-gray-900">{{recipe.recipe.label}}</h4>
                <p class="mb-8">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor
                  invidunt labore.</p>
                <a
                  @click="gotoDetail(recipe.recipe.uri)"
                  class="duration-300 hover:bg-blue-300 p-2 rounded-md"
                  href="javascript:void(0)"
                >Read More <i class="ml-2 lni lni-chevron-right"></i></a>

              </div>
            </div> <!-- single services -->
          </div>
        </div> <!-- row -->
        <div class="justify-center row">

        </div>
      </div> <!-- container -->
    </section>
    <!--====== Recommended Recipes PART ENDS ======-->

    <!--====== BACK TOP TOP PART START ======-->
    <a
      href="#"
      class="back-to-top"
    ><i class="lni lni-chevron-up"></i></a>
    <!--====== BACK TOP TOP PART ENDS ======-->
  </div>
</template>
<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import LogoApiComponent from "../components/LogoApiComponent.vue";
export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    LogoApiComponent,
  },
  computed: {
    recipes() {
      return this.$store.state.recipes;
    },
    isLogin() {
      return this.$store.state.isLogin;
    },
    currentUser() {
      return this.$store.state.currentUser;
    },
  },
  methods: {
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
    this.$store.dispatch("fetchRecipes");
    this.$store.commit("SET_DETAIL_PAGE", false);
  },
};
</script>
