<template>
  <v-app>
    <v-main>
      <router-view/>
      <HFooter></HFooter>
    </v-main>
  </v-app>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer'
export default {
  name: 'App',
  components: {
    HFooter
  },
  data: () => ({
    //
  }),
};
</script>
