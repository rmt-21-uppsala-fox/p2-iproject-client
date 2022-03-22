<template>
  <!--Contents-->
  <div class="h-screen">
    
  <div class="mx-7 my-7 border border-2 rounded border-gray-800 my-8 ">
    
    <div class="bg-gray-600 bg-opacity-25 px-3 py-3 h-full">
     <div class="bg-black rounded border border-white py-3 w-1/3 mx-3">
       <p class="mx-3 font-sans font-bold text-xl text-white"> Top 5 Movies this week</p>
     </div>

       
      <div class="grid grid-cols-5 gap-3 mx-3">
        <div class="my-3 mx-2">
          <img src="https://imdb-api.com/images/original/MV5BMjdkZjNjNDItYzc4MC00NTkxLTk1MWEtY2UyZjY5MjUwNDNkXkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_Ratio0.6837_AL_.jpg" alt="" srcset="">
          <!-- <div class="bg-gray-600 px-2 my-2 rounded">
            <h1 class="text-white">The Mitchells vs the Machines </h1>
          </div> -->
          <div class="my-2 grid grid-cols-1">
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
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-indigo-700 active:shadow-lg
            transition
            duration-150
            ease-in-out
          "
        >
          Buy or Rent
        </button>
          </div>



        </div>

        <div class="my-3 mx-2">
          <img src="https://imdb-api.com/images/original/MV5BMjdkZjNjNDItYzc4MC00NTkxLTk1MWEtY2UyZjY5MjUwNDNkXkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_Ratio0.6837_AL_.jpg" alt="" srcset="">
          <div class="bg-gray-600 px-2 my-2 rounded">
            <h1 class="text-white">The Mitchells vs the Machines </h1>
          </div>
          <div class="grid grid-cols-1">
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
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-indigo-700 active:shadow-lg
            transition
            duration-150
            ease-in-out
          "
        >
          Buy or Rent
        </button>
          </div>



        </div>

        <div class="my-3 mx-2">
          <img src="https://imdb-api.com/images/original/MV5BMjdkZjNjNDItYzc4MC00NTkxLTk1MWEtY2UyZjY5MjUwNDNkXkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_Ratio0.6837_AL_.jpg" alt="" srcset="">
          <div class="bg-gray-600 px-2 my-2 rounded">
            <h1 class="text-white">The Mitchells vs the Machines </h1>
          </div>
          <div class="grid grid-cols-1">
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
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-indigo-700 active:shadow-lg
            transition
            duration-150
            ease-in-out
          "
        >
          Buy or Rent
        </button>
          </div>



        </div>

        <div class="my-3 mx-2">
          <img src="https://imdb-api.com/images/original/MV5BMjdkZjNjNDItYzc4MC00NTkxLTk1MWEtY2UyZjY5MjUwNDNkXkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_Ratio0.6837_AL_.jpg" alt="" srcset="">
          <div class="bg-gray-600 px-2 my-2 rounded">
            <h1 class="text-white">The Mitchells vs the Machines </h1>
          </div>
          <div class="grid grid-cols-1">
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
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-indigo-700 active:shadow-lg
            transition
            duration-150
            ease-in-out
          "
        >
          Buy or Rent
        </button>
          </div>



        </div>
        <div class="my-3 mx-2">
          <img src="https://imdb-api.com/images/original/MV5BMjdkZjNjNDItYzc4MC00NTkxLTk1MWEtY2UyZjY5MjUwNDNkXkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_Ratio0.6837_AL_.jpg" alt="" srcset="">
          <div class="bg-gray-600 px-2 my-2 rounded">
            <h1 class="text-white">The Mitchells vs the Machines </h1>
          </div>
          <div class="grid grid-cols-1">
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
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-indigo-700 active:shadow-lg
            transition
            duration-150
            ease-in-out
          "
        >
          Buy or Rent
        </button>
          </div>



        </div>

        
      </div>


    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  created() {
    this.getTop5Movies()
  },
  methods: {
    async getTop5Movies() {
      await this.$store.dispatch("getTop5Movies")
    }
  }

}
</script>

<style>

</style>