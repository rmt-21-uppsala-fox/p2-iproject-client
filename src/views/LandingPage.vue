<template>
  <div>
    <h1>ENGLISH PREMIER LEAGUE TABLE</h1>
    <table>
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
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  created() {
    this.$store.dispatch("getEplTable");
  },
  computed: {
    teams() {
      return this.$store.state.eplClubs;
    },
  },
};
</script>

<style></style>
