<template>
  <div class="p-5 mb-5">
    <HeaderComponent />
    <section
      id="blog"
      class="blog-area pt-120"
    >
      <div class="container">
        <div class="row">
          <div class="w-full lg:w-1/2">
            <div class="pb-8 section-title">
              <div class="line"></div>
              <h3 class="title"><span>My Bookmark</span> </h3>
            </div> <!-- section title -->
          </div>
        </div> <!-- row -->
        <div class="justify-center row">
          <div
            v-for="bookmark in bookmarks"
            :key="bookmark.id"
            class="w-full md:w-2/3 lg:w-1/3"
          >
            <div
              class="mx-4 mt-10 single-blog wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div class="mb-5 overflow-hidden blog-image rounded-xl">
                <img
                  class="w-full"
                  :src="bookmark.image"
                  alt="blog"
                >
              </div>
              <div class="blog-content">
                <ul class="flex mb-5 meta">
                  <li>Calories: <a href="javascript:void(0)">{{Math.ceil(bookmark.calories)}}</a></li>
                </ul>
                <p class="mb-6 text-2xl leading-snug text-gray-900">{{bookmark.label}}</p>
                <a
                  class="text-theme-color-2"
                  href="javascript:void(0)"
                >
                  Learn More
                  <i class="ml-2 lni lni-chevron-right"></i>
                </a>
              </div>
            </div> <!-- single blog -->
          </div>
        </div> <!-- row -->
      </div> <!-- container -->
    </section>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
export default {
  name: "BookmarkPage",
  components: { HeaderComponent },
  computed: {
    bookmarks() {
      return this.$store.state.bookmarks;
    },
  },
  created: function () {
    if (localStorage.getItem("access_token")) {
      this.$store.commit("SET_STATUS_LOGIN", {
        isLogin: true,
        currentUser: this.$store.state.currentUser,
      });
    }
    this.$store.dispatch("fetchBookmark");
  },
};
</script>
