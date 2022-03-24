<template>
  <div
    class="flex justify-center content-center justify-items-center self mt-[20vh] text-white"
  >
    <div
      class="flex flex-col bg-black justify-items-center items-center gap-4 marginBorder justify-center"
    >
      <h5>Please Sign up here</h5>
      <form action="post" @submit.prevent="userRegister">
        <div class="p-2">
          <label for="email">Email Adress</label>
          <input
            type="email"
            id="email"
            placeholder="example@mail.com"
            class="input w-full max-w-xs"
            name="email"
            v-model="user.email"
            required
          />
        </div>
        <div class="p-2">
          <label for="password">Password</label>
          <input
            placeholder="please input 5 to 20 characters"
            class="input w-full max-w-xs"
            type="password"
            id="password"
            name="password"
            v-model="user.password"
            required
          />
        </div>
        <div class="p-2 justify-items-center items-center justify-center">
          <button class="btn btn-active btn-secondary" type="submit">
            Sign up
          </button>
        </div>
      </form>
      <div class="p-2 flex flex-row gap-4">
        <router-link
          to="/login"
          class="btn btn-active btn-secondary btn-sm p-2"
          >Back to login</router-link
        >
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import swal from "sweetalert";
export default {
  name: "registerPage",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      params: {},
    };
  },
  components: {},
  methods: {
    async userRegister() {
      try {
        await this.$store.dispatch(
          "registerUser",
          this.user
        );
        this.$router.push({ name: "loginPage" });
      } catch (err) {
        swal("Error", err.response.data.msg, "error");
      }
    },
  }
};
</script>

<style scoped>
.marginBorder {
  border: double;
  border-radius: 70px;
  width: 50vh;
  height: 50vh;
}

.marginTop {
  margin-top: 30vh;
}
</style>
