<template>
  <a :href="cardData.url" target="_blank">
    <div class="cardNews" style="width: 250px">
      <img :src="cardData.img" alt="image News" style="width: 100%" />
      <div class="cardNewscontainer">
        <h4>
          <b>{{ cardData.title }}</b>
        </h4>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "NewsCard",
  props: ["cardData"],
};
</script>

<style>
</style>