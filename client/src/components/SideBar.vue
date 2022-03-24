<template>
  <div class="md:flex w-2/5 md:w-1/6 min-h-screen border-r hidden bg-[#021c1e]">
    <div class="mx-auto py-10">
      <h1
        class="text-2xl font-bold mb-10 cursor-pointer text-[#EC5252] duration-150"
      >
        Project X
      </h1>
      <ul>
        <li
          class="flex space-x-2 mt-10 cursor-pointer text-gray-400 hover:text-[#EC5252] duration-150"
        >
          
          <span class="font-semibold" @click="GoToHome">Home</span>
        </li>
        <li
          class="flex space-x-2 mt-10 cursor-pointer text-gray-400 hover:text-[#EC5252] duration-150"
        >
         
          <span class="font-semibold" @click="GoToUpcoming"
            >Next Week Release</span
          >
        </li>
        <li
          class="flex space-x-2 mt-10 cursor-pointer text-gray-400 hover:text-[#EC5252] duration-150"
        >
          
          <span class="font-semibold" @click="GoToCollection" v-if="isLogin">Wishlist</span>
        </li>
        <li
          class="flex space-x-2 mt-10 cursor-pointer text-gray-400 hover:text-[#EC5252] duration-150"
        >
          
          <span class="font-semibold" v-if="isLogin">Collection</span>
        </li>
        
        
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async GoToUpcoming() {
      try {
        this.$router.push(`/discover`);
      } catch (err) {
        console.log(err);
      }
    },
    async GoToHome() {
      try {
        this.$router.push(`/`);
      } catch (err) {
        console.log(err);
      }
    },
    async GoToCollection() {
      try {
        this.$router.push(`/collection`);
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    isLogin() {
      if(localStorage.getItem`access_token`) {
        return true;
      } else {
        return false
      }
    },
  },
};
</script>
