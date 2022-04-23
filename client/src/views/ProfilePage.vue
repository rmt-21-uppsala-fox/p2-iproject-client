<template>
  <div>
    <div class="container mt-3">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6 HideCopyText">
          <h1>Profile</h1>
          <div class="white square border border-5 rounded">
            <div class="d-flex text-start mt-4">
              <div class="mt-3 ms-5"> 
                <img class="rounded-circle border border-dark border-5 img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKTCvhbnqwyIbeN8eZAzlzb9s9d6LBnNWsw&usqp=CAU" alt="" />
              </div>
              <div class="ms-4 mt-3">
                <h1>Rio Richard</h1>
                <h3>Level : -</h3>
              </div>
            </div>

            <div class="mt-3 ms-4">
              <div class="row font-30px mb-4 text-start">
                <div class="col-3">Birth Date</div>
                <div class="col-1">:</div>
                <div class="col-2">1998-03-30</div>
              </div>
              <div class="row font-30px mb-4 text-start">
                <div class="col-3">Gender</div>
                <div class="col-1">:</div>
                <div class="col-2">Male</div>
              </div>
              <div class="row font-30px mb-4 text-start">
                <div class="col-3">City</div>
                <div class="col-1">:</div>
                <div class="col-2">Bekasi</div>
              </div>
              <div class="row font-30px mb-4 text-start">
                <div class="col-3">About me</div>
                <div class="col-1">:</div>
                <div id="desc" class="col-2 w-120px me-1">a good live a good live a good  a good live a good live a good live</div>
              </div>
            </div>
          </div>
          <div @click.prevent="backToHome" style="cursor: pointer" class="d-flex mt-2 w-150px gray border border-4 rounded-pill">
            <div class="flex text-start">
              <img class="img2" src="https://cdn0.iconfinder.com/data/icons/controls-add-on/48/v-38-512.png" />
            </div>
            <div class="ms-2 mt-1">Back to home</div>
          </div>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  components: {},
  methods: {
    backToHome() {
      router.push("/");
    },
  },
};
</script>

<style scoped>
.img1 {
  width: 100px;
}
.img2 {
  width: 30px;
}
.w-150px {
  width: 150px;
}

.gray {
  background-color: #e8e8e8;
}

.font-30px {
  font-size: 18px;
}

.white {
  background-color: #f5f5dc;
}

.square{
  height: 500px;
  width: 100%;
}

.w-120px{
  width: 350px;
}

#desc {
  text-align: justify;
  text-justify: auto;
}

.HideCopyText{
  -moz-user-select: none;
}
</style>
