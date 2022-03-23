<template>
  <div id="app">
    <NavigationBar></NavigationBar>
    <router-view />
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
export default {
  name: "app",
  components: {
    NavigationBar,
  },
};
</script>
