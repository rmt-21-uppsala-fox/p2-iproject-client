<template>
  <div
    class="bg-no-repeat bg-cover bg-center relative"
    style="
      background-image: url(https://www.itl.cat/pngfile/big/7-73802_4k-gaming-wallpapers-1080p-bozhuwallpaper-2017-games.jpg);
    "
  >
    <div
      class="absolute bg-gradient-to-b from-gray-900 to-gray-800 opacity-75 inset-0 z-0"
    ></div>
    <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
      <div
        class="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10"
      >
        <div class="self-start hidden lg:flex flex-col text-white">
          <img src="" class="mb-3" />
          <h1 class="mb-3 font-bold text-5xl">Welcome to Project X</h1>
          <p class="pr-3">
            Project X is the ultimate destination for playing, discussing, and
            creating games.
          </p>
        </div>
      </div>
      <div class="flex justify-center self-center z-10">
        <div class="p-12 bg-white mx-auto rounded-2xl w-100">
          <div class="mb-4">
            <h3 class="font-semibold text-2xl text-gray-800">Sign In</h3>
            <p class="text-gray-500">Please sign in to your account.</p>
          </div>
          <form class="space-y-5" @submit.prevent="onSubmit">
            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700 tracking-wide"
                >Email</label
              >
              <input
                v-model="email"
                class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type="text"
                placeholder="mail@gmail.com"
              />
            </div>
            <div class="space-y-2">
              <label
                class="mb-5 text-sm font-medium text-gray-700 tracking-wide"
              >
                Password
              </label>
              <input
                v-model="password"
                class="w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <button
                type="submit"
                class="w-full flex justify-center bg-sky-600 hover:bg-sky-700 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <div class="pt-5 text-center text-gray-400 text-xs">
            <span>
              Copyright © 2021-2022
              <a
                href="https://codepen.io/uidesignhub"
                rel=""
                target="_blank"
                title="Ajimon"
                class="text-green hover:text-green-500"
                >AJI</a
              ></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async onSubmit() {
      try {
        await this.$store.dispatch("postLogin", {
          email: this.email,
          password: this.password,
        });
        if (localStorage.getItem("access_token")) {
          this.$router.push("/");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
