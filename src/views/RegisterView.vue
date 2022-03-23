<template>
  <div class="grid grid-cols-3 login">
    <div class="card w-100 col-start-2 bg-neutral text-neutral-content">
      <div class="card-body items-center text-center">
        <h2 class="card-title">Register!</h2>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            v-model="userInput.email"
            type="email"
            placeholder="Type here"
            class="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            v-model="userInput.password"
            type="password"
            placeholder="Type here"
            class="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Sekolah</span>
          </label>
          <select
            v-model="userInput.schoolId"
            class="select select-bordered select-primary"
          >
            <option disabled selected>Pilih Satu</option>
            <option
              v-for="school in listSchool"
              :value="school.npsn"
              :key="school.id"
            >
              {{ school.sekolah }}
            </option>
          </select>
        </div>
        <div class="card-actions justify-end">
          <button @click.prevent="regisUser" class="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data() {
    return {
      userInput: {
        email: "",
        password: "",
        schoolId: "",
      },
    };
  },
  methods: {
    async regisUser() {
      await this.$store.dispatch("registerUser", this.userInput).then(() => {
        let data = this.$store.state.isRegis;
        if (data) {
          this.$router.push("/login");
        }
      });
    },
  },
  computed: {
    listSchool() {
      return this.$store.state.school;
    },
  },
  created() {
    this.$store.dispatch("getSchoolDataPageOption");
  },
};
</script>

<style>
</style>