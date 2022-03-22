<template>
<nav class="navbar navbar-expand navbar-light fixed-top bg-light row huge-side-padding">
    <div class="container-fluid col-2">
        <router-link to="/" class="navbar-brand" style="font-size:3rem">L Y F E</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>

    <div class="col-8">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
                <router-link to="/categories" class="nav-link ">CATEGORIES</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/packages" class="nav-link">PACKAGES</router-link>
            </li>
        </ul>
    </div>
    <div class="col-2">
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link to="/checkout" class="nav-link"><i class="fa-solid fa-cart-shopping"></i></router-link>
            </li>
            <li class="nav-item">
                <router-link to="/myAccount" class="nav-link">MY ACCOUNT</router-link>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
