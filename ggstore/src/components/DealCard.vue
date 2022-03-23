<template>
  <div class="flex rounded-xl border border-slate-700 gap-2 h-16">
    <figure>
      <img :src="deal.thumb" class="object-cover h-full rounded-l-xl" />
    </figure>
    <div class="flex flex-col justify-evenly flex-grow">
      <p class="text-sm">{{ deal.title }}</p>
      <p class="text-xs">Savings: {{ round(deal.savings) }}%</p>
    </div>
    <div class="flex items-end flex-col justify-evenly mr-2">
      <p class="text-sm">$ {{ deal.salePrice }}</p>
      <p class="text-xs line-through">$ {{ deal.normalPrice }}</p>
    </div>
    <a
      :href="`https://store.steampowered.com/app/` + deal.steamAppID"
      target="_blank"
      rel="noopener noreferrer"
      class="btn rounded-l-none btn-primary h-full text-xs"
    >
      Check on <br />
      steam
    </a>
  </div>
</template>

<script>
  export default {
    name: "DealCard",
    props: ["deal"],
    methods: {
      round(num) {
        return Math.round(num);
      },
    },
  };
</script>

<style lang="scss" scoped></style>
