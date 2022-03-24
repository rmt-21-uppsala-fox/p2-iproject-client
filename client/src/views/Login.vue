<template>
  <div class="mt-3">
    <div class="relative flex grid grid-cols-1 divide-y text-center ">
      <div class="flex justify-center ">
        <form
          action=""
          @submit.prevent="login"
          class="bg-black shadow-md border border-gray-200 rounded-xl px-8 pt-6 pb-8 mb-4 mt-4 w-1/3"
        >
          <div class="flex justify-center ">
              <div class="w-1/2">
                <img
                  class="w-full"
                  src="../assets/siteLogo.png"
                  alt=""
                  srcset=""
                />
              </div>
          </div>
          <h3 class="font-bold">Login</h3>

          <div class="text-gray-700 md:flex md:items-center py-2">
            <div class="mb-1 md:mb-0 md:w-1/3 bg-red-700 px-2 py-2 rounded mr-2">
              <label for="email" class="font-bold text-white">Email</label>
            </div>
            <div class="md:w-2/3 md:flex-grow">
              <input
              v-model="userData.email"
                class="
                  w-full
                  h-10
                  px-3
                  text-base
                  placeholder-gray-600
                  border
                  rounded-lg
                  focus:shadow-outline
                "
                type="text"
                name="email"
                id="email"
              />
            </div>
          </div>

          <div class="text-gray-700 md:flex md:items-center py-2">
            <div class="mb-1 md:mb-0 md:w-1/3 bg-red-700 px-2 py-2 rounded mr-2">
              <label for="password" class="font-bold text-white">Password</label>
            </div>
            <div class="md:w-2/3 md:flex-grow">
              <input
              v-model="userData.password"
                class="
                  w-full
                  h-10
                  px-3
                  text-base
                  placeholder-gray-600
                  border
                  rounded-lg
                  focus:shadow-outline
                "
                type="password"
                name="password"
                id="password"
              />
            </div>
          </div>
          <div class="mt-3">
            <router-link to="/register">
              <a href="" class="text-white font-bold"> Register </a>
            </router-link>
          </div>

          <div class="text-gray-700 md:flex py-2">
            <div class="md:w-1/2 md:flex-grow">
              <button
                type="submit"
                class="
                  bg-blue-800
                  hover:bg-blue-700
                  text-white
                  font-bold
                  py-2
                  px-4
                  border border-blue-700
                  rounded
                "
              >
                Login
              </button>
            </div>
          </div>

          <!-- <div>
            <GoogleLogin
              class="md:w-1/2 md:flex-grow"
              :params="params"
              :renderParams="renderParams"
              :onSuccess="onSuccess"
              :onFailure="onFailure"
            ></GoogleLogin>
          </div> -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userData: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    async login() {
      console.log(this.userData, "INI USERDATA")
      await this.$store.dispatch("login", this.userData)
    }
  }

}
</script>

<style>

</style>