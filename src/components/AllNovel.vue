<template>
    <div class="grid-3x3 w-4/6">
        <novel-component
            v-for="novel in novels"
            :key="novel.id"
            :novel="novel"
        ></novel-component>
        <novel-component
            v-for="bookmark in bookmarks"
            :key="bookmark.id"
            :novel="bookmark.Novel"
            :bookmark="bookmark"
        ></novel-component>
    </div>
</template>

<script>
import NovelComponent from './Novel.vue';
export default {
    name: 'allNovel',
    components: {
        NovelComponent,
    },
    props: ['novels', 'bookmarks'],
    data() {
        return {};
    },
};
</script>

<style>
/* grid 3x3 */
.grid-3x3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    /* justify-items: center; */
    grid-gap: 2rem;
}
</style>
