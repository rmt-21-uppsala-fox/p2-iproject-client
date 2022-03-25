<template>
  <div>
    <select
      class="select select-bordered"
      v-model="selected"
      @change="getCategory($event)"
    >
      <option disabled selected value="selected">Pick category</option>
      <option
        v-for="category in foodCategories"
        :key="category.id"
        :value="category.id"
      >
        {{ category.name }}
      </option>
    </select>
    <!-- <option :value="this.data.id">
      {{ this.data.name }}
    </option> -->
    <!-- <option :value="data.id">{{ data.name }}</option> -->
  </div>
</template>

<script>
export default {
  name: "optionCategoryComp",
  props: ["foodCategories"],
  data: () => {
    return {
      selected: "selected",
    };
  },
  methods: {
    getCategory(e) {
      this.$emit("getCategory", e.target.value);
    },
  },
};
</script>

<style>
</style>