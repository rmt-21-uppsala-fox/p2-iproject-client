<template>
  <!--====== HEADER PART START ======-->
  <header class="header-area">
    <div class="navbar-area">
      <div class="container relative">
        <div class="row">
          <div class="w-full">
            <nav class="flex items-center justify-between navbar navbar-expand-lg">
              <a
                class="mr-4 navbar-brand"
                href="#"
              >
                <img
                  src="assets/images/logowhat.png"
                  style="width:40%"
                  alt="Logo"
                >
              </a>
              <button
                class="block navbar-toggler focus:outline-none lg:hidden"
                type="button"
                data-toggle="collapse"
                data-target="#navbarOne"
                aria-controls="navbarOne"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
              </button>

              <div
                class="absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white shadow lg:w-auto collapse navbar-collapse lg:block top-100 mt-full lg:static lg:bg-transparent lg:shadow-none"
                id="navbarOne"
              >
                <ul
                  id="nav"
                  class="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex"
                >
                  <li class="nav-item active">
                    <a class="page-scroll">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll">Recipes</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll">Meal Plan</a>
                  </li>
                </ul>
              </div> <!-- navbar collapse -->

              <div class="absolute right-0 hidden mt-2 mr-24 navbar-btn sm:inline-block lg:mt-0 lg:static lg:mr-0">
                <a
                  class="main-btn gradient-btn"
                  data-scroll-nav="0"
                  href="#"
                  rel="nofollow"
                >Login</a>
              </div>
            </nav> <!-- navbar -->
          </div>
        </div> <!-- row -->
      </div> <!-- container -->
    </div> <!-- navbar area -->

    <div
      id="home"
      class="header-hero"
      style="background-image: url(assets/images/banner-bg.svg)"
    >
      <div class="container">
        <div class="justify-center row">
          <div class="w-full lg:w-2/3">
            <div class="pt-32 mb-12 text-center lg:pt-48 header-hero-content">
              <h3
                class="text-4xl font-light leading-tight text-white header-sub-title wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >WhatoEat - Recipe Collection</h3>
              <h2
                class="mb-3 text-4xl font-bold text-white header-title wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.5s"
              >WhatoEat ?</h2>
              <p
                class="text-white text wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.8s"
              >Find recipe, recommendation recipe based on weather, and you can plan your meal</p>
              <div>
                <input
                  class="wow fadeInUp w-full mb-3 rounded"
                  style="padding:6px"
                  type="text"
                  data-wow-duration="1.3s"
                  data-wow-delay="1.1s"
                  placeholder="Seach recipe, ex: chicken, chocolate, noddles..."
                >
                <a
                  href="#"
                  class="main-btn gradient-btn gradient-btn-2 wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="1.1s"
                >Search Recipe</a>
              </div>
            </div> <!-- header hero content -->
          </div>
        </div> <!-- row -->
        <div class="justify-center row">
          <div class="w-full lg:w-2/3">
            <div
              class="text-center header-hero-image wow fadeIn rounded-xl"
              data-wow-duration="1.3s"
              data-wow-delay="1.4s"
            >
              <img
                src="assets/images/hero-health.png"
                alt="hero"
                class="rounded-xl"
              >
            </div> <!-- header hero image -->
          </div>
        </div>
        <!--row -->
      </div> <!-- container -->
      <div
        id="particles-1"
        class="particles"
      ></div>
    </div> <!-- header hero -->
  </header>
  <!--====== HEADER PART ENDS ======-->
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style>
</style>