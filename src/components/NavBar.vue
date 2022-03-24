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
            <li v-if="$store.state.isLoggedIn" class="nav-item">
                <a role="button" @click.prevent="doLogout" class="nav-link ">LOGOUT</a>
            </li>
            <li v-if="$store.state.isLoggedIn === false" class="nav-item">
                <router-link to="/login" class="nav-link ">LOGIN</router-link>
            </li>
            <li v-if="$store.state.isLoggedIn === false" class="nav-item">
                <router-link to="/register" class="nav-link ">REGISTER</router-link>
            </li>

        </ul>
    </div>
    <div class="col-2">
        <ul class="navbar-nav">
            <li class="nav-item ml-5">
                <router-link to="/checkout" class="nav-link"><i class="fa-solid fa-cart-shopping"></i></router-link>
            </li>
            <li class="nav-item text-nowrap">
                <router-link to="/myAccount" class="nav-link">MY PROFILE</router-link>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
export default {
    name: 'NavBar',
    methods: {
        doLogout() {
            this.$store.commit('doLogout')
            this.$router.push('/login')
        },
    },
    created() {
        if (this.$store.state.isLoggedIn === false) {
            if (localStorage.access_token) {
                this.$store.commit('setIsLoggedIn')
            }
        }
    }
}
</script>

<style>

</style>
