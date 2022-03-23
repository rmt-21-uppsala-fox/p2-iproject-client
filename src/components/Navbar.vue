<template>
    <div id="app">
        <nav class="bg-gray-800 p-6 fixed w-[100%] z-50">
            <div class="container mx-auto px-6 md:px-0">
                <div class="flex items-center justify-between flex-wrap">
                    <div
                        class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
                    >
                        <div class="text-sm lg:flex-grow">
                            <router-link
                                class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-blue-300 mr-4"
                                to="/"
                                >Home</router-link
                            >

                            <router-link
                                class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-blue-300 mr-4"
                                to="/bookmark"
                                >Bookmark</router-link
                            >
                            <router-link
                                class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-blue-300 mr-4"
                                to="/register"
                                >Register</router-link
                            >
                        </div>
                    </div>
                    <div>
                        <router-link
                            class="inline-block text-sm px-4 py-2 leading-none border rounded text-blue-200 border-blue-300 hover:border-transparent hover:text-blue-500 hover:bg-blue-100 mt-4 lg:mt-0"
                            to="/login"
                            >login</router-link
                        >
                    </div>
                    <div>
                        <button
                            @click="getLogout"
                            class="inline-block ml-3 text-sm px-4 py-2 leading-none border rounded text-blue-200 border-blue-300 hover:border-transparent hover:text-blue-500 hover:bg-blue-100 mt-4 lg:mt-0"
                        >
                            logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        <router-view />
    </div>
</template>

<script>
import swal from 'sweetalert';
export default {
    name: 'NavbarComponent',
    methods: {
        getLogout() {
            this.$store.commit('getLogout');
            swal('logout success!', '', 'success');

            this.$router.push('/login');
        },
    },
};
</script>

<style></style>
