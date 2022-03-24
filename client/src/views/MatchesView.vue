<template>
  <body>
    <navbar></navbar>
    <!--Comments Section-->
    <matches v-for="match in matches" :key="match.id" :match="match"></matches>
  </body>
</template>

<script>
import Navbar from "../components/navbar.vue";

import Matches from '@/components/Matches.vue';
export default {
  name: "MatchesView",
  components: {
    Navbar,
    Matches
  },
  methods:{
    fetchMatches(){
        this.$store.dispatch("fetchMatches");
    }
  },
  created(){
      this.fetchMatches()
  },
  computed:{
      matches(){
          return this.$store.state.matches
      }
  }
};
</script>

<style></style>
