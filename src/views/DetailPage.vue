<template>
  <div>
    <HeaderComponent />
    <!--====== VIDEO COUNTER PART START ======-->

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
            <div class="bg-blue w-full p-8 flex justify-center font-sans">
              <div class="rounded bg-grey-light w-64 p-2">
                <div class="flex justify-between py-1">
                  <h3 class="text-sm">New landing page</h3>
                  <svg
                    class="h-4 fill-current text-grey-dark cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
                  </svg>
                </div>
                <div class="text-sm mt-2">
                  <div class="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                    Do a mobile first layout
                  </div>

                  <div class="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                    Check the meta tags
                  </div>

                  <div class="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                    Check the responsive layout on all devices
                    <div class="text-grey-darker mt-2 ml-2 flex justify-between items-start">
                      <span class="text-xs flex items-center">
                        <svg
                          class="h-4 fill-current mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50 50"
                        >
                          <path d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z" />
                        </svg>
                        3/5
                      </span>
                      <img
                        src="https://i.imgur.com/OZaT7jl.png"
                        class="rounded-full"
                      />
                    </div>
                  </div>
                  <p class="mt-3 text-grey-dark">Add a card...</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Chat End -->
        </div> <!-- row -->
      </div> <!-- container -->
    </section>

    <!--====== VIDEO COUNTER PART ENDS ======-->
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

<style>
.card-recipe {
  margin: 15px;
}
.button-bookmark {
  padding: 5px;
}
</style>