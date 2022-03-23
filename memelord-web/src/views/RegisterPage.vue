<template>
  <div>
    <div class="container">
      <section class="">
        <div class="midFlex">
          <div>
            <img
              id="img2"
              src="https://data.whicdn.com/images/164781537/original.gif"
            />
          </div>
          <div class="d-flex mb-3">
            <label style="font-size: x-large"><b>REGISTER</b></label>
          </div>
          <ReusableLoginRegisterForm
            v-on:submit="doRegister"
          ></ReusableLoginRegisterForm>
          <div class="text-center mt-3 text-white">
            Have an account?
            <router-link to="/login"
              ><button class="btn btn-link text-white fw-bold">
                Login here
              </button></router-link
            >
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ReusableLoginRegisterForm from "@/components/ReusableLoginRegisterForm.vue";
export default {
  name: "RegisterPage",
  methods: {
    doRegister(userData) {
      console.log(userData);
    },
  },
  components: {
    ReusableLoginRegisterForm,
  },
};
</script>

<style></style>
