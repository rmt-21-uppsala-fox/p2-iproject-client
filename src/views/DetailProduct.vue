<template>
  <div class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
    <NavBar></NavBar>
    <section
      class="w-3/4 mx-auto bg-nordic-gray-light flex flex-col pt-12 md:pt-0 md:items-center bg-cover bg-right"
    >
      <div class="container flex pt-10 px-4">
        <div class="w-full px-4 border-2 max-w-md">
          <img :src="products.imgUrl" class="object-cover w-full h-72" />
        </div>
        <div class="w-full flex flex-col ml-6">
          <div class="flex flex-col w-full mt-4">
            <p class="font-bold text-gray-900">Name</p>
            <p class="mt-2">{{products.name}}</p>
          </div>
          <div class="flex w-full mt-4">
            <div class="flex flex-col">
              <p class="font-bold text-gray-900">Category</p>
              <p class="mt-2">{{category}}</p>
            </div>
            <div class="flex flex-col ml-12">
              <p class="font-bold text-gray-900">Stock</p>
              <p class="mt-2">{{products.stock}}</p>
            </div>
          </div>
          <div class="flex flex-col w-full mt-4">
            <p class="font-bold text-gray-900">Price</p>
            <p class="mt-2">{{rupiahPrice}}</p>
          </div>
          <div>
            <form class="flex w-full mt-4 items-center" @submit.prevent="addMyCart">
              <input
                v-model="quantity"
                type="number"
                min="0"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 mb-4 mt-2 w-20"
                placeholder="0"
                required
              />
              <button
                type="submit"
                class="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded text-xs py-1 px-1 text-center ml-6 mb-2 w-20"
              >add to cart</button>
            </form>
          </div>
        </div>
      </div>
      <div class="container flex flex-col pt-4 px-4">
        <div class="flex flex-col w-full md:w-3/4 mt-4">
          <p class="font-bold text-gray-900 text-lg">Workshop Name</p>
          <router-link
            :to="`/workshops/${products.WorkshopId}`"
            class="mt-2 hover:text-gray-900"
          >{{workshop}}</router-link>
          <p class="font-bold text-gray-900 text-lg mt-4">Description</p>
          <p class="mt-2">{{products.description}}.</p>
        </div>
      </div>
    </section>

    <PageFooter class="mt-24"></PageFooter>
  </div>
</template>
<script>
import Swal from "sweetalert2";
import NavBar from "../components/NavBar.vue";
import PageFooter from "../components/PageFooter.vue";
export default {
  name: "DetailProduct",
  components: {
    NavBar,
    PageFooter,
  },
  data() {
    return {
      quantity: "",
    };
  },
  computed: {
    workshop() {
      return this.$store.state.workshop;
    },
    products() {
      return this.$store.state.products;
    },
    category() {
      return this.$store.state.category;
    },
    rupiahPrice() {
      return (
        new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(this.products.price) + "/item"
      );
    },
  },
  methods: {
    async fetchProductById() {
      await this.$store.dispatch("fetchProductById", this.$route.params.id);
    },
    async addMyCart() {
      try {
        if (!localStorage.getItem("access_token")) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Please login/register first!`,
          });
        } else {
          await this.$store.dispatch("addMyCart", {
            productId: this.$route.params.id,
            quantity: this.quantity,
          });
          Swal.fire("Product is added to your cart.", "", "success");
          this.$router.push("/mycart");
        }
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
    await this.fetchProductById();
    if (localStorage.access_token) this.setIsLogin(true);
  },
};
</script>