<template>
  <div>
    <div class="w-full px-4 py-2 flex items-center">
      <router-link :to="`/products/${product.id}`" class="h-52 w-52 flex items-center">
        <img class="hover:grow hover:shadow-lg border-2" :src="product.imgUrl" />
      </router-link>

      <div class="w-full flex flex-col ml-6">
        <div class="flex flex-col w-full">
          <p class="font-bold text-gray-900">Product Name</p>
          <p class="mt-2">{{product.name}}</p>
        </div>
        <div class="flex w-full mt-4">
          <div class="flex flex-col">
            <p class="font-bold text-gray-900">Quantity</p>
            <p class="mt-2">{{data.quantity}}</p>
          </div>
          <div class="flex flex-col ml-12">
            <p class="font-bold text-gray-900">Price/Item</p>
            <p class="mt-2">{{rupiahPrice}}</p>
          </div>
        </div>
      </div>
      <button
        @click="deleteMyCart(data.id)"
        type="button"
        class="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded text-xs py-2 px-2 text-center mr-2 mb-2 w-auto"
      >Delete</button>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "CartCard",
  props: ["data"],
  computed: {
    product() {
      return this.data.Product;
    },
    rupiahPrice() {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(this.product.price);
    },
  },
  methods: {
    async deleteMyCart(id) {
      await this.$store.dispatch("deleteMyCart", id);
      await this.$store.dispatch("fetchMyCart");
    },
  },
};
</script>