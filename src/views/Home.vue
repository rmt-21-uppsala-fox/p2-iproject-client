<template>
  <div class="home">
    <div class="mt-16">
      <h3 class="text-gray-600 text-2xl font-medium">Product</h3>
      <div
        class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-6 px-10"
      >
        <CardProduct
          :product="product"
          v-for="product in products"
          :key="product.id"
        ></CardProduct>
      </div>
    </div>
  </div>
</template>

<script>
import CardProduct from "../components/CardProduct.vue";
export default {
  name: "Home",
  components: {
    CardProduct,
  },

  created() {
    this.getProducts();
  },

  methods: {
    getProducts() {
      this.$store.dispatch("fetchProducts");
    },
  },

  computed: {
    products() {
      console.log(this.$store.state.products);
      return this.$store.state.products;
    },
  },
};
</script>
