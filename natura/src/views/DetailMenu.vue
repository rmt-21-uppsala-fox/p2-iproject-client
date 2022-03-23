<template>
  <v-container class="h-100 ">
    <v-row class="container-detail ">
        <v-img
        :src="`http://localhost:3000/${dataMenu.image}`"      
        class="white--text align-end menu-poster"
        height="100%"
        width="100%"
        rounded
        >
        </v-img>

    </v-row>
    <v-container class="mt-5 detail-content">
        <h5 class="image-placeholder">
            {{dataMenu.name}}
        </h5>    
        <p>{{dataMenu.description}}</p>
        <h5>IDR: <i>{{dataMenu.price}}</i></h5>
    </v-container>
    <v-row dense class="action-button">
        <v-btn
            elevation="1"
            x-small
            fab
            icon
            @click="minusQuantity()"

        >
            <v-icon>mdi-minus</v-icon>
        </v-btn>

        <input v-model="quantity" class="text-input" />
        <v-btn
            elevation="1"
            x-small
            fab
            icon
            @click="addQuantity()"

        >
            <v-icon>mdi-plus</v-icon>
        
    </v-btn>
        <v-btn         
            class="bt-addBasket mt-3"
            outlined
            rounded
            text
            elevation="1"
            block
            @click="addToBasket()"

        >
            Add to Basket
        </v-btn>
  
    </v-row >
  </v-container>
</template>

<script>
export default {
    name: "DetailMenu",
    props: ['dataMenu'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        addQuantity() {
            this.quantity++
        },
        minusQuantity() {
            if(this.quantity !== 0) {
                this.quantity--
            }
        },
        addToBasket() {
            let totalQ = this.quantity
            let totalP = totalQ * this.dataMenu.price
            console.log(totalQ, totalP)
            let newSelectedMenu = [...this.selectedMenu]
            newSelectedMenu.push({
                MenuId: this.dataMenu.id,
                quantity: totalQ,
                totalPrice: totalP
            })
            if(this.quantity > 0) {
                this.$store.commit('SET_SELECTED_MENU', newSelectedMenu)
                this.$router.push('/menus')
            }
        }
    },
    computed: {
        selectedMenu () {
            return this.$store.state.selectedMenu
        }
    }
}
</script>

<style>
.action-button {
    display: flex;
    justify-content: center;
}
</style>