<template>
  <div>
    <div class="card w-96 shadow-xl area bg-slate-800 h-100 cardCustom text-white">
  <figure><img :src="singleMenu.image" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{{singleMenu.label}}</h2>
    <p>Total calories: {{singleMenu.calories}}</p>
    <p>Dish type: {{singleMenu.dishType[0]}}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'cardEdamam',
  props: ["singleMenu"]
}
</script>

<style scoped>

.cardCustom{
  overflow: hidden;
  position: relative;
}

.autoText{
  text-overflow: ellipsis;
  overflow: hidden;
  /* white-space: nowrap; */
}

.area {
  border: 5vh;
  border-radius: 40px;
}

</style>
