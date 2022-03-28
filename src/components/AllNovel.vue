<template>
    <div class="grid-3x3 w-4/6">
        <novel-component
            v-for="(novel, i) in novels"
            :key="i"
            :novel="novel"
        ></novel-component>
        <novel-component
            v-for="(bookmark, i) in bookmarks"
            :key="i"
            :novel="bookmark"
            :bookmark="bookmark"
        ></novel-component>
    </div>
</template>

<script>
import NovelComponent from './Novel.vue';
export default {
    name: 'AllNovel',
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
    justify-items: center;
    grid-gap: 2rem;
}
</style>
