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
                <th>No.</th>
                <th>Nama Barang</th>
                <th>Type Barang</th>
                <th>Tanggal Pembelian</th>
                <th>Asal Dana</th>
                <th>Harga</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->
              <tr v-for="(kib, i) in dataKib" :key="kib.id" class="hover">
                <td>{{ i + 1 }}</td>
                <th>{{ kib.name }}</th>
                <td>{{ kib.type }}</td>
                <td>{{ kib.date }}</td>
                <td>{{ kib.originOfFounds }}</td>
                <td>{{ kib.price }}</td>
                <td>
                  <button class="btn mr-1">Edit</button>
                  <button @click.prevent="doDelete(kib.id)" class="btn">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="btn-group">
            <button class="btn" @click="download('xlsx')">Download</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as XLSX from "xlsx";
export default {
  name: "DataListView",
  computed: {
    dataKib() {
      let data = this.$store.state.dataKib;
      let kib = data.map((el) => {
        let date = el.date.toString().slice(0, 10);
        return {
          id: el.id,
          name: el.name,
          type: el.type,
          date: date,
          originOfFounds: el.originOfFounds,
          price: el.price,
        };
      });
      return kib;
    },
  },
  methods: {
    download() {
      const data = XLSX.utils.json_to_sheet(this.dataKib);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, data, "data");
      XLSX.writeFile(wb, "kib.xlsx");
    },
    doDelete(id) {
      this.$store.dispatch("deleteKib", id);
    },
  },
  created() {
    this.$store.dispatch("getDataList");
  },
};
</script>

<style>
</style>