<template>
  <div class="row">
    <div class="col-6">
      <img src="../assets/loginPageLogo.png" alt="" srcset="" />
    </div>
    <div class="col-6 bg-light text-center p-5 align-middle">
      <button @click.prevent="googleLogin" type="button" class="btn btn-success mt-5 mb-3 w-50">Login with Google</button>
      <div class="mt-2">
        <h4>Or</h4>
      </div>
      <!-- <button type="button" class="btn btn-primary mt-3 mb-3 w-50">Login with Facebook</button> -->
      <facebook-login class="button" appId="5701988216483651" @login="getUserData" @logout="onLogout" @get-initial-status="getUserData"> </facebook-login>
    </div>
  </div>
</template>

<script>
import facebookLogin from "facebook-login-vuejs";
import Vue from "vue";
import swal from "sweetalert";
export default {
  components: {
    facebookLogin,
  },
  methods: {
    googleLogin() {
      Vue.googleAuth().directAccess();
      Vue.googleAuth().signIn(
        async (googleUser) => {
          const id_token = await googleUser.getAuthResponse().id_token;
          const resp = await this.$store.dispatch("googleLogin", { id_token: id_token });
          localStorage.setItem("token", resp.data.token);
          //   fetchNameAndId
          this.$store.dispatch("fetchNameAndId");
          //   this.$store.commit("CHANGE_USERID", resp.data.UserId);
          //   this.$store.commit("FETCH_NAMEOFUSER", resp.data.name);
          swal('logged in')
          this.$router.push("/");
        },
        function (error) {
          // things to do when sign-in fails
          //   console.log(error);
          swal(error.response.data.message);
        }
      );
    },
    async getUserData(fbUser) {
      // console.log(fbUser.response.authResponse.accessToken);
      try {
        console.log('>>>>',fbUser.response.authResponse.accessToken);
        const resp = await this.$store.dispatch("facebookLogin", { accessToken: fbUser.response.authResponse.accessToken });
        localStorage.setItem("token", resp.data.token);
        this.$store.dispatch("fetchNameAndId");
        swal('logged in')
        this.$router.push("/");
      } catch (error) {
        swal(error.response.data.message);
      }
    },
    onLogout(){

    }
  },
};
</script>

<style scoped>
img {
  width: 1000px;
  height: 625px;
}
</style>
