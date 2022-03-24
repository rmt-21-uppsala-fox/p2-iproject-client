<template>
    <v-container class="h-100">
    <v-row class="text-center h-100" justify="center" align="center">
      <v-col class="mb-4 text-center">
        <v-container style="width: 80%">
          <v-container>
            <h3 class="mb-5">Thanks for your order!</h3>
            <v-row class="text-left h-100" justify="center" align="center">
              <v-card class="transaction-detail">
                <h5 class="my-2 mx-5">Order ID: {{ this.orderName }}</h5>
                <h5 class="my-2 mx-5">Payment Status: {{ this.paymentStatus }}</h5>
              </v-card>
            </v-row>
            <v-btn
              @click="sendReceipt"
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
    name: "SummaryPage",
    computed: {
    orderName() {
      return this.$store.state.orderName;
    },
    paymentStatus() {
      return this.$store.state.paymentStatus;
    }
  },
}
</script>

<style>

</style>