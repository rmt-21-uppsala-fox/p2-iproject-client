<template>
  <div>
    <navbar-comp></navbar-comp>
    <div class="flex-col">
      <!--SideBar-->
      <div id="main" class="flex gap-2">
        <div>
          <aside class="w-64" aria-label="Sidebar">
            <div
              class="overflow-y-auto py-4 px-3 bg-gray-50 rounded bg-neutral"
            >
              <ul class="space-y-2">
                <ul>
                  <li>
                    <button
                      class="
                        flex
                        items-center
                        p-2
                        btn
                        text-base
                        font-normal
                        text-gray-900
                        rounded-lg
                        dark:text-white
                      "
                      type="submit"
                      v-if="searchOrFilterMode"
                      @click="backToNormal"
                    >
                      back
                    </button>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="
                        flex
                        items-center
                        p-2
                        text-base
                        font-normal
                        text-gray-900
                        rounded-lg
                        dark:text-white
                      "
                    >
                      <span class="flex-1 ml-3 whitespace-nowrap"
                        >Total Price</span
                      >
                    </a>
                  </li>
                  <li>
                    <h3
                      class="
                        flex
                        items-center
                        p-2
                        text-base
                        font-normal
                        text-gray-900
                        rounded-lg
                        dark:text-white
                      "
                    >
                      {{ printPrice }}
                    </h3>
                  </li>
                  <br />
                  <li
                    class="
                      flex
                      items-center
                      p-2
                      btn
                      text-base
                      font-normal
                      text-gray-900
                      rounded-lg
                      dark:text-white
                    "
                  >
                    <button @click="createPayment">Pay Order</button>
                  </li>
                </ul>
              </ul>
            </div>
          </aside>
        </div>
        <div class="flex flex-col">
          <div class="grid grid-cols-4 gap-4 flex-grow-1 justify-center">
            <order-list-card-comp
              v-for="menu in customersOrderLists"
              :key="menu.id"
              :data="menu"
            ></order-list-card-comp>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbarComp from "../components/Navbar.vue";
import orderListCardComp from "../components/OrderListCard.vue";
export default {
  name: "orderListComp",
  data() {
    return {
      page: 1,
      search: null,
      filter: null,
      searchOrFilterMode: false,
      name: "",
      email: "",
    };
  },
  components: {
    orderListCardComp,
    navbarComp,
  },
  methods: {
    async createPayment() {
      await this.$store.dispatch("createPayment", this.totalPrice);
      location.assign(this.xenditResponse.invoice_url);
    },
  },
  computed: {
    xenditResponse() {
      return this.$store.state.xenditResponse;
    },
    customersOrderLists() {
      return this.$store.state.customersOrderLists;
    },
    customerIsLogin() {
      return this.$store.state.customerIsLogin;
    },
    printPrice() {
      var rupiah = "";
      var angkarev = this.totalPrice.toString().split("").reverse().join("");
      for (var i = 0; i < angkarev.length; i++)
        if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + ".";
      return (
        "Rp. " +
        rupiah
          .split("", rupiah.length - 1)
          .reverse()
          .join("")
      );
    },
    totalPrice() {
      const data = this.$store.state.customersOrderLists;
      let total = 0;
      data.forEach((item) => {
        total += item.Menu.price;
      });

      return total;
    },
  },
  created() {
    if (!this.customerIsLogin) {
      this.$router.push("/logincustomer");
    }
    this.$store.dispatch("getCustomerOrder");
  },
};
</script>

<style>
</style>