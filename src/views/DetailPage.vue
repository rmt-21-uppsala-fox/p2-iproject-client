<template>
  <div>
    <HeaderComponent />
    <section
      id="facts"
      class="pt-20 video-counter"
    >
      <div class="container mb-10">
        <div class="row">
          <div class="w-full lg:w-1/2">
            <!-- Recipe start -->
            <div
              class="relative pb-8 mt-12 video-content wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div
                class="pl-0 mt-12 counter-wrapper lg:pl-16 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.8s"
              >
                <img
                  class="absolute bottom-0 left-0 -ml-8 dots"
                  src="assets/images/dots.svg"
                  alt="dots"
                >
                <div class="relative counter-content">
                  <div class="mb-8 section-title">
                    <div class="line"></div>
                    <h3 class="title">{{recipes.recipe.label}}</h3>
                    <img
                      :src="recipes.recipe.image"
                      alt="Image"
                      style="width:300px"
                    >
                  </div> <!-- section title -->
                </div>

              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2">
            <h1 class="text-2xl mb-5 mt-10">Ingredients</h1>
            <div
              v-for="ingredient in recipes.recipe.ingredients"
              :key="ingredient.uri"
              class="flex items-start"
            >
              <div class="flex items-center h-5">
                <input
                  id="comments"
                  name="comments"
                  type="checkbox"
                  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                >
              </div>
              <div class="ml-3 text-sm">
                <label
                  for="comments"
                  class="font-medium text-gray-700"
                >{{ingredient.text}}</label>
              </div>
            </div>
            <div class="row no-gutters">
              <div class="flex items-center justify-center single-counter counter-color-1">
                <div class="text-center counter-items">
                  <span class="text-2xl font-bold text-white"><span class="counter">{{Math.ceil(recipes.recipe.calories)}}</span>K</span>
                  <p class="text-white">Calories</p>
                </div>
              </div> <!-- single counter -->
              <div class="flex items-center justify-center single-counter counter-color-2">
                <div class="text-center counter-items">
                  <span class="text-xs font-bold text-white"><span class="counter">{{recipes.recipe.mealType[0]}}</span></span>
                  <p class="text-white">Meal Type</p>
                </div>
              </div> <!-- single counter -->
              <div class="flex items-center justify-center single-counter counter-color-3">
                <div class="text-center counter-items">
                  <span class="text-2xl font-bold text-white"><span class="counter">4.8</span></span>
                  <p class="text-white">User Rating</p>
                </div>
              </div> <!-- single counter -->
            </div> <!-- row -->
          </div>
          <!-- Recipe start -->
        </div> <!-- row -->
      </div> <!-- container -->
    </section>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
export default {
  name: "DetailPage",
  components: {
    HeaderComponent,
  },
  computed: {
    recipes() {
      return this.$store.state.recipes;
    },
  },
  created: function () {
    this.$store.dispatch("fetchDetailReciped");
  },
};
</script>

<style scoped>
.card-recipe {
  margin: 15px;
}
.button-bookmark {
  padding: 5px;
}
</style>