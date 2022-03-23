<template>
  <div>
      <NavBar></NavBar>
      <div class="container">
          <div class="row">
              <div class="col-3 bg-primary"></div>
              <div class="col-9 bg-danger"></div>
          </div>
          
      </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
export default {
    components:{
        NavBar
    }
}
</script>

<style>

</style>