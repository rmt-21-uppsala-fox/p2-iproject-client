<template>
  <div
    class="home flex flex-col gap-10 justify-center content-center justify-items-center"
  >
    <div
      class="flex justify-center content-center justify-items-center self mt-[5vh] gap-10"
    >
      <div
        class="flex flex-col bg-indigo-900 justify-items-center items-center gap-4 marginBorder justify-center"
      >
        <h1 class="text-white">Welcome</h1>
        <h5 class="text-white">Measure your Body Mass Index(BMI) here</h5>
        <div class="p-2">
          <label for="height" class="text-white">Height (Cm)</label>
          <input
            type="number"
            id="height"
            class="input w-full max-w-xs text-white"
            name="height"
            v-model="height"
            required
          />
        </div>
        <div class="p-2">
          <label for="weight" class="text-white">Weight (Kg)</label>
          <input
            class="input w-full max-w-xs text-white"
            type="number"
            id="weight"
            name="weight"
            v-model="weight"
            required
          />
        </div>
        <div class="p-2">
          <label for="age" class="text-white">Age</label>
          <input
            class="input w-full max-w-xs text-white"
            type="number"
            id="age"
            name="age"
            v-model="age"
            required
          />
        </div>
        <div class="p-2">
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Excercise</span>
            </label>
            <select
              class="select select-bordered text-white"
              v-model="activity"
            >
              <option value="light">light</option>
              <option value="moderate">moderate</option>
              <option value="high">high</option>
            </select>
          </div>
        </div>
        <div
          class="p-2 justify-items-center items-center justify-center flex flex-row gap-4"
        >
          <button
            class="btn btn-active btn-secondary text-white"
            @click="calculateIbm()"
          >
            Measure My BMI
          </button>
          <button
            class="btn btn-active btn-secondary text-white"
            @click="calculateCalories()"
          >
            Measure My Calories
          </button>
        </div>
      </div>
      <div
        class="flex flex-col bg-indigo-900 justify-items-center items-center gap-8 marginResult justify-center"
      >
        <div>
          <h1 class="text-white">My Status: {{ BMI }}</h1>
          <h1 class="text-white">My BMI result: {{ result }}</h1>
        </div>
        <div>
          <h1 class="text-white">I gain: {{ calory }} calories each day</h1>
        </div>
        <div class="gap-4 flex flex-col">
          <button
            class="btn btn-active btn-secondary text-white"
            @click="saveBMI()"
          >
            Save My Result (BMI)</button
          >
          <p class="text-white">Please measure before saving</p>
          <button
            class="btn btn-active btn-secondary text-white"
            @click="showBMI()"
          >
            Show my BMI
          </button>
        </div>
        <div id="table">
          <div class="overflow-x-auto">
            <table class="table table-zebra w-full text-white">
              <!-- head -->
              <thead>
                <tr>
                  <th></th>
                  <th>Category</th>
                  <th>Body Mass Index(%)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Severe Thinness</td>
                  <td>less than 15.9</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Mild Thinness</td>
                  <td>16 - 18.4</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Normal</td>
                  <td>18.5 - 24.9</td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>Overweight</td>
                  <td>25 - 29.9</td>
                </tr>
                <tr>
                  <th>5</th>
                  <td>Obese</td>
                  <td>more than 30</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div>
      <canvas id="BMIChart"></canvas>
    </div>
  </div>
</template>

<script>
// import bmiChart from '../components/bmiChart.vue'
import Chart from "chart.js";
import chartData from "../chartData";

export default {
  name: "HomeView",
  components: {
    // bmiChart
  },
  data() {
    return {
      height: 0,
      weight: 0,
      result: 0,
      BMI: "",
      age: 0,
      activity: "",
      calory: 0,
      chartData: chartData,
    };
  },
  computed: {
    allBMI() {
      return this.$store.state.bmiList;
    },
    dataFInal() {
      return this.chartData;
    },
  },
  methods: {
    calculateIbm() {
      this.result = Math.round(
        (+this.weight * 10000) / (+this.height * +this.height)
      );
      if (this.result < 16) this.BMI = "Severe Thinness";
      if (this.result >= 16 && this.result < 18.5) this.BMI = "Mild Thinness";
      if (this.result >= 18.5 && this.result < 25) this.BMI = "Normal";
      if (this.result >= 25 && this.result < 30) this.BMI = "Overweight";
      if (this.result > 30) this.BMI = "Obese";
    },
    calculateCalories() {
      const total = 10 * this.weight + 6.26 * this.height - (5 * this.age + 5);
      this.calory = Math.round(+total);
      if (this.activity === "light") this.calory = this.calory * 1.2;
      if (this.activity === "moderate") this.calory = this.calory * 1.4;
      if (this.activity === "high") this.calory = this.calory * 1.7;
    },
    saveBMI() {
      const BMI = this.result;
      this.$store.dispatch("postBMI", { BMI });
      this.showBMI()
    },
    showBMI() {
      this.$store.dispatch("getBMI");
      this.chartData.data.datasets[0].data = this.allBMI;
      const ctx = document.getElementById("BMIChart");
      new Chart(ctx, this.chartData);
    },
  },
  mounted() {
    this.chartData.data.datasets[0].data = this.allBMI;
    this.$store.dispatch("getBMI");
  }
};
</script>

<style scoped>
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
