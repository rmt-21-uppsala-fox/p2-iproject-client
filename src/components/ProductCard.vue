<template>
  <div :class="`w-full ${from ? 'md:w-1/3 xl:w-1/4':'md:w-1/2 xl:w-1/3'} p-6 flex flex-col`">
    <router-link :to="`/products/${data.id}`">
      <img class="hover:grow hover:shadow-lg object-cover w-full h-72 border-2" :src="data.imgUrl" />
    </router-link>
    <div class="pt-3 flex items-center justify-between">
      <p class>{{data.name}}</p>
    </div>
    <p class="pt-1 text-gray-900">{{rupiahPrice}}</p>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["data", "from"],
  computed: {
    rupiahPrice() {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(this.data.price);
    },
  },
};
</script>