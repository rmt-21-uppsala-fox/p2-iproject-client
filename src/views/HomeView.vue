<template>
    <div class="home pt-20">
        <div class="parent">
            <!-- hero image -->
            <a
                href="#"
                class="flex flex-col gap-4 mt-20 w-4/6 h-96 mx-auto bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100"
            >
                <img
                    class="h-96 mx-auto bg-cover object-cover"
                    src="https://cdn.novelupdates.com/images/2018/11/Lord-of-the-Mysteries.jpeg"
                    alt=""
                />
                <div class="flex flex-col justify-between leading-normal">
                    <img
                        class="h-96 object-contain"
                        src="https://s26162.pcdn.co/wp-content/uploads/sites/3/2020/09/Fall-Preview.jpg"
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
            <div class="flex w-4/6 mx-auto justify-end mb-20">
                <all-novel :novels="novels"></all-novel>
                <div class="flex flex-col ml-10 w-1/3 gap-2">
                    <div
                        v-for="(apiNovel, i) in apiNovels"
                        :key="i"
                        class="grid gap-2 mb-2 ml-10"
                    >
                        <div
                            class="w-2/4 mx-auto rounded-lg border border-gray-200 shadow-md dark:bg-white-400"
                        >
                            <a href="#">
                                <img
                                    class="h-60 mx-auto bg-cover object-cover h-32"
                                    src="https://api.lorem.space/image/book?w=100&h=128&hash=8B7BCDC2"
                                    alt=""
                                />
                            </a>
                            <div class="p-4">
                                <h2 class="font-semibold mb-2 text-orange-500">
                                    Title: {{ apiNovel.title }}
                                </h2>
                                <div class="flex flex-wrap">
                                    <p class="font-normal text-sm">
                                        release : {{ apiNovel.release_count }}
                                    </p>
                                </div>
                                <div class="flex flex-wrap">
                                    <p class="mb-3 font-normal text-sm">
                                        rating : {{ apiNovel.rating }}
                                    </p>
                                </div>
                                <div
                                    class="flex flex-wrap text-sm"
                                    v-html="
                                        apiNovel.description
                                            .split(' ')
                                            .slice(0, 10)
                                            .join(' ') + '...'
                                    "
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
        apiNovels() {
            return this.$store.state.apiNovels;
        },
    },
    created() {
        this.$store.dispatch('getAllNovels');
        this.$store.dispatch('getApiNovel');
    },
};
</script>
