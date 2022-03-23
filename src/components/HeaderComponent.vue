<template>
  <!--====== HEADER PART START ======-->
  <header class="header-area">
    <NavbarComponent />
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
                class="text-white text wow fadeInUp mb-3"
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
                class="image-hero"
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
import NavbarComponent from "./NarbarComponent.vue";
export default {
  name: "HeaderComponent",
  components: { NavbarComponent },
};
</script>

<style scoped>
.image-hero {
  border-radius: 20px;
}
</style>