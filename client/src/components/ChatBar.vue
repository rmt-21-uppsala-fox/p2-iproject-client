<template>
  <div>
      <div class="w-100" v-for="item in chats" :key="item.id">
          <h4 v-if="item.chat && item.sender === nameOfUser" class="text-start">{{item.sender}}</h4>
          <p v-if="item.chat && item.sender === nameOfUser" class="text-start">{{item.chat}}</p>
          <h4 v-if="item.chat" class="text-end">{{item.sender}}</h4>
          <p v-if="item.chat" class="text-end">{{item.chat}}</p>
      </div>
  </div>
</template>

<script>
export default {
    computed:{
        chats(){
            return this.$store.state.chats
        },
        nameOfUser(){
            return this.$state.state.nameOfUser
        }
    }
}
</script>

<style>

</style>