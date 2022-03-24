<template>
  <tr class="bg-white border-b">
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{{product.name}}</th>
    <td class="px-6 py-4">{{quantity}}</td>
    <td class="px-6 py-4">{{rupiahPrice}}</td>
    <td class="px-6 py-4">{{totalPrice}}</td>
  </tr>
</template>

<script>
export default {
  name: "TableRow",
  props: ["product", "quantity"],
  computed: {
    rupiahPrice() {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(this.product.price);
    },
    totalPrice() {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(this.product.price * this.quantity);
    },
  },
};
</script>