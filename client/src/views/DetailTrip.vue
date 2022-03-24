<template>
  <div style="height: 100vh">
    <div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-4" style="max-width: 1080px; margin-top: 120px">
            <img class="imgClass" :src="detailTrip.imgUrl" alt="gambar" />
          </div>
          <div class="col-7 text-start" style="padding-right: 120px; margin-top: 120px">
            <div class="row fs-3 mb-3 fw-bold colorWhite" style="padding-left: 10px">{{ detailTrip.name }}</div>
            <div class="row fw-bold colorWhite" style="font-size: 12px; padding-left: 10px">price</div>
            <div class="row fs-4 mb-3 fw-bold" style="color: #f0902c; padding-left: 10px">{{ formatRp }}</div>
            <div class="row fw-bold colorWhite" style="font-size: 12px; padding-left: 10px">Tanggal Perjalanan:</div>
            <div class="row fw-bold mb-4 colorWhite" style="font-size: 16px; padding-left: 10px">{{ detailTrip.date }}</div>
            <button class="btn btn-primary" type="button" @click="XenditPay(detailTrip.price)">Checkout Now</button>
            
            <form style="margin-top: 90px" class="row" @submit.prevent="translate(detailTrip.description)">
            <div class="collapse show col" >
              <select v-model="target" class="form-select" aria-label="Default select example">
                <option selected value="in">Indonesian</option>
                <option value="en">English</option>
                <!-- <option value="in">Indonesian</option> -->
              </select>
            </div>
            <div class="col">
                <button class="btn btn-warning" type="submit">translate</button>
            </div>
            </form>

            <div v-if="target === 'in'" class="row colorWhite mb-5" style="padding-left: 10px; margin-top: 10px">{{ detailTrip.description }}</div>
             <div v-if="target === 'en'" class="row colorWhite mb-5" style="padding-left: 10px; margin-top: 10px">{{ getTranslate }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailTrip",
  data() {
    return {
        
      target: "in",
    };
  },
  methods: {
    fetchTripByid() {
    this.target = "in"
      this.$store.dispatch("fetchTripByid", this.$route.params.id);
      
    },
    async XenditPay(price) {
      this.invoiceUrl = await this.$store.dispatch("xenditPay", price);
    },
    async translate(data){
        this.$store.dispatch("getTranslate", {target:this.target,q:data})
    },

  },
  computed: {
    getTranslate(){
    return this.$store.state.translate;
    },
    detailTrip() {
      return this.$store.state.tripById;
    },
    formatRp() {
      return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(this.detailTrip.price);
    },
  },
  created() {
    this.fetchTripByid();
    console.log("test detail");
    if (localStorage.getItem("access_token")) {
      this.$store.commit("SET_ISLOGIN", true);
    } else {
      this.$store.commit("SET_ISLOGIN", false);
    }
  },
};
</script>

<style scoped>
.imgClass {
  max-width: 350px;
  height: 500px;
  border-radius: 10px;
  object-fit: cover;
}
.colorWhite {
  color: white;
}

/* .modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
} */

/* .modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
} */

</style>
