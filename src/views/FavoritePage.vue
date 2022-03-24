<template>
	<!-- Favorites -->
	<div>
		<div class="p-5 text-center">
			<router-link
				class="text-sm title-font text-center text-yellow-500 font-serif italic"
				to="/"
			>
				Back Home
			</router-link>
			<h1 class="text-5xl font-black text-yellow-500 font-serif italic">
				Favorites
			</h1>
		</div>
		<div class="flex container my-12 mx-auto px-4 md:px-12">
			<div class="flex flex-wrap -mx-1 lg:-mx-4">
				<!-- Column -->
				<MangaCard
					v-for="favorite in favorites"
					:key="favorite.id"
					:manga="favorite"
				></MangaCard>
				<!-- END Column -->
			</div>
		</div>
	</div>
	<!-- end of favorites -->
</template>

<script>
	import MangaCard from "../components/MangaCard.vue";
	export default {
		name: "FavoritePage",
		components: {
			MangaCard,
		},
		methods: {
			getFavorite() {
				this.$store.dispatch("getFavorite");
			},
		},
		computed: {
			favorites() {
				return this.$store.state.favorites;
			},
		},
		created() {
			this.getFavorite();
		},
	};
</script>

<style></style>
