<template>
  <v-container class="h-100">
    <v-row class="text-center h-100" justify="center" align="center">
      <v-col class="mb-4 text-center">
        <v-container style="width: 80%">
          <v-container>
            <h3 v-if="this.paymentStatus === 'Unpaid'" class="mb-5">Transaction Detail</h3>
            <h3 class="mb-5">Thanks for your order!</h3>
            <v-row class="text-left h-100" justify="center" align="center">
              <v-card class="transaction-detail">
                <h5 class="my-2 mx-5">Order ID: {{ this.orderName }}</h5>
                <h5 v-if="this.paymentStatus === 'Unpaid'" class="my-2 mx-5">Total Items: {{ this.totalItem }}</h5>
                <h5 v-if="this.paymentStatus === 'Unpaid'" class="my-2 mx-5">Amount to Pay: IDR {{ this.totalPrice }}</h5>
                <h5 class="my-2 mx-5">Payment Status: {{ this.paymentStatus }}</h5>
              </v-card>
            </v-row>
            <v-btn 
              v-if="this.paymentStatus === 'Unpaid'"
              @click="payXendit"
              class="
                primary
                rounded-tl-xl rounded-tr-md rounded-br-xl rounded-bl-md
                mt-5
              "
              >Pay Now</v-btn
            >
            <v-btn
              v-if="this.paymentStatus === 'Paid'"
              @click="sentReceipt"
              class="
                primary
                rounded-tl-xl rounded-tr-md rounded-br-xl rounded-bl-md
                mt-5
              "
              >Send Receipt</v-btn
            >
          </v-container>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PaymentPage",
  methods: {
    payXendit() {
      const payload = {
        orderName: this.orderName,
        amount: this.totalPrice
      }
      this.$store.dispatch('payXendit', payload)
    }
  },
  computed: {
    totalItem() {
      return this.$store.getters.totalItem;
    },
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
    orderName() {
      return this.$store.state.orderName;
    },
    paymentStatus() {
      return this.$store.state.paymentStatus;
    }
  },
};
</script>

<style>
</style>