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
      <DashboardCard v-if="dashPage === 'dashoard'" />
      <FormKib v-if="dashPage === 'formkib'" />
      <DataListView v-if="dashPage === 'datalist'" />
    </div>
  </div>
</template>

<script>
import DashboardCard from "../components/DashboardCard.vue";
import DataListView from "../components/DataListView.vue";
import FormKib from "../components/FormKib.vue";
export default {
  name: "DashboardView",
  components: {
    FormKib,
    DataListView,
    DashboardCard,
  },
  computed: {
    dashPage() {
      return this.$store.state.dashboardPage
    }
  },
  created() {
    this.$store.commit("SET_PAGE", "dashboard");
  },
};
</script>