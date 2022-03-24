<template>
  <div>
    <div
      class="flex flex-col gap-10 justify-center content-center justify-items-center"
    >
      <div class="bg-black">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Pick the base ingredient</span>
          </label>
          <select class="select select-bordered text-white" v-model="queryMenu">
            <option value="chicken">Chicken</option>
            <option value="beef">Beef</option>
            <option value="potato">Potato</option>
          </select>
        </div>
        <div>
          <button class="btn btn-info btn-sm" @click="findEdaman">
            Find Menu
          </button>
        </div>
      </div>
      <div
        class="grid gap-5 place-items-center justify-center grid-cols-3"
        id="gridCard"
      >
        <card-edamam
          v-for="el in edamanList"
          :key="el.recipe.identity"
          v-bind:singleMenu="el.recipe"
        ></card-edamam>
      </div>
      <div class="justify-items-center items-center">
        <div
          id="table"
        >
        <h1 class="text-white">Here's some list for ingredient {{queryMenu}} and some reccomended brand</h1><br><br>
          <div class="overflow-x-auto bg-slate-700">
            <table class="table table-zebra w-full text-white bg-slate-800">
              <!-- head -->
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Brand Name</th>
                  <th>Total Calories</th>
                  <th>Total Fat</th>
                </tr>
              </thead>
              <tbody v-for="el in nutritionixList" :key="el._score">
                <table-menu-row v-bind:singleNutritionix="el"></table-menu-row>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cardEdamam from "../components/cardEdamam.vue";
import tableMenuRow from "../components/tableMenuRow.vue"

export default {
  name: "menuEdamam",
  data() {
    return {
      queryMenu: "",
    };
  },
  components: {
    cardEdamam,
    tableMenuRow
  },
  computed: {
    edamanList() {
      return this.$store.state.edamanList;
    },
    nutritionixList() {
      return this.$store.state.nutritionixList;
    },
  },
  methods: {
    findEdaman: function () {
      console.log(`masuk function`);
      this.$store.dispatch("getEdamanMenu", this.queryMenu);
      this.$store.dispatch("getNutritionixList", this.queryMenu);
    },
  },
};
</script>

<style scoped>
#gridCard {
  padding: 5vh;
}

.marginBorder {
  border: double;
  border-radius: 70px;
  width: 50vh;
  height: 80vh;
}

.marginResult {
  border: double;
  border-radius: 70px;
  width: 70vh;
  height: 80vh;
}

.marginTop {
  margin-top: 30vh;
}
</style>
