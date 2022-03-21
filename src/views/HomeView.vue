<template>
<div class="home">
    <div class="row justify-content-center">
        <form>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">Search</button>
                </div>
            </div>
        </form>
    </div>
    <div class="justify-content-center">
        <h4>BEST-SELLING HOUSEHOLD ESSENTIAL</h4>
        <h1>Featured Products</h1>
    </div>

    <div class="row justify-content-center">
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
