<template>
  <div class="container">
    <div class="" id="register">
      <div class="row justify-content-center mt-5">
        <div
          class="bg-dark col-lg-6 col-md-8 mr-10 col-sm-6"
          style="border-radius: '30px'"
        >
          <div class="text-center text-light border-bottom">
            <h2 class="p-3">Reset Password</h2>
          </div>
          <form @submit.prevent="changePassword" class="form" id="form-reset">
            <div class="mb-2">
              <label for="password-reset" class="form-label text-light"
                >Please fill in with your new password</label
              >
              <input
                type="password"
                class="form-control"
                v-model="password"
                id="password-reset"
              />
            </div>
            <div class="d-grid py-4">
              <button type="submit" class="btn btn-secondary">
                Change Password
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
  name: "Enquiry-Page",
  data() {
    return {
      password: "",
    };
  },
  methods: {
    changePassword() {
      this.$store.dispatch("changePassword", {
        password: this.password,
      });
    },
  },
};
</script>

<style></style>
