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
          <form @submit.prevent="sendEmail" class="form" id="form-reset">
            <div class="mb-2">
              <label for="email" class="form-label text-light"
                >Please fill in with your email</label
              >
              <input
                type="email"
                class="form-control"
                v-model="email"
                id="email-reset"
              />
            </div>
            <div class="d-grid py-4">
              <button type="submit" class="btn btn-secondary">
                Send Email
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
      email: "",
    };
  },
  methods: {
    sendEmail() {
      this.$store.dispatch("sendEmail", {
        email: this.email,
      });
    },
  },
};
</script>

<style></style>
