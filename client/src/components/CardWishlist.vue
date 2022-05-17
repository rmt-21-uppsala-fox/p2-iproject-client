<template>
  <div class="mx-6 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 mt-10">
    <div
      v-for="game in getShowList"
      :key="game.id"
      class="max-w-md w-full rounded-t-md overflow-hidden bg-[#004445] shadow-lg rounded-xl p-6"
    >
      <div class="flex flex-col">
        <div>
          <div class="relative h-62 w-full mb-3">
            
            <img
              :src="game.Game.background_image"
              class="object-cover h-48 w-96 rounded-2xl"
            />
          </div>
          <div class="flex-auto justify-evenly">
            <div class="flex flex-wrap">
              <div
                class="w-full flex-none text-sm flex items-center text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-red-500 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span class="text-gray-400 whitespace-nowrap mr-3">{{
                  game.Game.rating
                }}</span>
              </div>
              <div class="flex items-center w-full justify-between min-w-0">
                <h2
                  class="text-lg mr-auto cursor-pointer text-gray-200 hover:text-purple-500 truncate"
                >
                  {{ game.Game.name }}
                </h2>
              </div>
            </div>

            <div
              class="flex pt-4 space-x-2 text-sm font-medium justify-start"
            >
              <p
                  class="text-xs mr-auto text-gray-200 truncate line-clamp-1" 
                >
                  {{ game.Game.description }}
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  props: [`getShowList`],
  
};
</script>
