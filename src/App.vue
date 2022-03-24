<template>
  <div id="app">
    <div class="drawer h-screen w-full rounded">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <!-- Dashboard bar here -->
        <div v-if="isPage === 'dashboard'" class="navbar bg-base-100">
          <div class="flex-1">
            <label
              for="my-drawer"
              class="btn btn-square drawer-button btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-5 h-5 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div class="flex-none gap-2">
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                  <img src="https://api.lorem.space/image/face?hash=33791" />
                </div>
              </label>
              <ul
                tabindex="0"
                class="
                  mt-3
                  p-2
                  shadow
                  menu menu-compact
                  dropdown-content
                  bg-base-100
                  rounded-box
                  w-52
                "
              >
                <li>
                  <a class="justify-between">
                    Profile
                    <span class="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
        <nav>
          <NavBar v-if="isPage !== 'dashboard'" />
        </nav>
        <section>
          <router-view />
        </section>
        <footer class="">
          <HFooter class="flex flex-col justify-center p-5"></HFooter>
        </footer>
        <!-- Page content here -->
      </div>
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul
          class="
            menu
            bg-base-100
            w-56
            p-2
            rounded-box
            flex flex-col
            items-center
            gap-6
          "
        >
          <li>
            <div class="avatar">
              <div class="w-24 mask mask-squircle">
                <img src="https://api.lorem.space/image/face?hash=47449" />
              </div>
            </div>
          </li>
          <li>
            <div class="badge badge-primary">operator</div>
          </li>
          <li>
            <div class="card card-compact w-50 bg-base-100 shadow-xl">
              <div class="card-body">
                <li @click="changePage('home')" class="hover-bordered">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Home
                  </a>
                </li>
              </div>
            </div>
            <div class="card card-compact w-50 bg-base-100 shadow-xl">
              <div class="card-body">
                <li @click="changeDashboard('datalist')" class="hover-bordered">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Data KIB
                  </a>
                </li>
                <li @click="changeDashboard('formkib')" class="hover-bordered">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Input Data
                  </a>
                </li>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import HFooter from "vue-hacktiv8-footer";
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    HFooter,
    NavBar,
  },
  computed: {
    isPage() {
      return this.$store.state.isPage;
    },
  },
  methods: {
    changePage(page) {
      this.page = page;
      this.$store.commit("SET_PAGE", page);
      this.$router.push({ name: `${page}` }).catch(() => {});
    },
    changeDashboard(page) {
      this.$store.commit("SET_DASHBOARD_PAGE", page);
    }
  },
};
</script>
<style>
section {
  height: 100vh;
}

.social-links {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>