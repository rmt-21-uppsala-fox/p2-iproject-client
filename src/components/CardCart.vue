<template>
  <div class="w-3/4 bg-white px-10 py-10">
    <div class="flex justify-between border-b pb-8">
      <h1 class="font-semibold text-2xl">Shopping Cart</h1>
      <h2 class="font-semibold text-2xl">{{ fetchCart.length }} Items</h2>
    </div>
    <div class="flex mt-10 mb-5">
      <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
        Product Details
      </h3>
      <h3
        class="font-semibold text-gray-600 text-xs uppercase w-1/5 "
      >
        Quantity
      </h3>
      <h3
        class="font-semibold text-gray-600 text-xs uppercase w-1/5 "
      >
        Price
      </h3>
      <h3
        class="font-semibold text-gray-600 text-xs uppercase w-1/5"
      >
        Total
      </h3>
    </div>

    <CartProduct
      v-for="(cart, index) in fetchCart"
      :key="index"
      :cartProduct="cart"
    ></CartProduct>

    <a
      @click.prevent="goToHome"
      href="#"
      class="flex font-semibold text-indigo-600 text-sm mt-10"
    >
      <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
        <path
          d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
        />
      </svg>
      Continue Shopping
    </a>
  </div>
</template>

<script>
import CartProduct from "./CartProduct.vue";
export default {
  name: "CardCart",
  components: {
    CartProduct,
  },
  computed: {
    fetchCart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    goToHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style></style>
