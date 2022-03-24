<template>
  <div>
    <div class="container">
      <nav class="d-flex justify-content-between text-white mb-3">
        <div class="card-header">
          <SideBarTab></SideBarTab>
        </div>
        <div class="card-header">
          <h3>𝕄𝔼𝕄𝔼𝕃𝕆ℝ𝔻</h3>
        </div>
        <div class="card-header">
          <div class="user-menu d-flex">
            <div v-if="isLogin" class="user-name text-end me-3">
              <h3 class="mb-0">{{ username }}</h3>
            </div>
            <div v-if="isLogin">
              <button class="btn btn-dark" @click="doLogout">
                <router-link class="router text-white" to="/"
                  >Logout</router-link
                >
              </button>
            </div>
            <div v-if="!isLogin">
              <button class="btn btn-dark">
                <router-link class="router text-white" to="/login"
                  >Login</router-link
                >
              </button>
              <button class="btn btn-dark ms-3">
                <router-link class="router text-white" to="/register"
                  >register</router-link
                >
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import SideBarTab from "@/components/SideBarTab.vue";
export default {
  name: "NavigationBar",
  methods: {
    async doLogout() {
      const error = await this.$store.dispatch("doLogout");
      if (error) {
        console.log(error); //swal error disini
      }
    },
  },
  components: {
    SideBarTab,
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
    username() {
      return this.$store.state.username;
    },
  },
};
</script>

<style scoped>
.router {
  text-decoration: none;
}
</style>
