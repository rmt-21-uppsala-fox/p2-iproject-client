<template>
<div id="page_login" class="index pt-4 ">
    <div class="container">
        <div class="col-md-10 mx-md-auto">
            <div class="login-box bg-white pl-lg-5 pl-0">
                <div class="row no-gutters align-items-center">
                    <div class="col-md-6">
                        <div class="form-wrap bg-white">
                            <h1 class="index-title text-center mb-4">Register</h1>
                            <form class="form" v-on:submit.prevent="doRegister">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group position-relative">
                                            <span class="zmdi zmdi-account"></span>
                                            <input v-model="registerData.name" type="text" class="name form-control" placeholder="Name" required>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group position-relative">
                                            <span class="zmdi zmdi-email"></span>
                                            <input v-model="registerData.email" type="email" class="email form-control" placeholder="Email Address" required>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group position-relative">
                                            <span class="zmdi zmdi-key"></span>
                                            <input v-model="registerData.password" type="password" class="password form-control" placeholder="Password" required>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-lg btn-dark col-12 submit">Sign up
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="content text-center">
                            <div class="border-bottom pb-5 mb-5">
                                <h5>Already have an account?</h5>
                                <router-link to="/login" class="btn btn-outline-dark">Log in</router-link>
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
    name: 'RegisterView',
    components: {},
    data() {
        return {
            registerData: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        async doRegister() {
            await this.$store.dispatch('doRegister', {
                name: this.registerData.name,
                email: this.registerData.email,
                password: this.registerData.password
            })
            await this.$router.push('/login')
        }
    }
}
</script>
