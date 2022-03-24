<template>
<div class="row grid w-100">
    <div class="col-8 text-left pb-3">
        <p v-text="productPackage.name"></p>
        <small v-text="productPackage.description"></small>
    </div>
    <div class="col-4 text-nowrap">
        <p>{{formattedPrice}}</p>
    </div>
    <hr style="width: 94%; height:1px">
</div>
</template>

<script>
export default {
    name: 'CheckoutItems',
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
