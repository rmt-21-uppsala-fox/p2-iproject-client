<template>
  <div class="card w-50 bg-base-100 shadow-xl">
    <figure>
      <img :src="`http://localhost:3000/${data.image}`" alt="Food" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ data.name }}</h2>
      <p>{{ data.description }}...</p>
      <h2 class="card-title">Price</h2>
      <p>{{ data.price }}</p>
      <div class="card-actions justify-end">
        <div>
          <button v-if="restaurantIsLogin" class="btn btn-primary">
            Delete Food
          </button>
        </div>
        <div>
          <button
            v-if="customerIsLogin"
            @click="payment(data.price)"
            class="btn btn-primary"
          >
            Order
          </button>
        </div>
        <button
          class="btn btn-outline btn-warning"
          @click="btnDetailHandler(data.id)"
        >
          Food Details
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardComp",
  props: ["data"],
  data() {
    return {};
  },
  methods: {
    payment(price) {
      this.$store.dispatch("xenditPaymentCreate", {
        amount: price,
      });
    },
    // btnDetailHandler(value) {
    //   this.$store.commit("CHANGE_DETAILS_DATA", this.data);
    //   this.$router.push(`/details/${value}`);
    //   this.$store.commit("CHANGE_INHOME", false);
    //   this.$store.commit("CHANGE_INMYFAVORITE", false);
    // },
    // btnFavouriteHandler(value) {
    //   this.$store.dispatch("addFavoriteList", value);
    // },
  },
  computed: {
    // dataContent() {
    //   let arr = this.data.content.split(" ");
    //   let result = [];
    //   arr.forEach((el, i) => {
    //     if (i < 10) {
    //       result.push(el);
    //     }
    //   });
    //   return result.join(" ");
    // },
    restaurantIsLogin() {
      return this.$store.state.restaurantIsLogin;
    },
    customerIsLogin() {
      return this.$store.state.customerIsLogin;
    },
  },
};
</script>

<style>
</style>