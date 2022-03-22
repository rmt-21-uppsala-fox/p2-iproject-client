<template>
  <div class="home">
    <div
      class="hero min-h-screen"
      style="
        background-image: url(https://thearyanschool.com/wp-content/uploads/2012/03/9e8914c5-18b5-418c-9223-ffc41c00ee00.jpg);
      "
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Selamat Datang</h1>
          <p class="mb-5">
            Silahkan registrasikan diri anda dengan menekan tombol di bawah ini
            jika belum memiliki akun. Jika telah memiliki akun, silahkan login
            dengan menekan tombol berwarna biru di pojok kanan atas.
          </p>
          <button class="btn glass">Register</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  computed: {
    page() {
      return this.$store.state.page;
    },
  },
};
</script>


