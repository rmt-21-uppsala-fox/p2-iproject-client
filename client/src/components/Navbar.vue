<template>
  <!--NAVBAR-->
  <div class="sticky top-0 z-10">
    <nav
      class="
        sticky
        top-0
        relative
        w-full
        flex flex-wrap
        items-center
        justify-between
        py-4
        bg-black
        text-gray-500
        hover:text-gray-700
        focus:text-gray-700
        shadow-lg
        navbar navbar-expand-lg navbar-light
      "
    >
      <div
        class="
          container-fluid
          w-full
          flex flex-wrap
          items-center
          justify-between
          px-6
        "
      >
        <button
          class="
            navbar-toggler
            text-gray-500
            border-0
            hover:shadow-none hover:no-underline
            py-2
            px-2.5
            bg-transparent
            focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
          "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            class="w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </button>
        <div
          class="collapse navbar-collapse flex-grow items-center"
          id="navbarSupportedContent"
        >
          <div class="flex items-center flex-row p-3 mx-2 my-2 w-48">
            <div class="w-1/7 mx-2">
              <img
                class="w-full"
                src="../assets/siteLogo.png"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <!-- Left links -->
          <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
            <li
              @click.prevent="changePage('/')"
              class="
                nav-item
                mr-4
                p-2
                border
                rounded
                bg-red-700
                hover:bg-red-600
              "
            >
              <a
                class="nav-link font-bold text-white focus:text-gray-300 p-0"
                href="#"
                ><i class="fa-solid fa-house"></i> Home</a
              >
            </li>
            <li
              @click.prevent="changePage('/purchased')"
              class="
                nav-item
                p-2
                border
                mx-1
                rounded
                bg-red-700
                hover:bg-red-600
              "
            >
              <a
                class="nav-link font-bold text-white focus:text-gray-300 p-0"
                href="#"
                ><i class="fa-solid fa-film"></i> My Movies</a
              >
            </li>

            <li class="flex flex-wrap items-center mx-3">
              <form @submit.prevent="searchMovies()" class="mx-3">
                <div class="h-full content-center">
                  <div class="flex h-full float-left">
                    <div class="h-full">
                      <select
                        v-model="queries.genre"
                        class="
                          h-8
                          block
                          w-full
                          px-1
                          py-1
                          text-sm
                          font-normal
                          text-gray-700
                          bg-white bg-clip-padding bg-no-repeat
                          border border-solid border-gray-300
                          rounded
                          transition
                          ease-in-out
                          m-0
                          focus:text-gray-700
                          focus:bg-white
                          focus:border-blue-600
                          focus:outline-none
                        "
                        aria-label=".form-select-sm example"
                      >
                        <option value="">--Select Genre--</option>

                        <option
                          v-for="genre in genres"
                          v-bind:key="genre.id"
                          v-bind:value="genre.name"
                        >
                          {{ genre.name }}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="h-full justify-center w-ful px-2 float-left">
                    <input
                      v-model="queries.title"
                      class="w-full px-5 py-1 rounded text-black"
                      type="text"
                      placeholder="Search by Title"
                    />
                  </div>

                  <div class="h-full px-2 float-left">
                    <button
                      class="
                        w-full
                        bg-red-700
                        hover:text-white hover:bg-red-600
                        text-gray-200
                        font-bold
                        px-2
                        py-1
                        rounded
                        inline-flex
                        items-center
                      "
                    >
                      <i class="fas fa-search"></i>
                      <span>Search</span>
                    </button>
                  </div>
                </div>
              </form>
            </li>
            <li class="nav-item p-2">
              <a
                @click.prevent="logout"
                class="
                  nav-link
                  font-bold
                  text-red-500
                  hover:text-gray-100
                  focus:text-red-700
                  p-0
                "
                href="#"
                ><i class="fa fa-sign-out"></i> Sign out</a
              >
            </li>
          </ul>
          <!-- Left links -->

          <div class="float-left"></div>
        </div>
        <!-- Collapsible wrapper -->

        <!-- Right elements -->
        <div class="flex items-center relative">
          <!-- Icon -->

          <div class="dropdown relative">
            <a
              class="dropdown-toggle flex items-center hidden-arrow"
              href="#"
              id="dropdownMenuButton2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div class="mr-2">
                <span
                  class="
                    inline-flex
                    float-left
                    items-center
                    justify-center
                    px-2
                    py-1
                    text-xs
                    font-bold
                    leading-none
                    text-white
                    bg-red-700
                    rounded
                  "
                  >{{ localStorage.username }}</span
                >

                <h2 class="mr-2 text-xs font-bold text-white">
                  {{ localStorage.email }}
                </h2>
              </div>
              <img
                src="https://picsum.photos/seed/picsum/200/300"
                class="rounded-full ml-2"
                style="height: 35px; width: 35px"
                alt=""
                loading="lazy"
              />
            </a>

            <ul
              class="
                dropdown-menu
                min-w-max
                absolute
                hidden
                bg-white
                text-base
                z-50
                float-left
                py-2
                list-none
                text-left
                rounded-lg
                shadow-lg
                mt-1
                hidden
                m-0
                bg-clip-padding
                border-none
                left-auto
                right-0
              "
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <a
                  class="
                    dropdown-item
                    text-sm
                    py-2
                    px-4
                    font-normal
                    block
                    w-full
                    whitespace-nowrap
                    bg-transparent
                    text-gray-700
                    hover:bg-gray-100
                  "
                  href="#"
                  >Profile</a
                >
              </li>
              <li>
                <a
                  class="
                    dropdown-item
                    text-sm
                    py-2
                    px-4
                    font-normal
                    block
                    w-full
                    whitespace-nowrap
                    bg-transparent
                    text-gray-700
                    hover:bg-gray-100
                  "
                  href="#"
                  >Settings</a
                >
              </li>
              <li>
                <a
                  @click.prevent="logoutHandler"
                  class="
                    dropdown-item
                    text-sm
                    py-2
                    px-4
                    font-normal
                    block
                    w-full
                    whitespace-nowrap
                    bg-transparent
                    text-gray-700
                    hover:bg-gray-100
                  "
                  href="#"
                  >Logout</a
                >
              </li>
            </ul>
          </div>
        </div>
        <!-- Right elements -->
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      queries: {
        page: 1,
        title: "",
        genre: "",
      },
    };
  },
  created() {
    this.getGenres();
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
    async getGenres() {
      await this.$store.dispatch("getGenres");
    },
    async changePage(path) {
      console.log("INI CHANGEPAGE HANDLER");

      await this.$router.push(path);
    },
    async searchMovies() {
      if (this.$router.currentRoute.name !== "Search") {
        await this.$router.push({
          //kirim untuk merender komponen DetailPage
          name: "Search",
          query: {
            page: this.queries.page,
            title: this.queries.title,
            genre: this.queries.genre,
          },
        });
      } else {
        const queries = {
          page: this.queries.page,
          title: this.queries.title,
          genre: this.queries.genre,
        };
        await this.$store.dispatch("searchMovies", queries);
      }

      const queries = {
        page: this.$route.query.page,
        title: this.$route.query.title,
        genre: this.$route.query.genre,
      };
      await this.$store.dispatch("searchMovies", queries);
    },
  },
  computed: {
    localStorage() {
      return localStorage;
    },
    genres() {
      console.log(this.$store.state.genres, "INI GENRES");
      return this.$store.state.genres;
    },
  },
};
</script>

<style>
</style>