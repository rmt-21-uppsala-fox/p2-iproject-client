<template>
  <!-- Login -->
  <div>
    <section>
      <div class="container h-screen mx-auto">
        <div class="grid grid-cols-10 h-screen place-items-center">
          <div
            class="col-start-2 col-span-8 sm:col-start-2 sm:col-span-8 place-items-center"
          >
            <h2
              class="text-4xl tracking-widest text-white text-opacity-70 text-center uppercase mb-14"
            >
              <p>
                Welcome to <br /><span
                  class="text-white text-opacity-100 text-6xl"
                  >CS FORUM</span
                >
              </p>
            </h2>
            <div class="grid grid-cols-10">
              <div class="col-start-2 col-span-8 sm:col-start-2 sm:col-span-8">
                <h2
                  class="text-white text-opacity-80 text-2xl uppercase text-center mb-7"
                >
                  Login Form
                </h2>
                <div class="card px-10 py-5 sm:px-20 sm:py-10">
                  <form class="mt-8 space-y-6" @submit.prevent="loginHandler">
                    <div class="mb-5">
                      <label for="email-address" class="sr-only"
                        >Email address</label
                      >
                      <input
                        v-model="user.email"
                        id="email-address"
                        name="email"
                        type="email"
                        autocomplete="off"
                        required
                        class="block w-full px-3 py-2 border rounded-sm text-gray-900 focus:outline-none focus:ring focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-lg tracking-wider"
                        placeholder="Email address"
                      />
                    </div>
                    <div>
                      <label for="password" class="sr-only">Password</label>
                      <input
                        v-model="user.password"
                        id="password"
                        name="password"
                        type="password"
                        autocomplete="off"
                        required
                        class="block w-full px-3 py-2 border rounded-sm text-gray-900 focus:outline-none focus:ring focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-lg tracking-wider"
                        placeholder="Password"
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        class="w-full flex justify-center py-2 px-4 border border-transparent text-sm rounded-sm text-white bg-black bg-opacity-80 hover:bg-black hover:bg-opacity-70 focus:outline-none focus:ring focus:border-gray-500 focus:ring-gray-500 text-lg tracking-wider"
                      >
                        Log On
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data (){
    return {
      user:{
        email: '',
        password: ''
      }
    }
  },
  methods:{
    async loginHandler () {
      try {
        const { data } = await this.$store.dispatch('loginHandler', this.user)
        localStorage.setItem('access_token', data.access_token)
        this.$router.push('/')
      } catch (error) {
        console.log(error.response.data)
      }
    }
  }
}
</script>

<style></style>
