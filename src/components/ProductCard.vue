<template>
<div class="card mx-3 text-left" style="width: 235px">
    <img class="card-img-top" src="https://dummyimage.com/105x120/70baff/000000">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

        <div class="row">
            <div class="col-7">
                <p class="text-danger">Rp. 24.999</p>
                <small style="text-decoration: line-through">Rp. 35.000</small>
            </div>
            <div class="col-5">
                <i class="fa-solid fa-cart-plus fa-3x mt-2"></i>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'ProductCard'
}
</script>

<style>

</style>
