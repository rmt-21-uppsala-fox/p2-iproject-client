<template>
<div class="row border border-secondary rounded my-2 grid" style="width: 900px">
    <div class="col-1">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
        </div>
    </div>
    <div class="col-2 p-2">
        <img class="card-img-top" :src="productPackage.imgUrl">
    </div>
    <div class="col-6 text-left ">
        <p v-text="productPackage.name"></p>
        <small v-text="productPackage.description"></small>
    </div>
    <div class="col-2 text-left">
        <h6>Every: 40 Days</h6>
        <small>Rp. {{productPackage.price}}</small>
    </div>
    <div class="col-1">
        <span role="button" style="color: red"><i class="fa-solid fa-trash-can"></i></span>
    </div>
</div>
</template>

<script>
export default {
    name: 'CheckoutCard',
    props: ['productPackage']
}
</script>

<style>

</style>
