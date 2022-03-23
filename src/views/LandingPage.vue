<template>
  <div class="container text-light px-5 py-3">
    <h1>{{ header }}</h1>
    <table class="table table-hover table-bordered table-sm table-dark">
      <tr>
        <td>Pos.</td>
        <td>Club</td>
        <td>Played</td>
        <td>Win</td>
        <td>Draw</td>
        <td>Lost</td>
        <td>For</td>
        <td>Against</td>
        <td>Points</td>
      </tr>
      <tr v-for="(team, index) in teams" :key="team.id">
        <td>{{ index + 1 }}</td>
        <td>{{ team.name }}</td>
        <td>{{ team["all-matches"].played }}</td>
        <td>{{ team["all-matches"].won }}</td>
        <td>{{ team["all-matches"].drawn }}</td>
        <td>{{ team["all-matches"].lost }}</td>
        <td>{{ team["all-matches"].for }}</td>
        <td>{{ team["all-matches"].against }}</td>
        <td>{{ team["total-points"] }}</td>
      </tr>
    </table>
    <div class="container">
      <div class="row">
        <div class="col">
          <div
            class="container my-auto mt-3 py-3 px-5 overflow-auto text-dark"
            style="background-color: white; height: 40vh"
          >
            <div
              :class="chat.user == currentUser ? 'text-start' : 'text-end'"
              v-for="(chat, index) in chats"
              :key="chat[index]"
            >
              <div>
                <strong>{{ chat.user }}</strong>
              </div>
              <div class="btn btn-outline-dark">{{ chat.message }}</div>
            </div>
          </div>
          <input
            class="mt-3"
            type="text"
            name="chat-box"
            v-model="chatMessage"
            @keyup.enter.prevent="sendChatMessage"
          />
          <button class="btn btn-info ml-1" @click.prevent="sendChatMessage">
            Send
          </button>
        </div>
        <div class="col-1"></div>
        <div class="col">
          <h5>Top Goalscorer</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {
      chatMessage: "",
    };
  },
  computed: {
    header() {
      return this.$store.state.header;
    },
    chats() {
      return this.$store.state.chats;
    },
    currentUser() {
      return this.$store.state.currentuser;
    },
    favLeague() {
      return this.$store.state.favLeague;
    },
    teams() {
      if (this.favLeague == "Premier League") {
        return this.$store.state.eplClubs;
      } else if (this.favLeague == "Serie A") {
        return this.$store.state.itaClubs;
      } else if (this.favLeague == "La Liga") {
        return this.$store.state.spaClubs;
      } else return null;
    },
  },
  created() {
    this.$store.dispatch("findFav");
    switch (this.favLeague) {
      case "Premier League":
        this.$store.dispatch("getEplTable");
        break;
      case "Serie A":
        this.$store.dispatch("getITATable");
        break;
      case "La Liga":
        this.$store.dispatch("getSPATable");
        break;
    }
  },
  methods: {
    sendChatMessage() {
      this.$store.dispatch("sendChatToServer", this.chatMessage);
      this.chatMessage = "";
    },
  },
};
</script>

<style></style>
