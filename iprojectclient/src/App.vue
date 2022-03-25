<template>
  <div id="app">
    <nav>
      <div class="bg-cyan-500">
        <div class="flex gap-4 place-items-center justify-end marginRight">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/menu">Food Recipe</router-link> |
      <button @click="logout" class="text-red-700">log out</button>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    logout(){
      localStorage.clear()
      this.$router.push({name: 'loginPage'})
    }
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
