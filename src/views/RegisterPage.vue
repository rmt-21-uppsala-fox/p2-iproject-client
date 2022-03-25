<template>
  <div class="container mt-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6">
        <div class="card px-5 py-5" id="form1">
          <form class="form-data" @submit.prevent="register">
            <div class="forms-inputs mb-4">
              <span>Email</span>
              <input
                autocomplete="off"
                type="text"
                v-model="regData.email"
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
                v-model="regData.password"
                v-bind:class="{
                  'form-control': true,
                }"
              />
            </div>
            <div class="mb-3">
              <button type="submit" class="btn btn-dark w-100">Register</button>
              <router-link to="/login"
                ><button class="btn btn-dark w-100 mt-2">
                  Back to Login Page
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
  name: "RegisterPage",
  data() {
    return {
      regData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async register() {
      try {
        await this.$store.dispatch("register", this.regData);
        this.$router.push({ name: "LoginPage" });
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