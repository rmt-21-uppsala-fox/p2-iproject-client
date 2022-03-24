<template>
  <div>
    <CustomNavbar></CustomNavbar>
    <MapDisplay class="w-[100%] h-[55em]"></MapDisplay>
    <DraggableDiv
      class="artboard artboard-horizontal phone-2 col-11 bg-[#FAF7F5] shadow-2xl rounded-2xl border-8 border-primary absolute bottom-28 right-10"
    >
      <template slot="header">
        <h1 class="font-bold text-4xl text-[#003A3D] mt-2">Estimate Carbon</h1>
      </template>
      <template slot="main">
        <div class="flex flex-col">
          <div class="flex flex-row">
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
            </div>
            <div v-if="carbon !== 0" class="flex flex-col mx-auto py-5">
              <h1>Carbon Produced:</h1>
              <h1 class="font-semibold text-5xl mt-3">
                {{ carbon }} Kg<sup>3</sup>
              </h1>
            </div>
          </div>

          <button
            class="btn btn-primary mx-5 my-3 rounded-xl"
            @click.prevent="estimateCarbonProduction"
          >
            Estimate Carbon Production
          </button>
          <div class="flex flex-row mt-2 px-5">
            <input
              type="text"
              placeholder="Email Here"
              v-model="email"
              class="input input-bordered input-primary w-[100%] rounded-lg"
            />
            <div class="flex justify-end w-[50%]">
              <button
                class="btn btn-primary rounded-xl"
                @click.prevent="sendResult"
              >
                Email me the result
              </button>
            </div>
          </div>
        </div>
      </template>
      <template slot="footer"></template>
    </DraggableDiv>
    <HFooter></HFooter>
  </div>
</template>

<script>
import MapDisplay from "@/components/MapDisplay.vue";
import CustomNavbar from "@/components/CustomNavbar.vue";
import DraggableDiv from "@/components/DragableDiv.vue";
import HFooter from "vue-hacktiv8-footer";
import Swal from "sweetalert2";
export default {
  name: "EstimateCarbonPage",
  data() {
    return {
      cars: [],
      carbon: 0,
      model: "",
      email: "",
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
        if (error.response) {
          console.log(error.response);
          Swal.fire({
            title: "Something's Wrong",
            text: error.response.data.message,
            icon: "error",
            confirmButtonText: "Cool",
          });
        } else {
          console.error(error);
        }
      }
    },
    async getCarModel() {
      try {
        const response = await this.$store.dispatch("getCarModel");
        this.cars = response.data;
      } catch (error) {
        if (error.response) {
          console.log(error.response);
          Swal.fire({
            title: "Something's Wrong",
            text: error.response.data.message,
            icon: "error",
            confirmButtonText: "Cool",
          });
        } else {
          console.error(error);
        }
      }
    },
    async sendResult() {
      try {
        await this.$store.dispatch("sendResult", {
          email: this.email,
          carbon: this.carbon,
        });
        Swal.fire({
          title: "Send Result Success",
          text: "Successfully send estimated carbon produced and it's detail to your email",
          icon: "success",
          confirmButtonText: "Cool",
        });
      } catch (error) {
        if (error.response) {
          console.log(error.response);
          Swal.fire({
            title: "Something's Wrong",
            text: error.response.data.message,
            icon: "error",
            confirmButtonText: "Cool",
          });
        } else {
          console.error(error);
        }
      }
    },
  },
  components: {
    MapDisplay,
    CustomNavbar,
    DraggableDiv,
    HFooter,
  },
  created() {
    this.getCarModel();
    this.$store.commit("SET_DISPLAY", "estimatePage");
  },
};
</script>

<style></style>
