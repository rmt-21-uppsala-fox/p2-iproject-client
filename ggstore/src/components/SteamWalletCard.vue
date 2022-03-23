<template>
  <div class="flex rounded-xl border border-slate-700 gap-2 h-16">
    <figure>
      <img :src="card.imageUrl" class="object-cover h-full rounded-l-xl" />
    </figure>
    <div class="flex flex-col justify-evenly flex-grow">
      <p class="text-sm">{{ formatCurrency }}</p>
    </div>

    <a
      target="_blank"
      rel="noopener noreferrer"
      class="btn rounded-l-none btn-success h-full text-xs"
    >
      BUY
    </a>
  </div>
</template>

<script>
  export default {
    name: "SteamWalletCard",
    props: ["card"],
    computed: {
      formatCurrency() {
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(this.card.price);
      },
    },
  };
</script>
