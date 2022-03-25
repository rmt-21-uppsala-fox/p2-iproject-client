<template>
  <div>
    <navbar-comp></navbar-comp>

    <div
      class="hero min-h-screen bg-fixed"
      style="
        background-image: url(https://wallpaperaccess.com/full/1567736.png);
      "
    >
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <form @submit.prevent="addMenu" enctype="multipart/form-data">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  v-model="name"
                  type="text"
                  placeholder="Food name"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Description</span>
                </label>
                <input
                  v-model="description"
                  type="text"
                  class="input input-bordered"
                  placeholder="Food Description"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Price</span>
                </label>
                <input
                  v-model="price"
                  type="text"
                  placeholder="Food Price"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Image</span>
                </label>
                <input
                  @change="getImage($event)"
                  type="file"
                  placeholder="Logo"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Food Categories</span>
                </label>
                <option-category-comp
                  :foodCategories="foodCategories"
                  @getCategory="getCategory"
                ></option-category-comp>
              </div>
              <div class="form-control mt-6">
                <button type="submit" class="btn btn-primary">Add Food</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbarComp from "../components/Navbar.vue";
import optionCategoryComp from "../components/OptionCategory.vue";
export default {
  name: "addFoodComp",
  components: {
    optionCategoryComp,
    navbarComp,
  },
  data() {
    return {
      name: "",
      description: "",
      price: "",
      image: "",
      CategoryId: "",
    };
  },
  methods: {
    getCategory(value) {
      this.CategoryId = value;
    },
    async addMenu() {
      let formData = new FormData();
      formData.append("image", this.image);
      formData.append("name", this.name);
      formData.append("description", this.description);
      formData.append("price", this.price);
      formData.append("CategoryId", this.CategoryId);

      await this.$store.dispatch("addMenu", formData);
      this.$router.push("/restaurant");
    },
    getImage(e) {
      console.log(e.target.files[0]);
      console.log(e.target.files);
      if (e.target.files[0]) {
        this.image = e.target.files[0];
      } else {
        this.image = e.target.files;
      }
    },
  },

  computed: {
    foodCategories() {
      return this.$store.state.foodCategory;
    },
  },
  created() {
    this.$store.dispatch("getFoodCategories");
  },
  // methods: {
  //   changePage(page) {
  //     this.$router.push(page);
  //   },
  //   async register() {
  //     await this.$store.dispatch("doRegister", {
  //       username: this.username,
  //       email: this.email,
  //       password: this.password,
  //       phoneNumber: this.phoneNumber,
  //       address: this.address,
  //     });
  //     if (this.successRegister) {
  //       this.changePage("/login");
  //     }
  //   },
  // },
  // computed: {
  //   successRegister() {
  //     return this.$store.state.successRegister;
  //   },
  // },
};
</script>

<style>
</style>