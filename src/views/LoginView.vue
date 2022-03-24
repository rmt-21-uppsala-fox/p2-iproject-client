<template>
<div id="page_login" class="index pt-1 mt-4">
    <div class="container">
        <div class="col-md-10 mx-md-auto">
            <div class="login-box bg-white pl-lg-5 pl-0">
                <div class="row no-gutters align-items-center">
                    <div class="col-md-6">
                        <div class="form-wrap bg-white">
                            <h1 class="index-title text-center mb-4">Log in</h1>
                            <form class="form" v-on:submit.prevent="doLogin">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group position-relative">
                                            <span class="zmdi zmdi-email"></span>
                                            <input v-model="loginData.email" type="email" class="email form-control" placeholder="Email Address">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group position-relative">
                                            <span class="zmdi zmdi-key"></span>
                                            <input v-model="loginData.password" type="password" class="password form-control" placeholder="Password">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-lg btn-dark col-12 submit">Log in
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="content text-center">
                            <div class="border-bottom pb-4 mb-5">
                                <h5>Don't have an account?</h5>
                                <router-link to="/register" class="btn btn-outline-dark">Sign up</router-link>
                            </div>
                            <h5 class="mb-4 mt-n1">"Take control of your LYFE"</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="text-center pt-5">
        <p>©TomTheDeveloper11 2022</p>
    </div>
</div>
</template>

<script>
export default {
    name: 'LoginView',
    components: {},
    data() {
        return {
            loginData: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        async doLogin() {
            await this.$store.dispatch('doLogin', {
                email: this.loginData.email,
                password: this.loginData.password
            })
            await this.$store.dispatch('fetchPackages')
            await this.$router.push('/')
        }
    }
}
</script>
