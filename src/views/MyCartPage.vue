<template>
  <div class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
    <!--Nav-->
    <NavBar></NavBar>

    <section class="bg-white py-4">
      <div class="container mx-auto flex flex-wrap pt-4 md:w-8/12" id="menu-view">
        <nav id="store" class="w-full z-30 top-0 px-6 py-1">
          <div
            class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3"
          >
            <a
              class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
              href="#"
            >My Cart</a>

            <div class="flex items-center" id="store-nav-content">
              <a class="pl-3 inline-block no-underline hover:text-black" href="#">
                <svg
                  class="fill-current hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                </svg>
              </a>

              <a class="pl-3 inline-block no-underline hover:text-black" href="#">
                <svg
                  class="fill-current hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </nav>

        <div class="w-full md:w-8/12 flex flex-col pt-4">
          <!--section-->
          <hr />
          <CartCard v-for="product in myCart" :key="product.id" :data="product"></CartCard>
        </div>

        <div class="w-full pb-6 md:w-4/12 pt-10 px-8">
          <div class="flex flex-col p-6 bg-gray-100" style="top: 9em">
            <!--Filters-->
            <p class="text-xl font-bold text-gray-900">Total Price</p>

            <p class="my-4 font-bold text-lg text-gray-900">{{rupiahPrice}}</p>
            <div class="flex justify-center">
              <button
                @click="addPayment"
                type="button"
                class="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded text-xs py-2 px-2 text-center mr-2 mb-2 w-full"
              >Buy</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import CartCard from "../components/CartCard.vue";
import Swal from "sweetalert2";
export default {
  name: "MyCartPage",
  components: {
    NavBar,
    CartCard,
  },
  computed: {
    myCart() {
      return this.$store.state.myCart;
    },
    totalPrice() {
      let sumPrice = 0;
      this.myCart.forEach((el) => {
        sumPrice += el.quantity * el.Product.price;
      });
      return sumPrice;
    },
    rupiahPrice() {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(this.totalPrice);
    },
  },
  methods: {
    async fetchMyCart() {
      await this.$store.dispatch("fetchMyCart");
    },
    async addPayment() {
      try {
        await this.$store.dispatch("addPayment");
        Swal.fire(
          "Transaction created, please proceed to payment.",
          "",
          "success"
        );
        this.$router.push("/transactions");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}!`,
        });
      }
    },
    setIsLogin(payload) {
      this.$store.commit("SET_ISLOGIN", payload);
    },
  },
  async created() {
    if (localStorage.access_token) this.setIsLogin(true);
    await this.fetchMyCart();
  },
};
</script>