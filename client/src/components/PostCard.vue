<template>
  <div>
      <img :src="data.imageUrl" >
      <div>
          <h3>{{data.description}}</h3>
      </div>
  </div>
</template>

<script>
export default {
    props:['data']
}
</script>

<style>

</style>