<template>
  <div>
      <NavBar></NavBar>
      <div class="container">
          <div class="row">
              <div class="col-2 ">
                  <SideBar></SideBar>
              </div>
              <div class="col-10 bg-danger"></div>
          </div>
          
      </div>
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import NavBar from '../components/NavBar.vue'
export default {
    components:{
        NavBar,
        SideBar
    },
    created(){
        this.$store.dispatch('getAllRelations',1)
    }
}
</script>

<style>

</style>