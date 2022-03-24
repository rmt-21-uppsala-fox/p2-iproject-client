<template>
  <!--====== HEADER PART START ======-->
  <header class="header-area">
    <NavbarComponent />
    <div
      id="home"
      class="header-hero"
      style="background-image: url(assets/images/banner-bg.svg)"
    >
      <div class="container">
        <div class="justify-center row">
          <div class="w-full lg:w-2/3">
            <div class="pt-32 mb-12 text-center lg:pt-48 header-hero-content">
              <h3
                class="text-4xl font-light leading-tight text-white header-sub-title wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >WhatoEat - Recipe Collection</h3>
              <h2
                class="mb-3 text-4xl font-bold text-white header-title wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.5s"
              >WhatoEat ?</h2>
              <p
                class="text-white text wow fadeInUp mb-3"
                data-wow-duration="1.3s"
                data-wow-delay="0.8s"
              >Find recipe, recommendation recipe based on weather, and you can plan your meal</p>
              <div v-if="!detailPage">
                <form @submit.prevent="searchRecipe">
                  <input
                    v-model="name"
                    name="name"
                    class="wow fadeInUp w-full mb-3 rounded py-2 px-4"
                    type="text"
                    data-wow-duration="1.3s"
                    data-wow-delay="1.1s"
                    placeholder="  ex: chicken, chocolate, noddles..."
                  >
                  <button
                    type="submit"
                    class="main-btn bg-blue-400 wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="1.1s"
                  >Search Recipe</button>
                </form>
              </div>
            </div> <!-- header hero content -->
          </div>
        </div> <!-- row -->
        <div class="justify-center row">
          <div class="w-full lg:w-2/3">
            <div
              class="text-center header-hero-image wow fadeIn rounded-xl"
              data-wow-duration="1.3s"
              data-wow-delay="1.4s"
            >
              <img
                src="assets/images/hero-health.png"
                alt="hero"
                class="image-hero rounded-md"
              >
            </div> <!-- header hero image -->
          </div>
        </div>
        <!--row -->
      </div> <!-- container -->
      <div
        id="particles-1"
        class="particles"
      ></div>
    </div> <!-- header hero -->
  </header>
  <!--====== HEADER PART ENDS ======-->
</template>

<script>
import NavbarComponent from "./NarbarComponent.vue";
export default {
  name: "HeaderComponent",
  components: { NavbarComponent },
  data() {
    return {
      name: "",
      minCal: "",
      maxCal: "",
      dietLabel: "",
      mealType: "",
    };
  },
  computed: {
    detailPage() {
      return this.$store.state.detailPage;
    },
    filteredRecipe() {
      return this.$store.state.filteredRecipe;
    },
  },
  methods: {
    async searchRecipe() {
      const query = {
        name: this.name,
        minCal: this.minCal,
        maxCal: this.maxCal,
        dietLabel: this.dietLabel,
        mealType: this.mealType,
      };
      const response = await this.$store.dispatch("getRecipes", query);
      this.$store.commit("FETCH_FILTERED_RECIPES", response.data);
      this.$store.commit("SET_DETAIL_PAGE", true);
      this.$router.push({ name: "recipes" });
    },
  },
};
</script>