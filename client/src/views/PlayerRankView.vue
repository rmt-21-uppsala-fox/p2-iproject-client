<template>

  <body>
     <navbar></navbar>
    <!--Topic Section-->
    <div class="topic-container">
      <!--Topic Section-->
      <player-rank v-for="(playerRank, i) in playerRanks" :key="playerRank.player.name" :playerRank="playerRank" :rank="i+1"></player-rank>
    </div>
  </body>
</template>

<script>
import PlayerRank from "../components/PlayerRank.vue";
import Navbar from '../components/navbar.vue';
export default {
  name: "PlayerRankView",
  components: {
    PlayerRank,
    Navbar
  },
  methods: {
    fetchPlayerRank() {
      this.$store.dispatch("fetchPlayerRank");
    },
  },
  created() {
    this.fetchPlayerRank();
  },
  computed: {
    playerRanks() {
      return this.$store.state.playerRank;
    },
  },
};
</script>

<style></style>
