<template>
  <div class="container mx-auto mt-10">
    <div class="flex shadow-md my-10">
      <CardCart></CardCart>

      <div id="summary" class="w-1/4 px-8 py-10">
        <OrderSumary></OrderSumary>
      </div>
    </div>
  </div>
</template>

<script>
import CardCart from "../components/CardCart.vue";
import OrderSumary from "../components/OrderSumary.vue";

export default {
  name: "Cart",
  components: {
    CardCart,
    OrderSumary,
  },
};
</script>

<style></style>
