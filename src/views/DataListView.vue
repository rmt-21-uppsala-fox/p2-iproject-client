<template>
  <div
    class="bg-base-300 rounded-b-box rounded-tr-box relative overflow-x-auto"
  >
    <div class="overflow-x-auto">
      <div class="card min-w-screen bg-base-100 shadow-xl">
        <div class="card-body flex flex-col justify-center items-center">
          <table class="table w-full">
            <!-- head -->
            <thead>
              <tr>
                <th></th>
                <th>NPSN</th>
                <th>Sekolah</th>
                <th>Kecamatan</th>
                <th>Alamat</th>
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->
              <tr v-for="(data, i) in school" :key="data.id" class="hover">
                <th>{{ i + 1 }}</th>
                <td>{{ data.npsn }}</td>
                <td>{{ data.sekolah }}</td>
                <td>{{ data.kecamatan }}</td>
                <td>{{ data.alamat_jalan }}</td>
              </tr>
            </tbody>
          </table>
          <div class="btn-group">
            <button class="btn" @click="table('min')">«</button>
            <button class="btn">Page {{ tablePage }}</button>
            <button class="btn" @click="table('max')">»</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   name: "DataListView",
};
</script>

<style>
</style>