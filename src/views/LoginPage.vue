<template>
  <div class="container mt-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6">
        <div class="card px-5 py-5" id="form1">
          <form class="form-data" @submit.prevent="login">
            <div class="forms-inputs mb-4">
              <span>Email</span>
              <input
                autocomplete="off"
                type="text"
                v-model="loginCred.email"
                v-bind:class="{
                  'form-control': true,
                }"
              />
            </div>
            <div class="forms-inputs mb-4">
              <span>Password</span>
              <input
                autocomplete="off"
                type="password"
                v-model="loginCred.password"
                v-bind:class="{
                  'form-control': true,
                }"
              />
            </div>
            <div class="mb-3">
              <button type="submit" class="btn btn-dark w-100">Login</button>
              <router-link to="/register"
                ><button class="btn btn-dark w-100 mt-2">
                  Register Your Account
                </button></router-link
              >
            </div>
          </form>
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
      loginCred: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch("login", this.loginCred);

        if (this.isLogin) {
          this.$router.push({ name: "AnimesPage" });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
body {
  background: #000;
}

.card {
  border: none;
  height: 320px;
}

.forms-inputs {
  position: relative;
}

.forms-inputs span {
  position: absolute;
  top: -18px;
  left: 10px;
  background-color: #fff;
  padding: 5px 10px;
  font-size: 15px;
}

.forms-inputs input {
  height: 50px;
  border: 2px solid #eee;
}

.forms-inputs input:focus {
  box-shadow: none;
  outline: none;
  border: 2px solid #000;
}

.btn {
  height: 50px;
}

.success-data {
  display: flex;
  flex-direction: column;
}

.bxs-badge-check {
  font-size: 90px;
}
</style>