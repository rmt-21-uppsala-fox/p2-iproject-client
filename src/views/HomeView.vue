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

            <!-- tabs filter -->
            <div
                class="border-b w-4/6 mx-auto border-gray-200 dark:border-gray-700 mb-20 mt-20"
            >
                <ul class="flex flex-wrap -mb-px place-content-center">
                    <li class="mr-2">
                        <a
                            @click.prevent="filterBy('adventure')"
                            :class="`inline-block py-4 px-4 text-sm hover:cursor-pointer font-medium text-center text-blue-600 rounded-t-lg ${
                                filter === 'adventure' ? activePage : ''
                            }`"
                            aria-current="page"
                            >Adventure</a
                        >
                    </li>

                    <li class="mr-2">
                        <a
                            @click.prevent="filterBy('romance')"
                            :class="`inline-block py-4 px-4 text-sm hover:cursor-pointer font-medium text-center text-blue-600 rounded-t-lg ${
                                filter === 'romance' ? activePage : ''
                            }`"
                            aria-current="page"
                            >Romance</a
                        >
                    </li>

                    <li class="mr-2">
                        <a
                            @click.prevent="filterBy('martial-arts')"
                            :class="`inline-block py-4 px-4 text-sm hover:cursor-pointer font-medium text-center text-blue-600 rounded-t-lg ${
                                filter === 'martial-arts' ? activePage : ''
                            }`"
                            aria-current="page"
                            >Martial Arts</a
                        >
                    </li>

                    <li class="mr-2">
                        <a
                            @click.prevent="filterBy('fantasy')"
                            :class="`inline-block py-4 px-4 text-sm hover:cursor-pointer font-medium text-center text-blue-600 rounded-t-lg ${
                                filter === 'fantasy' ? activePage : ''
                            }`"
                            aria-current="page"
                            >Fantasy</a
                        >
                    </li>

                    <li class="mr-2">
                        <a
                            @click.prevent="filterBy('comedy')"
                            :class="`inline-block py-4 px-4 text-sm hover:cursor-pointer font-medium text-center text-blue-600 rounded-t-lg ${
                                filter === 'comedy' ? activePage : ''
                            }`"
                            aria-current="page"
                            >Comedy</a
                        >
                    </li>

                    <li class="mr-2">
                        <a
                            @click.prevent="filterBy('drama')"
                            :class="`inline-block py-4 px-4 text-sm hover:cursor-pointer font-medium text-center text-blue-600 rounded-t-lg ${
                                filter === 'drama' ? activePage : ''
                            }`"
                            aria-current="page"
                            >Drama</a
                        >
                    </li>

                    <li class="mr-2">
                        <a
                            @click.prevent="filterBy('xuanhuan')"
                            :class="`inline-block py-4 px-4 text-sm hover:cursor-pointer font-medium text-center text-blue-600 rounded-t-lg ${
                                filter === 'xuanhuan' ? activePage : ''
                            }`"
                            aria-current="page"
                            >Xuanhuan</a
                        >
                    </li>

                    <li class="mr-2">
                        <a
                            @click.prevent="filterBy('supernatural')"
                            :class="`inline-block py-4 px-4 text-sm hover:cursor-pointer font-medium text-center text-blue-600 rounded-t-lg ${
                                filter === 'supernatural' ? activePage : ''
                            }`"
                            aria-current="page"
                            >Supernatural</a
                        >
                    </li>

                    <li class="mr-2">
                        <a
                            @click.prevent="filterBy('sci-fi')"
                            :class="`inline-block py-4 px-4 text-sm hover:cursor-pointer font-medium text-center text-blue-600 rounded-t-lg ${
                                filter === 'sci-fi' ? activePage : ''
                            }`"
                            aria-current="page"
                            >Sci-fi</a
                        >
                    </li>

                    <select
                        name="cars"
                        id="cars"
                        @change="searchBy($event)"
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
};
</script>
