<template>
    <div class="bookmark pt-20 h-screen">
        <div class="mx-auto w-4/6">
            <all-novel
                class="pt-20 pb-20 gap-5"
                :bookmarks="bookmarks"
            ></all-novel>
        </div>
    </div>
</template>

<script>
import AllNovel from '@/components/AllNovel.vue';

export default {
    name: 'BookmarkView',
    components: {
        AllNovel,
    },
    computed: {
        bookmarks() {
            return this.$store.state.bookmarked;
        },
    },
    mounted() {
        console.log(`masuk bookmark`);
        this.$store.dispatch('getBookmark');
    },
};
</script>
