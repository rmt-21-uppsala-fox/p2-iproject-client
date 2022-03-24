<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h4>{{ data.data.title }}</h4>
    <div class="d-flex flex-column">
      <div class="d-flex container mt-4 media">
        <img class="poster mt-3 mb-3" :src="data.data.images.jpg.image_url" alt="" />
        <div class="d-flex align-items-center justify-content-center w-100">
          <iframe
            max-height="500"
            :src="data.data.trailer.embed_url"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <div class="mt-3">
      <p>Synopsis : {{ data.data.synopsis }}</p>
      <p>Rating : {{ data.data.score }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  },
  data() {
    return {
      data: {}
    }
  },
  created() {
    this.call(`animes/1`)
  },
  methods: {
    async call (page) {
      try {
        const {data} = await axios.get(`http://localhost:3000/${page}`)
        this.data = data
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      
    }
  }
}
</script>

<style>
.poster {
  max-height: 500px;
  max-width: 350px;
}
.media {
  background: #000;
}
.video-container { position: relative; padding-bottom: 56.25%; padding-top: 30px; height: 0; overflow: hidden; }
.video-container iframe, .video-container object, .video-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
</style>