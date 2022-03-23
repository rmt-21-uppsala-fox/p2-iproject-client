<template>
  <div>
    <body>
      <!-- Navbar -->
      <header>
        <nav class="py-3 bg-gray-900 navbar-color">
          <div class="flex-1 flex items-center justify-center">
            <div class="flex-shrink-0 flex items-center">
              <span class="text-white opacity-80 text-2xl uppercase"
                >My Forum</span
              >
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4 align-middle">
                <router-link
                  to="/"
                  class="text-white opacity-80 text-md uppercase hover:opacity-100 px-3 py-2"
                  >Home</router-link
                >
                <router-link
                  to=""
                  class="text-white opacity-80 text-md uppercase hover:opacity-100 px-3 py-2"
                  >Matches</router-link
                >
                <router-link
                  to=""
                  class="text-white opacity-80 text-md uppercase hover:opacity-100 px-3 py-2"
                  >Player Ranking</router-link
                >
                <a
                  to=""
                  class="text-white opacity-80 text-md uppercase hover:opacity-100 px-3 py-2"
                  @click.prevent="logoutHandler"
                  >Logout</a
                >
              </div>
            </div>
          </div>
        </nav>
        <!--SearchBox Section-->

        <div class="search-box">
          <div>
            <select name="" id="">
              <option value="Everything">Everything</option>
              <option value="Titles">Titles</option>
              <option value="Descriptions">Descriptions</option>
            </select>
            <input type="text" name="q" placeholder="search ..." />
            <button><i class="fa fa-search"></i></button>
          </div>
        </div>
      </header>
    </body>

    <div class="home">
      <div class="container">
        <div class="subforum">
          <div class="subforum-title">
            <h1>General Information</h1>
          </div>
          <div class="subforum-row">
            <div class="subforum-icon subforum-column center">
              <i class="fa fa-car center"></i>
            </div>
            <div class="subforum-description subforum-column">
              <h4><a class="search-box-a" href="#">Description Title</a></h4>
              <p>
                Description Content: let's try to be cool, otherwise,w at 'sthe
                point in libing together with people youdont' live.
              </p>
            </div>
            <div class="subforum-stats subforum-column center">
              <span>24 Posts | 12 Topics</span>
            </div>
            <div class="subforum-info subforum-column">
              <b><a href="">Last post</a></b> by <a href="">JustAUser</a>
              <br />on <small>12 Dec 2020</small>
            </div>
          </div>
        </div>
        <!--More-->

        <div class="subforum">
          <div class="subforum-title">
            <h1>General Information</h1>
          </div>
          <div class="subforum-row">
            <div class="subforum-icon subforum-column center">
              <i class="fa fa-car center"></i>
            </div>
            <div class="subforum-description subforum-column">
              <h4><a href="#">Description Title</a></h4>
              <p>
                Description Content: let's try to be cool, otherwise,w at 'sthe
                point in libing together with people youdont' live.
              </p>
            </div>
            <div class="subforum-stats subforum-column center">
              <span>24 Posts | 12 Topics</span>
            </div>
            <div class="subforum-info subforum-column">
              <b><a href="">Last post</a></b> by <a href="">JustAUser</a>
              <br />on <small>12 Dec 2020</small>
            </div>
          </div>
          <hr class="subforum-devider" />
          <div class="subforum-row">
            <div class="subforum-icon subforum-column center">
              <i class="fa fa-car center"></i>
            </div>
            <div class="subforum-description subforum-column">
              <h4><a href="#">Description Title</a></h4>
              <p>
                Description Content: let's try to be cool, otherwise,w at 'sthe
                point in libing together with people youdont' live.
              </p>
            </div>
            <div class="subforum-stats subforum-column center">
              <span>24 Posts | 12 Topics</span>
            </div>
            <div class="subforum-info subforum-column">
              <b><a href="">Last post</a></b> by <a href="">JustAUser</a>
              <br />on <small>12 Dec 2020</small>
            </div>
          </div>
          <hr class="subforum-devider" />
          <div class="subforum-row">
            <div class="subforum-icon subforum-column center">
              <i class="fa fa-car center"></i>
            </div>
            <div class="subforum-description subforum-column">
              <h4><a href="#">Description Title</a></h4>
              <p>
                Description Content: let's try to be cool, otherwise,w at 'sthe
                point in libing together with people youdont' live.
              </p>
            </div>
            <div class="subforum-stats subforum-column center">
              <span>24 Posts | 12 Topics</span>
            </div>
            <div class="subforum-info subforum-column">
              <b><a href="">Last post</a></b> by <a href="">JustAUser</a>
              <br />on <small>12 Dec 2020</small>
            </div>
          </div>
          <hr class="subforum-devider" />
          <div class="subforum-row">
            <div class="subforum-icon subforum-column center">
              <i class="fa fa-car center"></i>
            </div>
            <div class="subforum-description subforum-column">
              <h4><a href="#">Description Title</a></h4>
              <p>
                Description Content: let's try to be cool, otherwise,w at 'sthe
                point in libing together with people youdont' live.
              </p>
            </div>
            <div class="subforum-stats subforum-column center">
              <span>24 Posts | 12 Topics</span>
            </div>
            <div class="subforum-info subforum-column">
              <b><a href="">Last post</a></b> by <a href="">JustAUser</a>
              <br />on <small>12 Dec 2020</small>
            </div>
          </div>
          <hr class="subforum-devider" />
          <div class="subforum-row">
            <div class="subforum-icon subforum-column center">
              <i class="fa fa-car center"></i>
            </div>
            <div class="subforum-description subforum-column">
              <h4><a href="#">Description Title</a></h4>
              <p>
                Description Content: let's try to be cool, otherwise,w at 'sthe
                point in libing together with people youdont' live.
              </p>
            </div>
            <div class="subforum-stats subforum-column center">
              <span>24 Posts | 12 Topics</span>
            </div>
            <div class="subforum-info subforum-column">
              <b><a href="">Last post</a></b> by <a href="">JustAUser</a>
              <br />on <small>12 Dec 2020</small>
            </div>
          </div>
        </div>

        <div class="subforum">
          <div class="subforum-title">
            <h1>General Information</h1>
          </div>
          <div class="subforum-row">
            <div class="subforum-icon subforum-column center">
              <i class="fa fa-car center"></i>
            </div>
            <div class="subforum-description subforum-column">
              <h4><a href="#">Description Title</a></h4>
              <p>
                Description Content: let's try to be cool, otherwise,w at 'sthe
                point in libing together with people youdont' live.
              </p>
            </div>
            <div class="subforum-stats subforum-column center">
              <span>24 Posts | 12 Topics</span>
            </div>
            <div class="subforum-info subforum-column">
              <b><a href="">Last post</a></b> by <a href="">JustAUser</a>
              <br />on <small>12 Dec 2020</small>
            </div>
          </div>
          <hr class="subforum-devider" />
          <div class="subforum-row">
            <div class="subforum-icon subforum-column center">
              <i class="fa fa-car center"></i>
            </div>
            <div class="subforum-description subforum-column">
              <h4><a href="#">Description Title</a></h4>
              <p>
                Description Content: let's try to be cool, otherwise,w at 'sthe
                point in libing together with people youdont' live.
              </p>
            </div>
            <div class="subforum-stats subforum-column center">
              <span>24 Posts | 12 Topics</span>
            </div>
            <div class="subforum-info subforum-column">
              <b><a href="">Last post</a></b> by <a href="">JustAUser</a>
              <br />on <small>12 Dec 2020</small>
            </div>
          </div>
          <hr class="subforum-devider" />
          <div class="subforum-row">
            <div class="subforum-icon subforum-column center">
              <i class="fa fa-car center"></i>
            </div>
            <div class="subforum-description subforum-column">
              <h4><a href="#">Description Title</a></h4>
              <p>
                Description Content: let's try to be cool, otherwise,w at 'sthe
                point in libing together with people youdont' live.
              </p>
            </div>
            <div class="subforum-stats subforum-column center">
              <span>24 Posts | 12 Topics</span>
            </div>
            <div class="subforum-info subforum-column">
              <b><a href="">Last post</a></b> by <a href="">JustAUser</a>
              <br />on <small>12 Dec 2020</small>
            </div>
          </div>
          <hr class="subforum-devider" />
          <div class="subforum-row">
            <div class="subforum-icon subforum-column center">
              <i class="fa fa-car center"></i>
            </div>
            <div class="subforum-description subforum-column">
              <h4><a href="#">Description Title</a></h4>
              <p>
                Description Content: let's try to be cool, otherwise,w at 'sthe
                point in libing together with people youdont' live.
              </p>
            </div>
            <div class="subforum-stats subforum-column center">
              <span>24 Posts | 12 Topics</span>
            </div>
            <div class="subforum-info subforum-column">
              <b><a href="">Last post</a></b> by <a href="">JustAUser</a>
              <br />on <small>12 Dec 2020</small>
            </div>
          </div>
        </div>
        <!--Pagination starts-->
        <div class="pagination">
          pages: <a href="">1</a><a href="">2</a><a href="">3</a>
        </div>
        <!--pagination ends-->
        <div class="forum-info">
          <div class="chart">
            MyForum - Stats &nbsp;<i class="fa fa-bar-chart"></i>
          </div>
          <span
            ><u>5,369</u> Posts in <u>48</u> Topics by
            <u>8,124</u> Members.</span
          ><br />
          <span
            >Latest post: <b><a href="">Random post</a></b> on Dec 15 2021 By
            <a href="">RandomUser</a></span
          >.<br />
          <span>Check <a href="">the latest posts</a> .</span><br />
        </div>
        <!---->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  methods: {
     logoutHandler(){
      localStorage.clear()
      this.$store.commit('SET_ISLOGIN', false)
      this.$router.push('/login')
    }
  },
};
</script>
