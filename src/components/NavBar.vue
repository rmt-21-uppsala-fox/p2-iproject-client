<template>
  <div>
    <div class="navbar bg-base-100">
      <div class="navbar-start"></div>
      <div class="navbar-center hidden lg:flex">
        <div class="btn-group">
          <input
            @click="changePage('home')"
            type="radio"
            name="options"
            data-title="Home"
            class="btn"
            checked
          />
          <input
            @click="changePage('about')"
            type="radio"
            name="options"
            data-title="Tentang"
            class="btn"
          />
          <input
            @click="changePage('school')"
            type="radio"
            name="options"
            data-title="Daftar Sekolah"
            class="btn"
          />
        </div>
      </div>
      <div class="navbar-end">
        <a
          v-if="page !== 'login'"
          @click="changePage('login')"
          class="btn btn-ghost"
          >Login</a
        >
      </div>
    </div>
    <!-- Dashboard -->
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      page: "",
    };
  },
  methods: {
    changePage(page) {
      this.page = page;
      this.$router.push({ name: `${page}` }).catch(() => {});
    },
  },
};
</script>

<style>
</style>
