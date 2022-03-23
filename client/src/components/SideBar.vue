<template>
<div>
    <div><h3>Friends</h3></div>
<div class="d-flex flex-row bd-highlight mb-3 ">
  <ul class="list-group w-100">
      <!-- <li class="list-group-item list-group-item-secondary"><a href="">Ziady</a></li>
      <li class="list-group-item list-group-item-secondary"><a>Ayu</a></li>
      <li class="list-group-item list-group-item-secondary"><a>Karina</a></li> -->
      <li @click.prevent="getAllMessage(item.User.id)" v-for="item in friends" :key="item.withId" class="list-group-item list-group-item-secondary"><a class="nav-link text-start" href="">{{item.User.name}}</a></li>
  </ul>
</div>
</div>
</template>

<script>
export default {
    computed:{
        friends(){
            return this.$store.state.friends
        }
    },
    methods:{
        getAllMessage(id){
            this.$store.dispatch('getAllMessage',id)
        }
    }
}
</script>

<style>

</style>