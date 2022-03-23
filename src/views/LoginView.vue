<template>
    <div class="flex flex-col items-center justify-center h-screen">
        <div class="w-full max-w-sm">
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <h1 class="text-center font-bold text-2xl mb-2">Login</h1>
                    <form method="post" @submit.prevent="postLogin">
                        <div class="mb-4">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="email"
                            >
                                Email
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="text"
                                v-model="userData.email"
                                placeholder="Email@mail.com"
                            />
                        </div>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="password"
                            >
                                Password
                            </label>
                            <input
                                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                v-model="userData.password"
                                placeholder="******************"
                            />
                        </div>
                        <div class="flex items-center justify-between">
                            <button
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Login
                            </button>
                            <a
                                class="bg-red-500 hover:bg-red-700 text-white hover:cursor-pointer font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                @click.prevent="googleSignInVue"
                            >
                                Google
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import swal from 'sweetalert';

export default {
    name: 'LoginView',
    data() {
        return {
            userData: {
                email: '',
                password: '',
            },
        };
    },
    methods: {
        async postLogin() {
            try {
                await this.$store.dispatch('postLogin', this.userData);
                this.$router.push('/');
            } catch (err) {
                typeof err.response.data.msg === 'string'
                    ? swal('Error!', err.response.data.msg, 'error')
                    : swal('Error!', err.response.data.msg.join('\n'), 'error');
            }
        },
    },
};
</script>

<style></style>
