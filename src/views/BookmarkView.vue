<template>
    <div class="bookmark pt-20 h-screen">
        <all-novel class="pt-20 pb-20 gap-5" :bookmarks="bookmarks"></all-novel>
        <footer-component></footer-component>
    </div>
</template>

<script>
import AllNovel from '@/components/AllNovel.vue';
import FooterComponent from '@/components/Footer.vue';

export default {
    name: 'BookmarkView',
    components: {
        AllNovel,
        FooterComponent,
    },
    created() {
        this.$store.dispatch('getBookmark');
    },
};