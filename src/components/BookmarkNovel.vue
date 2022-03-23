<template>
    <div>
        <div class="grid">
            <div
                class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-white-400"
            >
                <a href="#" @click.prevent="readNovel">
                    <img
                        class="rounded-t-lg w-full"
                        :src="novel.imgContent"
                        alt=""
                    />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5
                            class="mb-2 text-xl font-bold tracking-tight text-gray-900"
                            style="
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                                overflow: hidden;
                            "
                        >
                            {{ !novel ? bookmark.Rating : novel.title }}
                        </h5>
                    </a>
                    <div class="flex flex-wrap">
                        <p class="mb-3 font-normal text-orange-500">
                            {{ novel.rating }}
                        </p>
                        <img
                            v-if="!bookmark"
                            class="w-5 h-5 ml-2 mt-0.5"
                            src="https://www.freepnglogos.com/uploads/star-png/file-featured-article-star-svg-wikimedia-commons-8.png"
                            alt=""
                        />
                    </div>
                    <p
                        class="mb-3 font-normal text-gray-700"
                        style="
                            display: -webkit-box;
                            -webkit-line-clamp: 3;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                        "
                    >
                        {{ novel.listChapter }}
                    </p>
                    <div class="flex justify-between">
                        <a
                            @click.prevent="readNovel"
                            class="inline-flex items-center py-2 hover:cursor-pointer px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            see details
                            <svg
                                class="ml-2 -mr-1 w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </a>
                        <a
                            v-if="!bookmark"
                            href="#"
                            @click.prevent="postBookmarks"
                        >
                            <img
                                class="w-6 hover:cursor-pointer"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Linearicons_bookmark.svg/768px-Linearicons_bookmark.svg.png"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
