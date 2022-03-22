<template>
<div class="row grid w-100">
    <div class="col-8 text-left pb-3">
        <p v-text="productPackage.name"></p>
        <small v-text="productPackage.description"></small>
    </div>
    <div class="col-4 text-nowrap">
        <p>Rp. {{productPackage.price}}</p>
    </div>
    <hr style="width: 94%; height:1px">
</div>
</template>

<script>
export default {
    name: 'CheckoutItems',
    props: ['productPackage']
}
</script>

<style>

</style>
