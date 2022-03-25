<template>
  <div class="card w-50 bg-base-100 shadow-xl">
    <figure>
      <img :src="`http://localhost:3000/${data.Menu.image}`" alt="Food" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ data.Menu.name }}</h2>
      <p>{{ data.Menu.description }}...</p>
      <h2 class="card-title">Price</h2>
      <p>{{ data.Menu.price }}</p>
      <div class="card-actions justify-end">
        <div>
          <button class="btn btn-primary">Delete Order</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderListCardComp",
  props: ["data"],
  data() {
    return {};
  },
  methods: {
    addOrder(id) {
      this.$store.dispatch("addOrder", id);
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