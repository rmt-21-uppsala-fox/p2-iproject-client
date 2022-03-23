<template>
  <div class="flex gap-4 flex-col">
    <div class="card min-w-full bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Hy!</h2>
        <p>
          Selamat datang di dashboard Data KIB. Silahkan tekan tombol menu di
          atas untuk mulai menjelajah.
        </p>
      </div>
    </div>
    <div class="card min-w-full bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Input Data</h2>
        <div class="grid grid-cols-2">
          <div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Nama Barang</span>
              </label>
              <label class="input-group">
                <span>Nama</span>
                <input type="text" class="input input-bordered" />
              </label>
            </div>
          </div>
          <div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Type Barang</span>
              </label>
              <label class="input-group">
                <span>Type</span>
                <input type="text" class="input input-bordered" />
              </label>
            </div>
          </div>
          <div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Tanggal Pembelian</span>
              </label>
              <label class="input-group">
                <span>Tanggal</span>
                <input type="text" class="input input-bordered" />
              </label>
            </div>
          </div>
          <div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Sumber Dana</span>
              </label>
              <label class="input-group">
                <span>Sumber</span>
                <input type="text" class="input input-bordered" />
              </label>
            </div>
          </div>
          <div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Harga Barang</span>
              </label>
              <label class="input-group">
                <span>Harga</span>
                <input type="text" class="input input-bordered" />
              </label>
            </div>
          </div>
        </div>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardView",
  created() {
    this.$store.commit("SET_PAGE", "dashboard");
  },
};
</script>

<style>
</style>