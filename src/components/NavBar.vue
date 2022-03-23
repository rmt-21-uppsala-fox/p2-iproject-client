<template>
  <nav id="header" class="w-full bg-gray-100 z-30 top-0 py-1">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between px-6 py-3">
      <label for="menu-toggle" class="cursor-pointer md:hidden block">
        <svg
          class="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </label>
      <input class="hidden" type="checkbox" id="menu-toggle" />

      <div class="hidden md:flex md:items-center md:w-1/3 w-full order-3 md:order-1" id="menu">
        <nav>
          <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            <li>
              <router-link
                to="/"
                class="inline-block no-underline hover:text-black hover:underline py-2"
              >Home</router-link>
            </li>
            <li>
              <router-link
                to="/"
                class="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                href="#"
              >Workshop</router-link>
            </li>
          </ul>
        </nav>
      </div>

      <div class="order-1 md:order-2 md:w-1/3 flex justify-center">
        <a
          class="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
          href="#"
        >
          <img
            src="https://www.pikpng.com/pngl/m/20-204281_car-outline-logo-clipart-best-auto-logo-png.png"
            width="36"
            height="36"
            class="mr-2"
            alt
          />
          FURAUTOPARTS
        </a>
      </div>

      <div class="order-2 md:order-3 flex items-center md:w-1/3 justify-end" id="nav-content">
        <nav>
          <ul
            v-if="!isLogin"
            class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0"
          >
            <li>
              <router-link
                to="/login"
                class="inline-block no-underline hover:text-black hover:underline py-2 px-4"
              >Sign In</router-link>
            </li>
            <li>
              <router-link
                to="/register"
                class="inline-block no-underline hover:text-black hover:underline py-2"
              >Sign Up</router-link>
            </li>
          </ul>
          <ul
            v-else
            class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0"
          >
            <li>
              <router-link
                to="/"
                class="inline-block no-underline hover:text-black hover:underline py-2"
              >My Cart</router-link>
            </li>
            <li>
              <a
                href="#"
                @click.prevent="logoutHandler"
                class="inline-block no-underline hover:text-black hover:underline py-2"
              >Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </nav>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "NavBar",
  methods: {
    logoutHandler() {
      localStorage.clear();
      this.$store.commit("SET_ISLOGIN", false);
      this.$store.commit("FETCH_FAVORITES", []);
      if (this.$route.name !== "menu") {
        this.$router.push("/");
      }
      Swal.fire("Logout success.", "", "success");
    },
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
};
</script>