<template>
  <main class="grid place-items-center h-screen bg-[#021c1e]">
    <section
      class="flex flex-col md:flex-row gap-11 py-10 px-5 bg-[#004445]  rounded-md shadow-lg w-3/4 md:max-w-2xl"
    >
      <div class="text-white flex flex-col justify-between">
        <img :src="getDetailGame.data.game.background_image" class="rounded-md" alt="" />
        <div>
        </div>
      </div>
      <div class="text-white">
        <small class="uppercase">{{
          getDetailGame.data.game.developers[0].name
        }}</small>
        <h3 class="uppercase text-white text-2xl font-medium">
          {{ getDetailGame.data.game.name }}
        </h3>
        <h3 class="text-2xl font-semibold mb-7">
          Rp.{{ getDetailGame.data.price }}
        </h3>
        
        <div class="flex gap-0.5 mt-4">
            <button
            @click.prevent="buyTheGame"
              id="addToCartButton"
              class="bg-indigo-600 rounded-3xl hover:bg-indigo-500 focus:outline-none transition text-white uppercase px-8 py-3"
            >
              add to cart
            </button>
          
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import swal from 'sweetalert2';
export default {
  props: [`getDetailGame`],
  methods: {
    async buyTheGame() {
      try {
        window.snap.pay(this.purchasedGames, {
          onSuccess: this.gameCollection,
          onPending: function(){
            swal.fire({
              position: "top-end",
              icon: "success",
              title: "Wait a Second!",
              showConfirmButton: false,
              timer: 1500,
            });
          },
          onError: function(){
            swal.fire({
              icon: 'error',
              title: 'Your Payment Failed',
            })
          },
          onClose: function(){
            swal.fire({
              position: "top-end",
              icon: "success",
              title: "you closed the popup without finishing the payment",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
      } catch (err) {
        console.log(err);
      }
    },
    async gameCollection(){
      const data = {
        background_image : this.getDetailGame.data.game.background_image,
        gameId : this.getDetailGame.data.game.id,
        name: this.getDetailGame.data.game.name,
        price : this.getDetailGame.data.price,
        description : this.getDetailGame.data.game.description_raw,
      };
      await this.$store.dispatch("addToCollection", data);
      if (!this.gamesCollection) {
        swal.fire(this.errorMsg);
      } else {
        this.$router.push("/");
      }
    }
  },
  computed: {
    purchasedGames() {
      return this.$store.state.purchasedGames;
    },
    gamesCollection() {
      return this.$store.state.gamesCollection;
    },
  },
};
</script>
