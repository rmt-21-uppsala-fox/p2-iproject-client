<template>
  <div id="app">
    <router-view/>
    <HFooter></HFooter>
  </div>
</template>


<script>
import HFooter from 'vue-hacktiv8-footer'

export default {
  components: {
    HFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
