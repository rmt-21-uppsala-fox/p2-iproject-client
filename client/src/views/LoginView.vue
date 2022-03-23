<template>
<div>
    <form @submit.prevent="login">
  <input type="text" placeholder="email" v-model="email">
  <input type="password" placeholder="password">
  <button type="submit">Login</button>
    </form>
</div>
</template>

<script>
export default {
    name:"LoginView",
    data(){
        return{
            email:""
        }
    },
    methods:{
        async login(){
            await this.$store.dispatch('prelogin', this.email)
            if(this.isPreLogin){
                this.router.push('/loginSpotify')
            }
        }
    },
    computed:{
        isPreLogin(){
            return this.$store.state.isPreLogin
        }
    }
}
</script>

<style>

</style>