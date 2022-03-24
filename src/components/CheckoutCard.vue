<template>
<div class="row border border-secondary rounded my-4 grid" style="width: 900px">
    <div class="col-3 p-3">
        <img class="card-img-top" :src="productPackage.imgUrl" height="130px" style="object-fit: scale-down">
    </div>
    <div class="col-6 text-left ">
        <p v-text="productPackage.name"></p>
        <small v-text="productPackage.description"></small>
    </div>
    <div class="col-2 text-left">
        <h6>{{formattedPrice}}</h6>
    </div>
    <div class="col-1">
        <span role="button" style="color: red"><i class="fa-solid fa-trash-can"></i></span>
    </div>
</div>
</template>

<script>
export default {
    name: 'CheckoutCard',
    props: ['productPackage'],
    computed: {
        formattedPrice() {
            return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0
            }).format(this.productPackage.price);
        },
    }
}
</script>

<style>

</style>
