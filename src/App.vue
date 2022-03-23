<template>
  <div id="app">
    <!--====== PRELOADER PART START ======-->
    <div class="hidden preloader">
      <div class="loader">
        <div class="ytp-spinner">
          <div class="ytp-spinner-container">
            <div class="ytp-spinner-rotator">
              <div class="ytp-spinner-left">
                <div class="ytp-spinner-circle"></div>
              </div>
              <div class="ytp-spinner-right">
                <div class="ytp-spinner-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--====== PRELOADER PART ENDS ======-->
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  created: function () {
    this.$store.dispatch("sendCustomEventToServer", {
      message: "Halo from client nih",
    });
  },
  // sockets: {
  //   //untuk mendengarkan ketika ada event connect/connection dari server
  //   //gaboleh pake arrow function
  //   connect: function () {
  //     console.log("Connected", this.$socket);
  //   },
  //   //untuk mendengarkan ketika ada event "disconnect" dari server
  //   disconnect: function () {
  //     console.log("Disconnected", this.$socket);
  //   },
  //   // untuk mendengarkan ketika ada "customeventfromserver"
  //   customEventFromServer: function (payload) {
  //     console.log("customEventFromServer", payload);
  //   },
  // },
  // //menggunakan lifecycle created untuk mengirimkan si customEventFromClient ke server
  // created: function () {
  //   this.$socket.client.emit("customEventFromClient", {
  //     message: "Halo from client!",
  //   });
  // },
};
</script>