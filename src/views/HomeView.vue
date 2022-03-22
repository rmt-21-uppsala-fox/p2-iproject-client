<template>
<div class="home">
    <form>
        <div class="input-group my-5 w-50 mx-auto">
            <input type="text" class="form-control" placeholder="Search Products">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">Search</button>
            </div>
        </div>
    </form>
    <div class="justify-content-center">
        <span class="pre-title">BEST-SELLING HOUSEHOLD ESSENTIAL</span>
        <br>
        <span class="main-title">Featured Products</span>
    </div>

    <div class="row justify-content-center my-5">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
    </div>
</div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
export default {
    name: 'HomeView',
    components: {
        ProductCard
    }
}
</script>
