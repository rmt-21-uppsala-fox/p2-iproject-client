<template>
    <!---MovieCard -->
        <div class="my-3  mx-2">
        <div @click.prevent="getMovie(compMovie.id)" class="h-4/5 flex justify-center">
              <img  class="w-full" v-bind:src="compMovie.image" alt="" srcset="">
        </div>
          <!-- <div class="bg-gray-600 px-2 my-2 rounded">
            <h1 class="text-white">The Mitchells vs the Machines </h1>
          </div> -->
          <div class="my-2 grid grid-cols-1">
            <button
          @click.prevent="getMovie(compMovie.id)"

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
</template>

<script>
export default {
    name: "MovieCard",
    props: ["movie"],
    methods: {
        async getMovie(imdbId) {
            console.log(imdbId)
            this.$router.push({
        //kirim untuk merender komponen DetailPage
        name: "Details",
        params: {
          imdbId: imdbId,
        },
      });
            
            
        }
    },
    computed: {
        compMovie() {
            return this.movie
        }
    }
}
</script>

<style>

</style>