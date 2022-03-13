<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <div>
            <!-- Website Logo -->
            <a href="#" class="flex items-center py-4 px-2">
              <img src="logo.png" alt="Logo" class="h-8 w-8 mr-2" />
              <span class="font-semibold text-gray-500 text-lg"
                >KlikShop</span
              >
            </a>
          </div>
          <!-- Primary Navbar items -->
          <div class="hidden md:flex items-center space-x-1">
            <a
              href=""
              class="
                py-4
                px-2
                text-green-500
                border-b-4 border-green-500
                font-semibold
              "
              ><router-link to="/">Home </router-link></a
            >
          </div>
        </div>
        <!-- Secondary Navbar items -->
        <div class="hidden md:flex items-center space-x-3">
          <a
            href=""
            class="
              py-2
              px-2
              font-medium
              text-gray-500
              rounded
              hover:bg-green-500 hover:text-white
              transition
              duration-300
            "
            > <router-link to="/login">Login </router-link></a
          >
          <a
            href=""
            class="
              py-2
              px-2
              font-medium
              text-white
              bg-green-500
              rounded
              hover:bg-green-400
              transition
              duration-300
            "
            > <router-link to="/register">Register </router-link></a
          >
           <a
            href=""
            class="
              py-2
              px-2
              font-medium
              text-white
              bg-green-500
              rounded
              hover:bg-green-400
              transition
              duration-300
            "
            >Logout</a
          >
          <a
            href=""
            class="
              py-2
              px-2
              transition
              duration-300
            "
            ><i class="hover:text-green-600 font-bold text-xl fa fa-shopping-cart" aria-hidden="true"></i></a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>