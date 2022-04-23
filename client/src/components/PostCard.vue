<template>
  <div class="rounded bg-light border border-5 mb-3">
      <div class="d-flex border b-5">
        <div class="text-start ms-3 mt-3 mb-2">
          <img class="rounded-circle border border-dark border-2 img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKTCvhbnqwyIbeN8eZAzlzb9s9d6LBnNWsw&usqp=CAU" />
        </div>
        <div class="text-start mt-3 ms-2">
          <h4>{{getName()}}</h4>
          <p id="created">{{ date }}</p>
        </div>
      </div>
      <div id="desc" class="w-100">
        <p class="ms-3 me-3 mt-1">{{ data.description }}</p>
      </div>
    <div class="mb-4 p-3">
      <img class="rounded img2" :src="data.imageUrl" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  computed: {
    date() {
      return this.data.createdAt.slice(0, 10);
    },
    CurrentUserId(){
      return this.$store.state.UserId
    },
    friendsIds(){
      return this.$store.state.friends
    }
  },
  methods:{
    getName(){
      let name 
      if(this.data.UserId === this.CurrentUserId){
        name = this.$store.state.NameOfUser
      }
      else{
        if(this.friendsIds.length){
          name = this.friendsIds.filter(e=> e.User.id === this.data.UserId)[0].User.name
        }
      }
      return name
    }
  }
};
</script>

<style scoped>
.img1 {
  width: 50px;
}

.img2 {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
P {
  text-align: justify;
  text-justify: inter-word;
}

#desc {
  text-align: justify;
  text-justify: auto;
}

#created {
  font-size: 12px;
}
</style>
