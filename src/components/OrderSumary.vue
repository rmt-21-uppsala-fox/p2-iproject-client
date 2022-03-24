<template>
  <div>
    <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
    <form @submit.prevent="formOngkir">
      <div class="space-y-4">
        <h1 class="text-center text-2xl font-semibold text-gray-600">Ongkir</h1>
        <div>
          <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
              <span>Kota Asal</span>
              <select
                v-model="origin"
                class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option
                  v-for="city in cities"
                  :key="city.city_id"
                  :value="city.city_id"
                >
                  {{ city.city_name }} {{ city.type }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
              <span>Kota Tujuan</span>
              <select
                v-model="destination"
                class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option
                  v-for="city in cities"
                  :key="city.city_id"
                  :value="city.city_id"
                >
                  {{ city.city_name }} {{ city.type }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <label for="email" class="block mb-1 text-gray-600 font-semibold"
            >Weight</label
          >
          <input
            v-model="weight"
            type="number"
            min="1"
            class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
          />
        </div>
        <div>
          <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
              <span>Kurir</span>
              <select
                v-model="courier"
                class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option value="jne">JNE</option>
                <option value="pos">POS</option>
                <option value="tiki">TIKI</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <button
      type="submit"
        class="mt-4 w-full bg-gradient-to-tr bg-indigo-500 font-semibold hover:bg-indigo-600 text-white py-2 rounded-md text-lg tracking-wide"
      >
        Check Ongkir
      </button>
    </form>
    <div v-if="costs.length > 0" class="flex font-semibold justify-between py-6 text-sm uppercase">
      <span>Biaya Ongkir</span>
      <span>Rp {{ costs[0].costs[0].cost[0].value }} </span>
    </div>
    <div class="border-t mt-8">
      <div class="flex font-semibold justify-between py-6 text-sm uppercase">
        <span>Total cost</span>
        <span>Rp {{ totalCost }}</span>
      </div>
      <button
        class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm rounded-md text-white uppercase w-full"
      >
        Checkout
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: "OrderSumary",
  data() {
    return {
      origin: "",
      destination: "",
      weight: "",
      courier: "",
    };
  },
  computed: {
    totalCost() {
      let total = 0;
      this.$store.state.cart.forEach((item) => {
        total += item.totalPrice;
      });
      return total;
    },

    cities() {
      return this.$store.state.cities;
    },

    costs() {
      return this.$store.state.costs;
    },
  },

  methods: {
     formOngkir() {
       this.$store.dispatch("postCosts", {
        origin: this.origin,
        destination: this.destination,
        weight: this.weight,
        courier: this.courier,
      });
    },

  },

  created() {
    this.$store.dispatch("getCities");
  },
};
</script>

<style></style>
