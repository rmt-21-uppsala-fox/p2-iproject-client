<template>
  <router-link :to="`/transactions/${data.id}`">
    <div class="w-fit p-6 flex flex-col border-2 mb-6 mr-6 hover:shadow-lg">
      <p class="font-bold text-gray-900">{{data.description}}</p>
      <p class="text-gray-900 mt-4">Total amount {{rupiahPrice}}</p>

      <p
        v-if="data.status === 'PAID'"
        class="w-fit bg-green-600 px-4 py-1 rounded-full mt-4 text-white"
      >Payment Success</p>
      <p
        v-else
        class="w-fit bg-yellow-500 px-4 py-1 rounded-full mt-4 text-white"
      >Waiting For Payment</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "TransactionCard",
  props: ["data"],
  computed: {
    rupiahPrice() {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(this.data.amount);
    },
  },
};
</script>