<template>
<div class="home">
    <div class="justify-content-center mt-5 pt-2">
        <span class="pre-title">BEST-SELLING HOUSEHOLD ESSENTIAL</span>
        <br>
        <span class="main-title">Featured Products</span>
    </div>

    <div class="row justify-content-center my-5">
        <ProductCard v-for="productPackage in packages" :key="productPackage.id" :productPackage="productPackage"></ProductCard>
    </div>
</div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
export default {
    name: 'HomeView',
    components: {
        ProductCard
    },
    computed: {
        packages() {
            return this.$store.state.packages
        }
    },
    async created() {
        await this.$store.dispatch('initializeFaceRecognition')
    },
    mounted() {
        this.$store.dispatch('fetchPackages')
    }
}
</script>
