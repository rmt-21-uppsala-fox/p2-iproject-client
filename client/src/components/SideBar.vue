<template>
<div class="d-flex flex-row bd-highlight mb-3 ">
  <ul class="list-group w-100">
      <!-- <li class="list-group-item list-group-item-secondary"><a href="">Ziady</a></li>
      <li class="list-group-item list-group-item-secondary"><a>Ayu</a></li>
      <li class="list-group-item list-group-item-secondary"><a>Karina</a></li> -->
      <li v-for="item in friends" :key="item.withId" class="list-group-item list-group-item-secondary"><a href="">{{item.User.name}}</a></li>
  </ul>
</div>
</template>

<script>
export default {
    computed:{
        friends(){
            return this.$store.state.friends
        }
    }
}
</script>

<style>

</style>