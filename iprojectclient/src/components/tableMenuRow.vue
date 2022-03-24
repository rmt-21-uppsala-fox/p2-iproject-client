<template>
  <tr>
    <td>{{singleNutritionix.fields.item_name}}</td>
    <td>{{singleNutritionix.fields.brand_name}}</td>
    <td>{{singleNutritionix.fields.nf_calories}}</td>
    <td>{{singleNutritionix.fields.nf_total_fat}}</td>
  </tr>
</template>

<script>
export default {
  name: "tableMenuRow",
  props: ["singleNutritionix"],
};
</script>

<style scoped></style>
