<template>
  <div :class="`w-full ${from ? 'md:w-1/3 xl:w-1/4':'md:w-1/2 xl:w-1/3'} p-6 flex flex-col`">
    <router-link :to="`/food/${data.id}`">
      <img class="hover:grow hover:shadow-lg object-cover w-full h-72" :src="data.imgUrl" />
    </router-link>
    <div class="pt-3 flex items-center justify-between">
      <p class>{{data.name}}</p>
      <a href="#" v-if="(!isFavorites)" @click="addFavorites(data.id)">
        <svg
          class="h-6 w-6 fill-current text-gray-500 hover:text-black"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z"
          />
        </svg>
      </a>
    </div>
    <p class="pt-1 text-gray-900">{{rupiahPrice}}</p>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "ProductCard",
  props: ["data", "from"],
  methods: {
    async addFavorites(FoodId) {
      try {
        await this.$store.dispatch("addFavorites", FoodId);
        this.$router.push("/favorites");
        Swal.fire(
          "Menu has been successfully added to favorites.",
          "",
          "success"
        );
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}!`,
        });
      }
    },
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
    rupiahPrice() {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(this.data.price);
    },
    isFavorites() {
      if (!this.isLogin) return true;
      const favorites = this.$store.state.favorites;
      let isTagged = false;
      favorites.forEach((el) => {
        if (this.data.id === el.FoodId) isTagged = true;
      });
      return isTagged;
    },
  },
};
</script>