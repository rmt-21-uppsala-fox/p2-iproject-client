<template>
  <li>
    <div class="flex items-center space-x-4">
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
          {{ each.name }}
        </p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">{{ each.Customer.email }}</p>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        {{ formatPrice }}
      </div>
      <div class="flex-shrink-0">
        <button
          v-if="status === 'UNPAID'"
          @click="payWithXendit(each.id)"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Pay with Xendit
        </button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "BookingList",
  props: ["each"],
  methods: {
    async payWithXendit(id) {
      console.log(id, "masuk 32");
      await this.$store.dispatch("payWithXendit", id);
      this.$router.push({ name: "HomePage" });
    },
  },

  computed: {
    status() {
      return this.each.status;
    },
    formatPrice() {
      let formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      });
      return formatter.format(this.each.price);
    },
  },
};
</script>

<style></style>
