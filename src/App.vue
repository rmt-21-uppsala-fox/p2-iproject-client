<template>
<div id="app">
    <NavBar></NavBar>
    <router-view />
    <HFooter style="position: fixed; left: 0;bottom: 0; width: 100%; height: 9%"></HFooter>
</div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HFooter from 'vue-hacktiv8-footer'
export default {
    name: 'App',
    components: {
        NavBar,
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
