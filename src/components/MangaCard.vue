<template>
	<div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
		<article class="overflow-hidden rounded-lg shadow-2xl">
			<a href="#" @click.prevent="goToDetailPage">
				<img
					alt="Placeholder"
					class="block h-auto w-full"
					:src="manga.attributes.posterImage.original"
				/>
			</a>

			<header
				class="flex items-center justify-between leading-tight p-2 md:p-4"
			>
				<h1 class="text-lg">
					<a
						class="no-underline hover:underline text-yellow-500 font-bold"
						href="#"
						@click.prevent=""
					>
						{{ manga.attributes.titles.en_jp }}
					</a>
				</h1>
				<p class="text-grey-darker text-sm font-semibold text-yellow-500">
					<!--  -->
					{{ manga.attributes.averageRating }}
				</p>
			</header>

			<footer class="flex items-center justify-between leading-none p-2 md:p-4">
				<h5 class="flex items-center text-black">
					<p class="ml-2 text-sm text-red-500 font-bold">
						Chapters:
						{{ manga.attributes.chapterCount }}
					</p>
				</h5>
				<button
					class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
				>
					<svg
						fill="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-5 h-5"
						viewBox="0 0 24 24"
					>
						<path
							d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
						></path>
					</svg>
					<!-- <svg
						fill="red"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-5 h-5"
						viewBox="0 0 24 24"
					>
						<path
							d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
						></path>
					</svg> -->
				</button>
			</footer>
		</article>
		<!-- END Article -->
	</div>
</template>

<script>
	export default {
		name: "CardManga",
		props: ["manga"],
		methods: {
			goToDetailPage() {
				this.$router.push({
					name: "DetailPage",
					params: { id: this.manga.id },
				});
			},
		},
	};
</script>

<style></style>
