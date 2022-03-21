<template>
  <div class="h-screen">
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
              focus:outline-none
              focus:ring-0
              focus:shadow-none
              focus:no-underline
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
                  src="./assets/siteLogo.png"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
            <!-- Left links -->
            <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
              <li
                @click.prevent="changePage"
                class="nav-item mr-4 p-2 border rounded bg-red-700 hover:bg-red-600"
              >
                <a
                  class="
                    nav-link
                    font-bold
                    text-white
                    
                    focus:text-gray-300
                    p-0
                  "
                  href="#"
                  ><i class="fa-solid fa-house"></i> Home</a
                >
              </li>
              <li class="nav-item p-2 border mx-1 rounded bg-red-700 hover:bg-red-600">
                <a
                  class="
                    nav-link
                    font-bold
                    text-white
                   
                    focus:text-gray-300
                    p-0
                  "
                  href="#"
                  ><i class="fa-solid fa-film"></i> My Movies</a
                >
              </li>
              
              <li class="flex flex-wrap items-center mx-3">
                <form @submit.prevent="filterHandler()" class=" mx-3">
                  <div class="h-full content-center">
                    <div class="flex h-full float-left">
                      <div class="h-full ">
                        <select
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

                          <!-- <option
                  v-for="category in getCategories"
                  v-bind:key="category.id"
                  v-bind:value="category.id"
                >
                  {{ category.name }}
                </option> -->
                        </select>
                      </div>
                    </div>

                    <div class=" h-full justify-center w-ful px-2 float-left">
                      <input
                        class="w-full px-5 py-1 rounded text-black "
                        type="text"
                        placeholder="Search by Title"
                      />
                    </div>

                    <div class="h-full px-2  float-left">
                      <button
                        class="
                          
                          w-full
                          bg-red-700
                          hover:text-white
                          hover:bg-red-600
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
                  @click.prevent="logoutHandler"
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
                    >username</span
                  >
                  <h2 class=""></h2>
                  <h2 class="mr-2 font-bold text-white">emal@mail.com</h2>
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

  <!--Contents-->
  <div class="h-screen">
    <div class="mx-7 my-7 w-1/2 border mb-8">
    <div class="bg-white">
      <h1>Top 5 Movies</h1>
    </div>
  </div>
  <div class="mx-7 my-7 border border-4 border-gray-800 my-8 ">
    
    <div class="bg-gray-400 bg-opacity-25 px-3 py-3 h-full">
     

       
      <div class="grid grid-cols-5 gap-3 mx-3">
        <div class="my-3 mx-2">
          <img src="https://imdb-api.com/images/original/MV5BMjdkZjNjNDItYzc4MC00NTkxLTk1MWEtY2UyZjY5MjUwNDNkXkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_Ratio0.6837_AL_.jpg" alt="" srcset="">
          <div class="bg-gray-600 px-2 my-2 rounded">
            <h1 class="text-white">The Mitchells vs the Machines </h1>
          </div>
          <div class="grid grid-cols-1">
            <button
          @click.prevent="handleDetailNews(data.id)"

          type="button"
          class="
          border border-gray-300
            inline-block
            px-6
            py-2.5
            bg-indigo-800
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-red-600 hover:shadow-lg
            bg-blue-700
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-indigo-700 active:shadow-lg
            transition
            duration-150
            ease-in-out
          "
        >
          Buy or Rent
        </button>
          </div>



        </div>

        <div class="my-3 mx-2">
          <img src="https://imdb-api.com/images/original/MV5BMjdkZjNjNDItYzc4MC00NTkxLTk1MWEtY2UyZjY5MjUwNDNkXkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_Ratio0.6837_AL_.jpg" alt="" srcset="">
          <div class="bg-gray-600 px-2 my-2 rounded">
            <h1 class="text-white">The Mitchells vs the Machines </h1>
          </div>
          <div class="grid grid-cols-1">
            <button
          @click.prevent="handleDetailNews(data.id)"

          type="button"
          class="
          border border-gray-300
            inline-block
            px-6
            py-2.5
            bg-indigo-800
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-red-600 hover:shadow-lg
            bg-blue-700
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-indigo-700 active:shadow-lg
            transition
            duration-150
            ease-in-out
          "
        >
          Buy or Rent
        </button>
          </div>



        </div>

        <div class="my-3 mx-2">
          <img src="https://imdb-api.com/images/original/MV5BMjdkZjNjNDItYzc4MC00NTkxLTk1MWEtY2UyZjY5MjUwNDNkXkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_Ratio0.6837_AL_.jpg" alt="" srcset="">
          <div class="bg-gray-600 px-2 my-2 rounded">
            <h1 class="text-white">The Mitchells vs the Machines </h1>
          </div>
          <div class="grid grid-cols-1">
            <button
          @click.prevent="handleDetailNews(data.id)"

          type="button"
          class="
          border border-gray-300
            inline-block
            px-6
            py-2.5
            bg-indigo-800
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-red-600 hover:shadow-lg
            bg-blue-700
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-indigo-700 active:shadow-lg
            transition
            duration-150
            ease-in-out
          "
        >
          Buy or Rent
        </button>
          </div>



        </div>

        <div class="my-3 mx-2">
          <img src="https://imdb-api.com/images/original/MV5BMjdkZjNjNDItYzc4MC00NTkxLTk1MWEtY2UyZjY5MjUwNDNkXkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_Ratio0.6837_AL_.jpg" alt="" srcset="">
          <div class="bg-gray-600 px-2 my-2 rounded">
            <h1 class="text-white">The Mitchells vs the Machines </h1>
          </div>
          <div class="grid grid-cols-1">
            <button
          @click.prevent="handleDetailNews(data.id)"

          type="button"
          class="
          border border-gray-300
            inline-block
            px-6
            py-2.5
            bg-indigo-800
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-red-600 hover:shadow-lg
            bg-blue-700
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-indigo-700 active:shadow-lg
            transition
            duration-150
            ease-in-out
          "
        >
          Buy or Rent
        </button>
          </div>



        </div>
        <div class="my-3 mx-2">
          <img src="https://imdb-api.com/images/original/MV5BMjdkZjNjNDItYzc4MC00NTkxLTk1MWEtY2UyZjY5MjUwNDNkXkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_Ratio0.6837_AL_.jpg" alt="" srcset="">
          <div class="bg-gray-600 px-2 my-2 rounded">
            <h1 class="text-white">The Mitchells vs the Machines </h1>
          </div>
          <div class="grid grid-cols-1">
            <button
          @click.prevent="handleDetailNews(data.id)"

          type="button"
          class="
          border border-gray-300
            inline-block
            px-6
            py-2.5
            bg-indigo-800
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-red-600 hover:shadow-lg
            bg-blue-700
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-indigo-700 active:shadow-lg
            transition
            duration-150
            ease-in-out
          "
        >
          Buy or Rent
        </button>
          </div>



        </div>

        
      </div>


    </div>
  </div>
  </div>

  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    //HelloWorld,
  },
};
</script>

<style>
@import "../dist/output.css";
@import url("https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css");
@import url("https://cdn.tailwindcss.com");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
