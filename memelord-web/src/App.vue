<template>
  <div id="app" class="container1">
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

<style>
.midFlex {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
}

label {
  color: white;
}

#img1 {
  width: 250px;
  height: 250px;
}
#img2 {
  width: 100px;
  height: 100px;
}
.container1 {
  background-color: black;
  min-height: 100vh;
  max-width: auto;
  max-height: auto;
  margin: 0;
}

p {
  max-width: fit-content;
  text-align: left;
}

#profile {
  display: flex;
  justify-content: flex-end;
}
</style>
