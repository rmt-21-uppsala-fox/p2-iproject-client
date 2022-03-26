<template>
  <div>
    <div class="mb-4 mt-3">
      <h3 class="text-start">{{ data.description }}</h3>
    </div>
    <div class="mb-4">
      <img :src="data.imageUrl" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style scoped>
img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
</style>
