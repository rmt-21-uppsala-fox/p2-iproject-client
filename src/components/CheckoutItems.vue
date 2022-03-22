<template>
<div class="row grid">
    <div class="col-8 text-left py-3">
        <p v-text="productPackage.name"></p>
        <small v-text="productPackage.description"></small>
    </div>
    <div class="col-4">
        <p>Rp. {{productPackage.price}}</p>
    </div>
    <hr style="width: 94%">
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
