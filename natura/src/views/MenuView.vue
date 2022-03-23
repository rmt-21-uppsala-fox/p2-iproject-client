<template>
    <v-container class="h-100" >
    <v-row>
    <v-col :cols="3" class="sidebar-container">
        <h5 class="mb-3">Order Summary</h5>
        <p>Total Item: {{this.totalItem}}</p>
        <p>Total Price: {{this.totalPrice}}</p>
         <v-btn class="primary rounded">PAY</v-btn>      
    </v-col>
      <v-col :cols="9" fluid class="menu-content">
        <div fluid class="container-content" id="category.name" >
        <h5 class="mb-3">Our Menu</h5>
        <v-row dense>
        <MenuCard/>
          <MenuCard v-for="menu in menus" :key="menu.id" :menu="menu" :quantity="0" />
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
        },
        selectedMenu() {
          return this.$store.state.selectedMenu
        },
        totalItem() {
            return this.$store.getters.totalItem
        },
        totalPrice() {
            return this.$store.getters.totalPrice
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
  margin-top: 50% !important;
  position: sticky;
  padding: 20px !important;
  height: 100vh !important;
  max-height: 100vh! important;
  overflow-y: scroll;
}
.sidebar-container p {
  font-size: smaller;
}
.menu-content {
  padding: 10px !important;
  height: 100vh !important;
  max-height: 90vh! important;
  overflow-y: scroll;
  overflow-x: hidden;
}

.menu-content h5 {
  display: flex;
  justify-content: center;
}
</style>