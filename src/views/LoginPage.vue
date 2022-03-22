<template>
  <div class="" id="login">
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="bg-dark col-lg-6 col-md-8 mr-10 col-sm-6">
          <div class="card-title text-light text-center border-bottom">
            <h2 class="p-3">Login</h2>
          </div>
          <div class="card-body text-light">
            <form @submit.prevent="loginData" class="form" id="form-login">
              <div class="mb-4">
                <label for="username" class="form-label">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="username-login"
                  v-model="username"
                />
              </div>
              <div class="mb-4">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password-login"
                  v-model="password"
                />
              </div>
              <div class="d-grid">
                <button type="submit" class="btn btn-primary" id="btn-login">
                  Login
                </button>
              </div>
            </form>
            <div class="mt-4 inline">
              Don't have an account?
              <router-link to="/register">Sign up here</router-link>
            </div>
            <!-- google sign-in -->
            <div class="mt-3">
              <button>
                <GoogleSignIn></GoogleSignIn>
              </button>
            </div>
            <!-- google sign-in -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios({
          method: "POST",
          url: "http://localhost:3000/login",
          data: { email, password },
        });
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("email");
      } catch (err) {
        console.log(err);
        next(err);
      }
    },
    async register() {
      try {
        const response = await axios({
          method: "POST",
          url: "http://localhost:3000/login",
          data: { email, password },
        });
      } catch (err) {
        console.log(err);
        next(err);
      }
    },
  },
};
</script>

<style>
</style>