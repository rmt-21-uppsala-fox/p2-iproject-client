<template>
  <div>
    <div
      class="container"
      style="
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 85vh;
        width: 100%;
        overflow-x: hidden;
      "
    >
      <div style="display: flex; justify-content: center; align-items: center">
        <a style="color:black" class="btn btn-success"
          href="https://accounts.spotify.com/authorize?client_id=19049e5d8ae6427c901e89b1599da589&response_type=code&redirect_uri=http://localhost:8081&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
          >Login Spotify</a
        >
      </div>
    </div>
    <HFooter>
    </HFooter>
  </div>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer'
export default {
  name: "LoginSpotifyView",
  components:{HFooter},
    async created() {
      const code = new URLSearchParams(window.location.search).get("code");
      await this.$store.dispatch("login", code);
      if (this.isLogin) {
        this.$router.push("/dashboard");
      }
    },
    beforeCreate(){
      if(localStorage.access_token){
        this.$router.push('/dashboard')
      }
    },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
};
</script>
