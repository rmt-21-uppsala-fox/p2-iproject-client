<template>
	<div>
		<NavigationBar></NavigationBar>
		<div>
			<!-- main  page -->
			<div class="flex container my-12 mx-auto px-4 md:px-12">
				<div class="flex flex-wrap -mx-1 lg:-mx-4">
					<!-- Column -->
					<!-- card here -->
					<MangaCard
						v-for="manga in allManga"
						:key="manga.id"
						:manga="manga"
					></MangaCard>
				</div>
				<!-- END Column -->
			</div>
			<!-- end of main  page -->
			<!-- pagination -->
			<div class="flex justify-center items-center p-5 ml-5">
				<a
					@click.prevent="previousPage"
					class="inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-yellow-500 bg-white rounded-lg border border-gray-300 hover:bg-red-500 hover:text-yellow-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white italic font-serif"
				>
					Previous
				</a>
				<a
					@click.prevent="nextPage(Math.ceil(50870 / 18) - 1)"
					class="inline-flex items-center py-2 px-4 text-sm font-medium text-yellow-500 bg-white rounded-lg border border-gray-300 hover:bg-red-500 hover:text-yellow-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white italic font-serif"
				>
					Next
				</a>
			</div>
			<!-- end of pagination -->
		</div>
	</div>
</template>

<script>
	import NavigationBar from "../components/NavigationBar.vue";
	import MangaCard from "../components/MangaCard.vue";
	export default {
		name: "HomePage",
		data() {
			return {
				page: 0,
				endpage: null,
			};
		},
		components: {
			NavigationBar,
			MangaCard,
		},
		methods: {
			getAllManga() {
				this.$store.dispatch("getAllManga");
			},
			previousPage() {
				if (this.page >= 1) {
					this.page -= 1;
				}
				this.$store.dispatch("getAllManga", { page: this.page });
			},
			nextPage(val) {
				if (this.page < val) {
					this.page += 1;
				}
				this.$store.dispatch("getAllManga", { page: this.page });
			},
		},
		computed: {
			allManga() {
				return this.$store.state.allManga;
			},
		},
		created() {
			this.getAllManga();
		},
	};
</script>

<style></style>
