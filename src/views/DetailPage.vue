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
                    <h3 class="title">Recipe Name</h3>
                    <img
                      src="assets/images/video.png"
                      alt="video"
                      style="width:300px"
                    >
                  </div> <!-- section title -->
                  <p class="text">
                    <input
                      type="checkbox"
                      class="appearance-none checked:bg-blue-600 checked:border-transparent ..."
                    >Ingredients
                  </p>
                  <p class="text">
                    <input
                      type="checkbox"
                      class="appearance-none checked:bg-blue-600 checked:border-transparent ..."
                    >Ingredients
                  </p>
                </div>
                <div class="row no-gutters">
                  <div class="flex items-center justify-center single-counter counter-color-1">
                    <div class="text-center counter-items">
                      <span class="text-2xl font-bold text-white"><span class="counter">1025</span>K</span>
                      <p class="text-white">Calories</p>
                    </div>
                  </div> <!-- single counter -->
                  <div class="flex items-center justify-center single-counter counter-color-2">
                    <div class="text-center counter-items">
                      <span class="text-2xl font-bold text-white"><span class="counter">2</span>K</span>
                      <p class="text-white">Servings</p>
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
                  id="journal-scroll"
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
                      class="far fa-grin absolute top-2 left-2 text-white"
                      style="font-size: 17px !important;font-weight: bold;"
                    ></i>
                    <input
                      type="text"
                      class="rounded-full pl-6 pr-12 py-2 focus:outline-none h-auto placeholder-gray-100 bg-blue-500 text-white"
                      style="font-size:12px; width: 250px;"
                      placeholder="Type a message..."
                      id="typemsg"
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
};
</script>

<style scoped>
.card-recipe {
  margin: 15px;
}
.button-bookmark {
  padding: 5px;
}
#journal-scroll::-webkit-scrollbar {
  width: 6px;
  cursor: pointer;
}

#journal-scroll::-webkit-scrollbar-track {
  background-color: rgba(229, 231, 235, var(--bg-opacity));
  cursor: pointer;
}

#journal-scroll::-webkit-scrollbar-thumb {
  cursor: pointer;
  background-color: #a0aec0;
}
</style>