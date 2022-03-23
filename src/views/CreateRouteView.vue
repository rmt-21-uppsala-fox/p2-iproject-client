<template>
  <div>
    <CustomNavbar></CustomNavbar>
    <MapDisplay class="w-[100%] h-[55em]"></MapDisplay>
    <DraggableDiv
      class="artboard artboard-horizontal phone-1 col-11 bg-[#FAF7F5] shadow-2xl rounded-2xl border-8 border-primary absolute top-20 left-10"
    >
      <template slot="header">
        <h1 class="font-bold text-4xl text-[#003A3D] mt-2">
          Estimate Carbon Form
        </h1>
      </template>
      <template slot="main">
        <div class="flex flex-col">
          <div class="form-control w-full max-w-xs pl-4 mt-4">
            <label class="label">
              <span class="label-text">Pick the car you will use</span>
            </label>
            <select class="select select-bordered w-full" v-model="model">
              <option value="" disabled selected>Pick one</option>
              <option
                v-for="(car, index) in cars"
                :key="index"
                :value="car.model"
              >
                {{ car.make }} {{ car.model }}
              </option>
            </select>
          </div>
          <h1 class="font-semibold text-lg text-left pl-4 pt-5">
            Travel Distance: {{ twoDecimalDistance }} KM
          </h1>
          <button
            class="btn btn-primary mx-5 my-3 rounded-2xl"
            @click.prevent="estimateCarbonProduction"
          >
            Estimate Carbon Production
          </button>
        </div>
      </template>
      <template slot="footer"> [[[ SOME CONTENT HERE]]] </template>
    </DraggableDiv>
  </div>
</template>

<script>
import MapDisplay from "@/components/MapDisplay.vue";
import CustomNavbar from "@/components/CustomNavbar.vue";
import DraggableDiv from "@/components/DragableDiv.vue";
import Swal from "sweetalert2";
export default {
  name: "CreateRouteVue",
  data() {
    return {
      cars: [],
      carbon: 0,
      model: "",
    };
  },
  computed: {
    distance() {
      return this.$store.state.distance;
    },
    twoDecimalDistance() {
      return this.distance.toLocaleString("en-US", {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      });
    },
  },
  methods: {
    setFuelEfficiency() {
      this.$store.commit("SET_FUEL_EFFICIENCY", this.fuelEfficiency);
    },
    async estimateCarbonProduction() {
      try {
        const selectedCar = this.cars.filter((c) => c.model === this.model);
        let response = await this.$store.dispatch("getCarFuelEfficiency", {
          model: this.model,
          year: selectedCar.year,
        });
        const fuelEfficiency = response.data.fuelEfficiency;
        response = await this.$store.dispatch("getCarbonProduced", {
          distance: this.distance,
          fuelEfficiency: fuelEfficiency,
        });
        this.carbon = response.data.carbonProducedInKg;
        Swal.fire({
          title: "Estimated Carbon Production",
          html: `this route will produce estimated ${this.carbon} Kg<sup>3</sup> of carbon`,
          icon: "info",
          confirmButtonText: "Cool",
        });
      } catch (error) {
        console.error(error.response);
      }
    },
    async getCarModel() {
      try {
        const response = await this.$store.dispatch("getCarModel");
        this.cars = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  components: {
    MapDisplay,
    CustomNavbar,
    DraggableDiv,
  },
  created() {
    this.getCarModel();
  },
};
</script>

<style></style>
