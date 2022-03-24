<template>
  <div>
    <img  v-for="trip in trips" :key="trip.id" :src="trip.imgUrl" />
    <!-- <img src="https://placeimg.com/200/200/any?3"> -->

  </div>
</template>

<script>
export default {
    name: "CardTrip",
    props: ["trips"]
}
</script>

<style>

</style>