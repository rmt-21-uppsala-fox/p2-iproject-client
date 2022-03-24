<template>
  <div class="flex rounded-xl border border-slate-700 gap-2 h-16">
    <figure>
      <img :src="card.imageUrl" class="object-cover h-full rounded-l-xl" />
    </figure>
    <div class="flex flex-col justify-evenly flex-grow">
      <p class="text-sm">{{ formatCurrency }}</p>
    </div>

    <a
      :class="`btn rounded-l-none btn-${
        pendingInvoice ? 'disabled' : 'error'
      } h-full text-xs`"
      @click.prevent="cancelCartItem(cart.id)"
    >
      DELETE
    </a>
  </div>
</template>

<script>
  import { auth } from "../../firebase/firebase";
  export default {
    name: "SteamWalletCard",
    props: ["card", "cart"],
    methods: {
      cancelCartItem(walletId) {
        if (auth.currentUser) {
          this.$store.dispatch("cancelCartItem", walletId);
        } else {
          this.$router.push("/login");
        }
      },
    },
    computed: {
      formatCurrency() {
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(this.card.price);
      },
      pendingInvoice() {
        return this.$store.state.pendingInvoice;
      },
    },
  };
</script>
