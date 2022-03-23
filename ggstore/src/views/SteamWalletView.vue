<template>
  <div class="px-[10%] py-4 flex flex-grow self-stretch justify-center">
    <div
      class="self-strectch flex flex-col my-5 rounded-xl px-11 py-8 gap-3 w-3/4 relative bg-neutral"
    >
      <p class="font-bold text-xl">Steam Wallet</p>

      <!-- card -->
      <div class="flex-grow flex flex-col gap-3">
        <steam-wallet-card
          v-for="card in steamWallet"
          :key="card.id"
          :card="card"
        ></steam-wallet-card>
      </div>
    </div>
  </div>
</template>
import SteamWalletCard from "../components/SteamWalletCard.vue";
<script>
  import SteamWalletCard from "../components/SteamWalletCard.vue";
  export default {
    name: "SteamWalletView",
    components: { SteamWalletCard },
    computed: {
      steamWallet() {
        return this.$store.state.steamWallet || [];
      },
    },
    beforeCreate() {
      this.$store.dispatch("getSteamWallet");
    },
  };
</script>
