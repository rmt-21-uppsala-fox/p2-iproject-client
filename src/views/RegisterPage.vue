<template>
  <div class="container">
    <div class="" id="register">
      <div class="row justify-content-center mt-5">
        <div
          class="bg-dark col-lg-6 col-md-8 mr-10 col-sm-6"
          style="border-radius: '30px'"
        >
          <div class="text-center text-light border-bottom">
            <h2 class="p-3">Register New Account</h2>
          </div>
          <form @submit.prevent="registerData" class="form" id="form-register">
            <div class="mb-2">
              <label for="email" class="form-label text-light">Email</label>
              <input
                type="email"
                class="form-control"
                v-model="email"
                id="email-register"
              />
            </div>
            <div class="mb-2">
              <label for="name" class="form-label text-light">Name</label>
              <input
                type="text"
                class="form-control"
                v-model="name"
                id="name-register"
              />
            </div>
            <div class="mb-2">
              <label for="password" class="form-label text-light"
                >Password</label
              >
              <input
                type="password"
                class="form-control"
                id="password-register"
                v-model="password"
              />
            </div>
            <div class="d-grid py-4">
              <button type="submit" class="btn btn-secondary">
                Create New Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register-Page",
  data() {
    return {
      email: "",
      name: "",
      password: "",
    };
  },
  methods: {
    registerData() {
      this.$store.dispatch("register", {
        email: this.email,
        name: this.name,
        password: this.password,
      });
    },
  },
};
</script>

<style></style>
