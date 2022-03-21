<template>
   <nav class="navbar navbar-expand navbar-light fixed-top bg-light">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">LyFe</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse navbar-right" id="navbarCollapse">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item">
                        <router-link to="/categories" class="nav-link active">Categories</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/packages" class="nav-link">Packages</router-link>
                    </li>

                    <li class="nav-item huge-left-margin">
                        <router-link to="/checkout" class="nav-link"><i class="fa-solid fa-cart-shopping"></i></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/myAccount" class="nav-link">myAccount</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>