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
			<!-- <div class="flex justify-center items-center p-5 ml-5">
				<a
					@click.prevent="previousPage"
					class="inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-yellow-500 bg-white rounded-lg border border-gray-300 hover:bg-red-500 hover:text-yellow-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white italic font-serif"
				>
					Previous
				</a>
				<p class="mr-5"></p>
				<p class="mr-5 text-yellow-500 font-black font-serif italic">from</p>
				<p class="mr-5"></p>
				<a
					@click.prevent=""
					class="inline-flex items-center py-2 px-4 text-sm font-medium text-yellow-500 bg-white rounded-lg border border-gray-300 hover:bg-red-500 hover:text-yellow-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white italic font-serif"
				>
					Next
				</a>
			</div>
			end of pagination -->
		</div>
	</div>
</template>

<script>
	import NavigationBar from "../components/NavigationBar.vue";
	import MangaCard from "../components/MangaCard.vue";
	import { auth } from "../../firebase/firebase-config";
	export default {
		name: "HomePage",
		components: {
			NavigationBar,
			MangaCard,
		},
		methods: {
			getAllManga() {
				this.$store.dispatch("getAllManga");
			},
		},
		computed: {
			allManga() {
				return this.$store.state.allManga;
			},
		},
		created() {
			this.getAllManga();
			console.log(auth.currentUser);
		},
	};
</script>

<style></style>
