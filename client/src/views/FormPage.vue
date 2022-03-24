<template>
  <!-- form galangdana-->
  <div class="hidden container mx-auto px-4">
    <div
      class="
        bg-white
        shadow-md
        rounded
        px-8
        pt-6
        pb-8
        mb-4
        flex flex-col
        border-2
      "
    >
      <h1 class="mx-auto font-bold text-2xl">Form Galang Dana</h1>
      <span class="mx-auto text-slate-400 mb-5"></span>
      <div class="mb-4">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="username"
        >
          Judul
        </label>
        <input
          class="
            shadow
            appearance-none
            border
            rounded
            w-full
            py-2
            px-3
            text-grey-darker
          "
          id="username"
          type="text"
          placeholder="masukkan judul di sini"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="username"
        >
          Foto
        </label>
        <input
          class="
            shadow
            appearance-none
            border
            rounded
            w-full
            py-2
            px-3
            text-grey-darker
          "
          id="username"
          type="text"
          placeholder="Foto untuk penggalangan dana"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="username"
        >
          Target dana yang dibutuhkan
        </label>
        <input
          class="
            shadow
            appearance-none
            border
            rounded
            w-full
            py-2
            px-3
            text-grey-darker
          "
          id="username"
          type="number"
          placeholder="jumlah dana yang dibutuhkan"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="username"
        >
          Rekening anda
        </label>
        <input
          class="
            shadow
            appearance-none
            border
            rounded
            w-full
            py-2
            px-3
            text-grey-darker
          "
          id="username"
          type="number"
          placeholder="masukkan rekening anda"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="username"
        >
          Cerita
        </label>
        <textarea
          class="
            shadow
            appearance-none
            border
            rounded
            w-full
            py-2
            px-3
            text-grey-darker
          "
          id="username"
          type=""
          placeholder="ceritakan atau deskripsikan kebutuhan dana"
        ></textarea>
      </div>
      <div class="flex items-center justify-center">
        <button
          class="
            hover:bg-blue-500
            bg-blue-400
            hover:bg-blue-dark
            text-white
            font-bold
            py-2
            px-4
            rounded
          "
          type="button"
        >
          Galang Dana Sekarang
        </button>
      </div>
    </div>
  </div>
  <!--end form galangdana-->
</template>

<script>
export default {
  name: "FormPage",
};
</script>

<style>
</style>