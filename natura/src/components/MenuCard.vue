<template>
  <v-col>
    <v-card
      class="mx-auto rounded-lg mb-4 menu-card"
      flat
      rounded=""
    >
    
      <v-img
        :src="`https://natura-iproject.herokuapp.com/${menu.image}`"
        class="white--text align-end menu-img"
        height="100px"
        width="100px"
        @click="menuDetail()"
      >
      </v-img>
      <div class="p-text">
      <p class="menu-name" v-text="menu.name"></p>
      <p class="menu-price" v-text="`IDR ${menu.price}`"></p>
      </div>
    </v-card>
  </v-col>
</template>

<script>
export default {
    name: "MenuCard",
    props: ['menu', 'initialQuantity'],
    data() {
      return {
        quantity: this.initialQuantity ? this.initialQuantity : 0
      }
    },
    methods: {
      menuDetail() {
        this.$router.push({
          name: 'detail',
          params: {
            dataMenu: this.menu
          }
        })
      }
    }
}
</script>

<style>
.action-selected-menu {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.text-input {
   width: 2rem !important; 
   outline: none !important;
   text-align: center;
}
.right-bottom-card {
    display: flex;
    justify-content: space-between !important;
}
.menu-card {
  border: none !important;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  
}
.menu-card p {
  font-size: x-small !important;
  text-align: center;
}
.menu-title {
  font-family: 'Lekton';
  font-weight: 900;
  font-size: 1.8rem;
  letter-spacing: 0.05rem;
}

.menu-btn {
  border: tomato;
}

.menu-text {
  font-family: 'Montserrat';
}
.menu-img {
  border-radius: 20px !important;
}

.p-text p {
    margin-top: 0px;
    margin-bottom: 0px !important;
    padding: 2px !important;
}

.menu-name {
    margin-top: 10px !important;
    font-weight: bold;
}

.menu-price {
    font-style: italic;
}

</style>