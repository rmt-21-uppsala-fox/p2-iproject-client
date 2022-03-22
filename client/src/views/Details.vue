<template>
  <!--Details-->
  <div class="h-screen pb-8">
    <div class="mx-7 my-7 border border-2 rounded border-gray-800 my-8">
      <div class="bg-gray-600 bg-opacity-25 px-3 py-3 h-full">
        <div class="grid grid-cols-2 gap-1 mx-3 py-5 px-5">
          <div class="my-3 flex justify-center  py-7">
            <!-- <div class="bg-gray-600 px-2 my-2 rounded">
            <h1 class="text-white">The Mitchells vs the Machines </h1>
          </div> -->
            <div class="w-3/4 center grid grid-cols-1">
              <img
                src="https://imdb-api.com/images/original/MV5BMjdkZjNjNDItYzc4MC00NTkxLTk1MWEtY2UyZjY5MjUwNDNkXkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_Ratio0.6837_AL_.jpg"
                alt=""
                srcset=""
              />
              <button
                @click.prevent="handleDetailNews(data.id)"
                type="button"
                class="
                  my-2
                  border border-gray-300
                  inline-block
                  px-6
                  py-2.5
                  bg-indigo-800
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-red-600 hover:shadow-lg
                  bg-blue-700
                  focus:bg-blue-700
                  focus:shadow-lg
                  focus:outline-none
                  focus:ring-0
                  active:bg-indigo-700 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out
                "
              >
                Buy Rp 190000
              </button>
              <button
                @click.prevent="handleDetailNews(data.id)"
                type="button"
                class="
                  border border-gray-300
                  inline-block
                  px-6
                  py-2.5
                  bg-indigo-800
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-red-600 hover:shadow-lg
                  bg-blue-700
                  focus:bg-blue-700
                  focus:shadow-lg
                  focus:outline-none
                  focus:ring-0
                  active:bg-indigo-700 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out
                "
              >
                Rent 80000
              </button>
            </div>
          </div>
          <div>
            <div
              class="
                bg-red-700
                rounded
                border border-white
                py-3
                w-full
                mx-1
                my-2
              "
            >
              <p class="mx-3 font-sans font-bold text-xl text-white">
                The Mitchells vs The Machines
              </p>
            </div>
            <div class="bg-black rounded border border-white py-3 w-full mx-1">
              <p class="mx-3 my-1 font-sans font-bold text-xl text-white">
                Year : 2021
              </p>
              <p class="mx-3 my-1 font-sans font-bold text-xl text-white">
                Genre : Animation, Comedy
              </p>
              <p class="mx-3 my-1 font-sans font-bold text-xl text-white">
                Synopsis :
              </p>
              <div class="bg-gray-300 mx-2 my-2 py-2 px-2">
                <p class="mx-3 my-1 font-sans font-bold text-xl text-black">
                  A quirky, dysfunctional family's road trip is upended when
                  they find themselves in the middle of the robot apocalypse and
                  suddenly become humanity's unlikeliest last hope.
                </p>
              </div>
              <div class="my-3">
                <div
                class="bg-red-700 rounded border border-white py-3 w-1/3 mt-4 mx-5"
              >
                <p class="mx-3 font-sans font-bold text-xl text-white">
                  Discussion
                </p>
              </div>
              <div
                class="
                  bg-gray-300 mx-5 my-2 py-2 px-2
                "
              >
                <div class="bg-gray-200 bg-opacity-50 px-3 py-3 h-96"></div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>