<template>
  <div class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
    <!--Nav-->
    <NavBar></NavBar>

    <section class="bg-white py-4">
      <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12 w-3/4" id="menu-view">
        <nav id="store" class="w-full z-30 top-0 px-6 py-1">
          <div
            class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3"
          >
            <a
              class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
              href="#"
            >Detail Transaction</a>
          </div>
        </nav>
        <div class="w-full md:w-full flex pt-4 px-4">
          <!--section-->

          <table class="w-full h-fit text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" class="px-6 py-3">Product name</th>
                <th scope="col" class="px-6 py-3">Quantity</th>
                <th scope="col" class="px-6 py-3">Price/Item</th>
                <th scope="col" class="px-6 py-3">Total</th>
              </tr>
            </thead>
            <tbody>
              <TableRow
                v-for="data in payments"
                :key="data.id"
                :quantity="data.quantity"
                :product="data.Product"
              ></TableRow>
              <tr class="bg-white border-b">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >Total Transaction</th>
                <td class="px-6 py-4"></td>
                <td class="px-6 py-4"></td>
                <td class="px-6 py-4">{{rupiahPrice}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav id="store" class="w-full z-30 top-0 px-6 py-1">
          <div
            class="w-full container mx-auto flex flex-wrap items-center justify-between mt-8 px-2 py-3"
          >
            <a
              class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
              href="#"
            >Payment</a>
          </div>
        </nav>
        <iframe :src="paymentUrl" class="w-full p-6" frameborder="0" height="500px"></iframe>
      </div>
    </section>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import TableRow from "../components/TableRow.vue";
import PageFooter from "../components/PageFooter.vue";

export default {
  name: "DetailTransaction",
  components: {
    NavBar,
    TableRow,
    PageFooter,
  },
  computed: {
    payments() {
      return this.$store.state.payments;
    },
    paymentUrl() {
      return this.$store.state.paymentUrl;
    },
    rupiahPrice() {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(this.$store.state.amount);
    },
  },
  methods: {
    async fetchPaymentById() {
      await this.$store.dispatch("fetchPaymentById", this.$route.params.id);
    },
    setIsLogin(payload) {
      this.$store.commit("SET_ISLOGIN", payload);
    },
  },
  async created() {
    if (localStorage.access_token) this.setIsLogin(true);
    await this.fetchPaymentById();
  },
};
</script>