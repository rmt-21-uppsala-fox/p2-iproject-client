<template>
<div class="row border border-secondary rounded my-2 grid" style="width: 900px">
    <div class="col-1">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
        </div>
    </div>
    <div class="col-2 p-2">
        <img class="card-img-top" src="https://dummyimage.com/180x120/70baff/000000">
    </div>
    <div class="col-6 text-left ">
        <p>Lorem ipsum dolor sit amet.</p>
        <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non fermentum nisi. Sed nec scelerisque.</small>
    </div>
    <div class="col-2 text-left">
        <h6>Every: 40 Days</h6>
        <small>Rp. 24.999</small>
    </div>
    <div class="col-1">
        <span style="color: red"><i class="fa-solid fa-trash-can"></i></span>
    </div>
</div>
</template>

<script>
export default {
    name: 'CheckoutCard'
}
</script>

<style>

</style>
