<template>
  <div>
    <a
      href="https://accounts.spotify.com/authorize?client_id=19049e5d8ae6427c901e89b1599da589&response_type=code&redirect_uri=http://localhost:8081&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
      >Login</a
    >
  </div>
</template>

<script>
export default {
  name: "LoginSpotifyView",
  methods:{
    prelogin(){
      this.$store.dispatch('prelogin', this.email)
    }
  },
  async created() {
    const code = new URLSearchParams(window.location.search).get("code");
    await this.$store.dispatch("login", code);
    if (this.isLogin) {
      this.$router.push("/");
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
};
</script>
