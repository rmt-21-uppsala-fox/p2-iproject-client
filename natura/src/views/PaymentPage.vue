<template>
  <v-container class="h-100">
    <v-row class="text-center ">
     <v-card class="transaction-detail">
        <h5 class="my-2 mx-5">
          Order ID: {{this.orderName}}
        </h5>
      </v-card>
    </v-row>
    <v-row class="my-4">
    <h5>Amount to pay: IDR {{this.totalPrice}}</h5>
    </v-row>
    <v-row class="my-4">
    <h5>ShopeePay</h5><h5>LinkAja</h5><h5>Dana</h5>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name: 'PaymentPage',
    computed: {
        totalItem() {
            return this.$store.getters.totalItem
        },
        totalPrice() {
            return this.$store.getters.totalPrice
        },
        orderName() {
            return this.$store.state.orderName
        }
    },
}
</script>

<style>

</style>