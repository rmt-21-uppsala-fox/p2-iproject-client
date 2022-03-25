<template>
  <div id="app" class="vh-100">
    <NavigationBar></NavigationBar>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/favorites">FavoritesPage</router-link>
      <router-link to="/register">RegisterPage</router-link>
      <router-link to="/login">LoginPage</router-link>
    </nav>
    <router-view />
    <HFooter class=""></HFooter>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import HFooter from 'vue-hacktiv8-footer'
export default {
  components: {
    HFooter,
    NavigationBar
  }
}
</script>

<style>
#app {
  background-color: #bdc3c7;
}
/* 
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
