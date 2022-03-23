<template>
  <div>
      <NavBar></NavBar>
      <div class="container">
          <div class="row">
              <div class="col-2 ">
                  <SideBar></SideBar>
              </div>
              <div class="col-10 ">
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                  <PostCard v-for="item in posts" :key="item.id" :data="item"></PostCard>
              </div>
          </div>
          
      </div>
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import NavBar from '../components/NavBar.vue'
import PostCard from '../components/PostCard.vue'
export default {
    components:{
        NavBar,
        SideBar,
        PostCard
    },
    created(){
        this.$store.dispatch('getAllRelations',1)
        this.$store.dispatch('getAllPosts',1)
    },
    computed:{
        posts(){
            return this.$store.state.posts
        }
    }
}
</script>

<style scoped>
textarea {
  width: 300px;
  height: 150px;
}
</style>