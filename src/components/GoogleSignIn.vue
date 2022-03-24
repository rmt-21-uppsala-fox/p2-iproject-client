<template>
  <GoogleLogin
    :params="params"
    :onSuccess="onSuccess"
    :renderParams="renderParams"
  ></GoogleLogin>
</template>

<script>
// import axios from "axios";
import GoogleLogin from "vue-google-login";

// import swal from "sweetalert";
export default {
  name: "GoogleSignIn",
  data() {
    return {
      params: {
        client_id:
          "957771440362-cf4kk6emhs08ihbls0ofkglelmcr8c24.apps.googleusercontent.com",
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
      },
    };
  },
  components: {
    GoogleLogin,
  },
  methods: {
    onSuccess(googleUser) {
      this.$store.dispatch("googleSignIn", googleUser);
    },
  },
};
</script>
