<template>
    <v-container class="h-100" >
    <v-row>
    <v-col :cols="2" class="sidebar-container">
        <p>food</p>
        <p>drink</p>
    </v-col>
      <v-col :cols="10" fluid class="menu-content">
        <div fluid class="container-content" id="category.name" >
        <h5 class="mb-3">Menu</h5>
        <v-row dense>
        <MenuCard/>
          <MenuCard v-for="menu in menus" :key="menu.id" :menu="menu" />
        </v-row>
        </div>
      </v-col >
    </v-row>
  </v-container>
</template>

<script>
import MenuCard from '../components/MenuCard.vue'
export default {
  components: { MenuCard },
    name: "MenuView",
    methods: {
        fetchMenus() {
            this.$store.dispatch("fetchMenus")
        }
    },
    computed: {
        menus() {
            return this.$store.state.menus;
        }
    },
    created() {
        this.fetchMenus()
    }
}
</script>

<style>
.h-100 {
  height: 100%;
}

.image-header {
  height: 4vh;
  width: 10vw;
  margin: 0!important;
}
.sidebar-container {
  position: sticky;
  padding: 0!important;
  height: 100vh !important;
  max-height: 100vh! important;
  overflow-y: scroll;
}
.menu-content {
  padding: 10px !important;
  height: 100vh !important;
  max-height: 90vh! important;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>