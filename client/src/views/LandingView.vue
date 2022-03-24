<template>
  <div>
    <nav>
      <input type="text" v-model="search" />
      <button class="btn btn-primary" @click="searchSong">Search</button>
      <button class="btn btn-danger" @click="logout">Logout</button>
    </nav>
    <div
      style="
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 70vh;
        width: 100%;
        overflow-x: hidden;
      "
    >
      <table v-if="dataSong.length > 0" class="table">
        <tr>
          <th>Artist</th>
          <th>Action</th>
        </tr>
        <tr v-for="item in dataSong" :key="item.id">
          <td>{{ item.artists[0].name }}</td>
          <td>
            <button @click="playsong(item)" class="btn btn-danger">Play</button>
          </td>
        </tr>
      </table>
      <p v-if="lirik">{{ lirik }}</p>
    </div>
    <HFooter> </HFooter>
  </div>
</template>

<script>
import HFooter from "vue-hacktiv8-footer";
export default {
  name: "LandingView",
  components: { HFooter },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchSong() {
      this.$store.dispatch("player", this.search);
    },
    playsong(song) {
      this.$store.dispatch("playsong", song);
      this.$store.dispatch("getLyric", song);
    },
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
  beforeCreate(){
    if(!localStorage.access_token){
      this.$router.push('/login')
    }
  },
  computed: {
    dataSong() {
      return this.$store.state.dataSong;
    },
    lirik() {
      return this.$store.state.lirik;
    },
  },
};
</script>

<style>
</style>