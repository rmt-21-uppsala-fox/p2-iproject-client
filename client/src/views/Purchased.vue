<template>
  <div class="h-screen">
    
  <div class="mx-7 my-7 border border-2 rounded border-gray-800 my-8 ">
    
    <div class="bg-gray-600 bg-opacity-25 px-3 py-3 h-full">
     <div class="bg-black rounded border border-white py-3 w-1/3 mx-3">
       <p class="mx-3 font-sans font-bold text-xl text-white"> Purchased Movies</p>
     </div>

       
      <div class="grid grid-cols-5 gap-3 mx-3">
       <movie-card v-for="movie in movies" v-bind:key="movie.id" v-bind:movie="movie"></movie-card>

        

        
      </div>


    </div>
  </div>
  </div>
</template>

<script>
import MovieCard from '../components/MovieCard.vue'
export default {
    name: "Purchased",
    components: { MovieCard },
  
  created() {
    this.getPurchased()
  },
  methods: {
    async getPurchased() {
      await this.$store.dispatch("getPurchased")
    }
  },
  computed: {
    movies() {
        this.$store.state.purchasedMovies.map(el => {
            el.image = el.imageUrl
        })
      return this.$store.state.purchasedMovies
    }
  }
}
</script>

<style>

</style>