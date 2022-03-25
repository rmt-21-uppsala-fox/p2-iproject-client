<template>
  <div
    class="hero min-h-screen bg-fixed"
    style="background-image: url(https://wallpaperaccess.com/full/1567736.png)"
  >
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <form
            @submit.prevent="registerRestaurant"
            enctype="multipart/form-data"
          >
            <div class="form-control">
              <label class="label">
                <span class="label-text">name</span>
              </label>
              <input
                v-model="name"
                type="text"
                placeholder="Your restaurant name"
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
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                v-model="password"
                type="password"
                placeholder="password"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Logo</span>
              </label>
              <input
                @change="getImage($event)"
                name="logo"
                type="file"
                placeholder="Logo"
                class="input input-bordered"
              />
            </div>
            <div class="form-control mt-6">
              <button type="submit" class="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
      <div class="text-center lg:text-right">
        <h1 class="text-5xl font-bold">
          Make it fast with us, <br />
          FastOrder!
        </h1>
        <p class="py-6">
          <span style="font-bold">FastOrder</span> is a website that'll make
          your customer's eating experience more convenient.
        </p>
        <p class="py-6">
          Allready have an account? Login
          <button
            @click="changePage('/login')"
            type="button"
            style="text-decoration: underline"
          >
            here
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "registerComp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      logo: "",
    };
  },
  methods: {
    changePage(page) {
      this.$router.push(page);
    },
    getImage(event) {
      this.logo = event.target.files[0];
    },
    async registerRestaurant() {
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("email", this.email);
      formData.append("password", this.password);
      formData.append("logo", this.logo);
      await this.$store.dispatch("registerRestaurant", formData);
      this.changePage("/login");
    },
  },
  // data() {
  //   return {
  //     name: "",
  //     email: "",
  //     password: "",
  //     phoneNumber: "",
  //     address: "",
  //   };
  // },
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