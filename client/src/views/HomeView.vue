<template>
  <div>
    <navbar></navbar>
    <div class="home">
      <div class="container">
        <div class="subforum">
          <div class="subforum-title">
            <h1>General Information</h1>
          </div>
          <div class="search-box">
          <div>
            <input type="text" v-model="search" name="q" placeholder="search ..." />
            <button><i class="fa fa-search"></i></button>
          </div>
        </div>
          <news-page
            v-for="news in filteredNews"
            :key="news.title"
            :news="news"
          ></news-page>
        </div>
        <!--More-->

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
import NewsPage from "@/components/NewsPage.vue";
import Navbar from '../components/navbar.vue';
export default {
  name: "HomeView",
  data(){
    return {
      search:''
    }
  },
  components: {
    NewsPage,
    Navbar
  },
  methods: {

    fetchNews() {
      this.$store.dispatch("fetchNews");
    },
  },
  created() {
    this.fetchNews();
  },
  computed: {
    news() {
      return this.$store.state.news;
    },
    filteredNews(){
      return this.news.filter((news) =>{
        return news.title.match(this.search)
      })
    }
  },
};
</script>
