<template>
    <div id="app">
        <Navbar-component></Navbar-component>
        <HFooter class="bg-red-900"></HFooter>
    </div>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer';
import NavbarComponent from '@/components/Navbar.vue';
export default {
    components: { NavbarComponent, HFooter },
};
</script>
<style></style>
