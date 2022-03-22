<template>
    <div class="home pt-20">
        <div class="parent">
            <!-- hero image -->
            <a
                href="#"
                class="flex flex-col gap-4 mt-20 w-4/6 h-96 mx-auto items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100"
            >
                <img class="h-96" src="https://picsum.photos/200/200" alt="" />
                <div class="flex flex-col justify-between leading-normal">
                    <img
                        class="h-96"
                        src="https://picsum.photos/1000/400"
                        alt=""
                    />
                </div>
            </a>

            <!-- tabs genre -->
            <div
                class="border-b w-4/6 mx-auto border-gray-200 dark:border-gray-700 mb-20 mt-20"
            >
                <ul class="flex flex-wrap -mb-px place-content-center">
                    <li class="mr-2">
                        <a
                            @click.prevent="genreBy('adventure')"
                            :class="`inline-block py-4 px-4 text-sm hover:cursor-pointer font-medium text-center text-blue-600 rounded-t-lg ${
                                genre === 'adventure' ? activePage : ''
                            }`"
                            aria-current="page"
                            >Adventure</a
                        >
                    </li>

                    <li class="mr-2">
                        <a
                            @click.prevent="genreBy('romance')"
                            :class="`inline-block py-4 px-4 text-sm hover:cursor-pointer font-medium text-center text-blue-600 rounded-t-lg ${
                                genre === 'romance' ? activePage : ''
                            }`"
                            aria-current="page"
                            >Romance</a
                        >
                    </li>

                    <li class="mr-2">
                        <a
                            @click.prevent="genreBy('martial-arts')"
                            :class="`inline-block py-4 px-4 text-sm hover:cursor-pointer font-medium text-center text-blue-600 rounded-t-lg ${
                                genre === 'martial-arts' ? activePage : ''
                            }`"
                            aria-current="page"
                            >Martial Arts</a
                        >
                    </li>

                    <li class="mr-2">
                        <a
                            @click.prevent="genreBy('fantasy')"
                            :class="`inline-block py-4 px-4 text-sm hover:cursor-pointer font-medium text-center text-blue-600 rounded-t-lg ${
                                genre === 'fantasy' ? activePage : ''
                            }`"
                            aria-current="page"
                            >Fantasy</a
                        >
                    </li>

                    <li class="mr-2">
                        <a
                            @click.prevent="genreBy('comedy')"
                            :class="`inline-block py-4 px-4 text-sm hover:cursor-pointer font-medium text-center text-blue-600 rounded-t-lg ${
                                genre === 'comedy' ? activePage : ''
                            }`"
                            aria-current="page"
                            >Comedy</a
                        >
                    </li>

                    <li class="mr-2">
                        <a
                            @click.prevent="genreBy('drama')"
                            :class="`inline-block py-4 px-4 text-sm hover:cursor-pointer font-medium text-center text-blue-600 rounded-t-lg ${
                                genre === 'drama' ? activePage : ''
                            }`"
                            aria-current="page"
                            >Drama</a
                        >
                    </li>

                    <li class="mr-2">
                        <a
                            @click.prevent="genreBy('xuanhuan')"
                            :class="`inline-block py-4 px-4 text-sm hover:cursor-pointer font-medium text-center text-blue-600 rounded-t-lg ${
                                genre === 'xuanhuan' ? activePage : ''
                            }`"
                            aria-current="page"
                            >Xuanhuan</a
                        >
                    </li>

                    <li class="mr-2">
                        <a
                            @click.prevent="genreBy('supernatural')"
                            :class="`inline-block py-4 px-4 text-sm hover:cursor-pointer font-medium text-center text-blue-600 rounded-t-lg ${
                                genre === 'supernatural' ? activePage : ''
                            }`"
                            aria-current="page"
                            >Supernatural</a
                        >
                    </li>

                    <li class="mr-2">
                        <a
                            @click.prevent="genreBy('sci-fi')"
                            :class="`inline-block py-4 px-4 text-sm hover:cursor-pointer font-medium text-center text-blue-600 rounded-t-lg ${
                                genre === 'sci-fi' ? activePage : ''
                            }`"
                            aria-current="page"
                            >Sci-fi</a
                        >
                    </li>

                    <select
                        name="cars"
                        id="cars"
                        @change="orderBy($event)"
                        class="` text-sm hover:cursor-pointer font-medium text-center text-blue-600 bg-white rounded-lg`"
                    >
                        <option value="latest">Latest</option>
                        <option value="alphabet">A-Z</option>
                        <option value="rating">Rating</option>
                        <option value="trending">Trending</option>
                        <option value="views">Most Views</option>
                    </select>

                    <li class="mr-2">
                        <a
                            @click.prevent="clear"
                            class="inline-block py-4 px-4 text-sm hover:cursor-pointer font-medium text-center text-red-600 rounded-t-lg border-b-2 border-red-600 active"
                            aria-current="page"
                            >Clear</a
                        >
                    </li>
                </ul>
            </div>

            <!-- product card -->
            <div class="flex w-4/6 mx-auto justify-between">
                <all-novel :novels="novels"></all-novel>
                asdf
            </div>
            <!-- pagination -->

            <footer-component></footer-component>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import AllNovel from '@/components/AllNovel.vue';

export default {
    name: 'HomeView',
    components: {
        AllNovel,
    },
    data() {
        return {
            order: '',
            genre: '',
        };
    },
    methods: {
        genreBy(params) {
            this.genre = params;
        },
        orderBy(params) {
            console.log(params.target.value);
            this.order = params.target.value;
        },

        clear() {
            this.order = '';
            this.genre = '';
        },
    },
    watch: {
        genre: function (val) {
            this.$store.dispatch('getAllNovels', {
                genre: val,
                order: this.order,
            });
        },
        order: function (val) {
            this.$store.dispatch('getAllNovels', {
                genre: this.genre,
                order: val,
            });
        },
    },
    computed: {
        novels() {
            return this.$store.state.allNovel;
        },
        activePage() {
            return `border-b-2 border-blue-600`;
        },
    },
    created() {
        this.$store.dispatch('getAllNovels');
    },
};
</script>
