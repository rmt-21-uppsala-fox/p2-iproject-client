<template>
  <div class="home">
    <div class="container col-9 mt-5">
      <div class="row gx-4 gx-lg-5">
        <!-- each-card -->
        <div
          v-for="item in leagues"
          :key="item.id"
          class="col-md-4 mb-5"
          style="border-radius: 5px; background-color: #484e54"
        >
          <div class="card h-100">
            <img
              class="card-img-top py-3"
              :src="item.image"
              width="250px"
              height="180px"
              alt="Card image cap"
            />
            <div class="card-body">
              <h2 class="card-title">{{ item.name }}</h2>
              <p class="card-text justify-content">
                {{ item.description }}
              </p>
            </div>
            <div class="card-footer">
              <div>
                <button
                  @click.prevent="claimFav(item.name)"
                  class="btn btn-warning btn-sm text-dark"
                >
                  Set as Favorite
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- each-card -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "HomeView",
  methods: {
    claimFav(value) {
      let payload = {
        leagueName: value,
      };
      this.$store.dispatch("claimFav", payload);
    },
  },
  computed: {
    vids() {
      return this.$store.state.vids;
    },
    leagues() {
      return this.$store.state.leagues;
    },
  },
};
</script>
