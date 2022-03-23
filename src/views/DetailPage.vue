<template>
  <div>
    <HeaderComponent />
    <section
      id="facts"
      class="pt-20 video-counter"
    >
      <div class="container">
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
                <div class="counter-content">
                  <div class="mb-8 section-title">
                    <div class="line"></div>
                    <h3 class="title">{{recipes.recipe.label}}</h3>
                    <img
                      :src="recipes.recipe.image"
                      alt="Image"
                      style="width:300px"
                    >
                  </div> <!-- section title -->
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
            </div>
          </div>
          <!-- Recipe start -->
          <!-- Chat Start -->
          <div class="w-full lg:w-1/2">
            <div class="flex justify-center items-center h-screen ">
              <div class="w-80 h-96 bg-white rounded shadow-2xl">
                <nav class="w-full h-10 bg-blue-500 rounded-tr rounded-tl flex justify-between items-center">
                  <div class="flex justify-center items-center">
                    <i class="mdi mdi-arrow-left font-normal text-white ml-1"></i>
                    <span class="text-md font-medium text-white ml-1">Live Chat</span>
                  </div>
                </nav>
                <div
                  class="overflow-auto px-1 py-1"
                  style="height: 19rem;"
                >
                  <div class="flex items-center pr-10">
                    <span
                      class="flex ml-1 h-auto bg-blue-500 text-gray-200 text-xs font-normal rounded-sm px-1 p-1 items-end"
                      style="font-size: 10px;"
                    >Hi Dr.Hendrikson, I haven't been feeling well for past few days
                    </span>
                  </div>
                </div>
                <div class="flex justify-between items-center p-1 ">
                  <div class="relative">
                    <i
                      class="far fa-grin absolute top-2 left-1 text-white"
                      style="font-size: 17px !important;font-weight: bold;"
                    ></i>
                    <input
                      type="text"
                      class="rounded-full pl-6 pr-12 py-2 focus:outline-none h-auto placeholder-gray-100 bg-blue-500 text-white"
                      style="font-size:12px; width: 250px;"
                      placeholder="Type a message..."
                    >
                  </div>
                  <div class="w-7 h-7 rounded-full bg-blue-300 text-center items-center flex justify-center hover:bg-blue-500 hover:text-white">
                    <i class="fas fa-microphone"></i>
                  </div>
                  <div class="w-7 h-7 rounded-full bg-blue-300 text-center items-center flex justify-center">
                    <button class="w-7 h-7 rounded-full text-center items-center flex justify-center focus:outline-none hover:bg-blue-500 hover:text-white">
                      <i class="far fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Chat End -->
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