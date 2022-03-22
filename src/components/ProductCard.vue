<template>
<div class="card mx-3 text-left" style="width: 235px; padding:0">
    <img class="card-img-top" :src="productPackage.imgUrl">
    <div class="card-body">
        <h5 class="card-title" v-text="productPackage.name"></h5>
        <p class="card-text" v-text="productPackage.description"></p>

        <div class="row">
            <div class="col-7">
                <p class="text-danger" v-text="productPackage.price"></p>
                <small style="text-decoration: line-through">Rp. 35.000</small>
            </div>
            <div class="col-5">
                <i role="button" @click="addToCart(productPackage)" class="fa-solid fa-cart-plus fa-3x mt-2"></i>
            
            
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: ['productPackage'],
    methods: {
        addToCart(productPackage) {
            this.$store.commit('addToCart', productPackage)
        }
    },
}
</script>

<style>

</style>
