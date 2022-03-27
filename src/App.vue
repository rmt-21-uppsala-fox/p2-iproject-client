<template>
	<div id="app" class="bg-slate-900">
		<router-view />
		<HFooter></HFooter>
	</div>
</template>

<script>
	import HFooter from "vue-hacktiv8-footer";
	export default {
		components: {
			HFooter,
		},
	};
</script>

<style></style>
