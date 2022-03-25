<template>
  <div
    class="hero min-h-screen bg-fixed"
    style="background-image: url(https://wallpaperaccess.com/full/1567736.png)"
  >
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <form @submit.prevent="doRegisCust">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                v-model="name"
                type="text"
                placeholder="Your name"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                v-model="email"
                type="email"
                class="input input-bordered"
                placeholder="Your email"
              />
            </div>
            <div class="form-control mt-6">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginCustomerComp",
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    async doRegisCust() {
      const RestaurantId = localStorage.getItem("RestaurantId");
      await this.$store.dispatch("doRegisCust", {
        name: this.name,
        email: this.email,
        RestaurantId,
      });
      if (this.customerIsLogin) {
        const RestaurantId = localStorage.RestaurantId;
        this.$router.push(`${RestaurantId}/customer`);
      }
    },
  },
  computed: {
    customerIsLogin() {
      return this.$store.state.customerIsLogin;
    },
  },
};
</script>

<style>
</style>