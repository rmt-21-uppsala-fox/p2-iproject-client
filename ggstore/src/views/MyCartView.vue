<template>
  <div class="px-[10%] py-4 flex flex-grow self-stretch justify-center">
    <div
      class="self-strectch flex flex-col my-5 rounded-xl px-11 py-8 gap-3 w-3/4 relative bg-neutral"
    >
      <p class="font-bold text-xl">My Cart</p>

      <!-- card -->
      <div class="flex-grow flex flex-col gap-3">
        <my-cart-card
          v-for="card in myCart"
          :key="card.id"
          :card="card.WalletCard"
          :cart="card"
        ></my-cart-card>
        <hr />
        <span class="ml-auto">{{ myCartTotalPrice }}</span>
        <button
          :class="`btn btn-secondary ${processCheckout ? 'loading' : ''}`"
          v-if="!pendingInvoice"
          @click.prevent="checkoutCart"
        >
          Checkout
        </button>
        <a
          class="btn btn-primary"
          :href="pendingInvoice.invoice_url"
          v-if="pendingInvoice"
        >
          Pay with Xendit
        </a>
        <button
          class="btn btn-error"
          v-if="pendingInvoice"
          @click.prevent="cancelInvoice(pendingInvoice.id)"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  import MyCartCard from "../components/MyCartCard.vue";
  export default {
    name: "SteamWalletView",
    components: { MyCartCard },
    data() {
      return {
        processCheckout: false,
      };
    },
    methods: {
      checkoutCart() {
        this.processCheckout = true;
        this.$store.dispatch("checkoutCart");
      },
      async cancelInvoice(id) {
        await this.$store.dispatch("cancelInvoice", id);
        this.$router.push("/steam-wallet");
      },
    },
    computed: {
      myCart() {
        return this.$store.state.myCart || [];
      },
      myCartTotalPrice() {
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(this.$store.state.myCartTotalPrice);
      },
      pendingInvoice() {
        return this.$store.state.pendingInvoice;
      },
    },
    beforeCreate() {
      this.$store.dispatch("getMyCart");
    },
  };
</script>
