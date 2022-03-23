<template>
  <div class="text-white container">
    <b-row>
      <b-col cols="5" md="3">
        <FilterAndCategory></FilterAndCategory>
      </b-col>
      <b-col id="postSection" cols="13" md="9" class="overflow-auto">
        <PostSection></PostSection>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PostSection from "@/components/PostSection.vue";
import FilterAndCategory from "@/components/FilterAndCategory.vue";
export default {
  name: "HomeView",
  components: {
    PostSection,
    FilterAndCategory,
  },
  created() {
    this.$store.dispatch("fetchAll");
  },
};
</script>

<style scoped>
#postSection {
  max-height: 85vh;
}
</style>
