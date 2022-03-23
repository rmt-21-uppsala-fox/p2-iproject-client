<template>
  <div>
    <div class="container">
      <nav class="d-flex justify-content-between text-white mb-3">
        <div class="card-header">
          <SideBarTab></SideBarTab>
        </div>
        <div class="card-header">
          <h3>𝕄𝔼𝕄𝔼𝕃𝕆ℝ𝔻</h3>
        </div>
        <div class="card-header">
          <div class="user-menu d-flex">
            <div class="user-name text-end me-3">
              <h6 class="mb-0">Hello</h6>
              <p class="mb-0 text-sm">Jack</p>
            </div>
            <button class="btn btn-dark" @click="doLogout">Logout</button>
            <button class="btn btn-dark" @click="doLogout">Login</button>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import SideBarTab from "@/components/SideBarTab.vue";
export default {
  name: "NavigationBar",
  components: {
    SideBarTab,
  },
};
</script>
