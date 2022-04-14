<template>
  <!--Details-->
  <div class="h-screen pb-8">
    <div class="mx-7 my-7 border border-2 rounded border-gray-800 my-8">
      <div class="bg-gray-600 bg-opacity-25 px-3 py-3 h-full">
        <div class="grid grid-cols-2 gap-1 mx-3 py-5 px-5">
          <div class="my-3 flex justify-center py-7">
            <!-- <div class="bg-gray-600 px-2 my-2 rounded">
            <h1 class="text-white">The Mitchells vs the Machines </h1>
          </div> -->
            <div class="w-3/4 center grid grid-cols-1">
              <img v-bind:src="movie.image" alt="" srcset="" />
              <button
                @click.prevent="postPayToken('buy')"
                type="button"
                class="
                  my-2
                  border border-gray-300
                  inline-block
                  px-6
                  py-2.5
                  bg-blue-800
                  text-white
                  font-bold font-sans
                  text-lg
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-red-600 hover:shadow-lg
                  bg-blue-700
                  focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-indigo-700 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out
                "
              >
                Buy {{ price.buy }}
              </button>
              <button
                @click.prevent="postPayToken('rent')"
                type="button"
                class="
                  border border-gray-300
                  inline-block
                  px-6
                  py-2.5
                  bg-blue-800
                  text-white
                  font-bold font-sans
                  text-lg
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-red-600 hover:shadow-lg
                  bg-blue-700
                  focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-indigo-700 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out
                "
              >
                Rent {{ price.rent }}
              </button>
            </div>
          </div>
          <div>
            <div
              class="
                bg-red-700
                rounded
                border border-white
                py-3
                w-full
                mx-1
                my-2
              "
            >
              <p class="mx-3 font-sans font-bold text-xl text-white">
                {{ movie.title }}
              </p>
            </div>
            <div class="bg-black rounded border border-white py-3 w-full mx-1">
              <p class="mx-3 my-1 font-sans font-bold text-xl text-white">
                Year : {{ movie.year }}
              </p>
              <p class="mx-3 my-1 font-sans font-bold text-xl text-white">
                Genre : {{ movie.genres }}
              </p>
              <p class="mx-3 my-1 font-sans font-bold text-xl text-white">
                Synopsis :
              </p>
              <div class="bg-gray-300 h-48 mx-2 my-2 py-2 px-2 overflow-y-auto">
                <p class="mx-3 my-1 font-sans font-bold text-xl text-black">
                  {{ movie.plot }}
                </p>
              </div>
              <div class="my-3">
                <div
                  class="
                    bg-red-700
                    rounded
                    border border-white
                    py-3
                    w-1/3
                    mt-4
                    mx-5
                  "
                >
                  <p class="mx-3 font-sans font-bold text-xl text-white">
                    Discussion
                  </p>
                </div>
                <div class="bg-gray-300 mx-5 my-2 py-2 px-2">
                  <div class="flex flex-col items-end bg-gray-200 bg-opacity-50 px-3 py-3 h-96   overflow-y-scroll">
                    <div class="">
                      <div class="float-left  p-4 min-w-full " v-for="(message, index) in chatMessages" v-bind:key="message.user + index">
                      <div class="font-bold">{{message.user}}</div>
                      <div >{{message.message}}</div> 
                    </div>
                      
                      <!-- <ul id="chatBox">
                      <li >{{message.user}}: {{message.message}}</li>
                    </ul> -->
                    </div>

                    
                   
                  </div>
                   <div class="w-full px-2 py-2 my-1">
                      <form @submit.prevent="sendMessage">
                        <input
                        
                        class="w-4/6 px-1 py-1 mx-1"
                          type="text"
                          v-model="message"
                          placeholder="Message"
                        />
                        <input  class="px-1 py-1 mx-1 w-1/6 bg-blue-700 text-white font-bold"  type="submit" value="Send" />
                      </form>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "Details",
  created() {
    this.getMovie();
    this.getMoviePrice();
    // this.isPurchased();
    this.setChatUser()
  },
  data() {
    return {
      message: "",
      messages: [],
    };
  },
  methods: {
    setChatUser() {
      const payload =  localStorage.username
      this.$store.dispatch("setChatUser", payload);
    },
    sendMessage() {
      const payload =  this.message
      console.log(payload, "INI MESSAGE")
      this.$store.dispatch("sendMessage", payload);
      this.message = ''
    },
    // async isPurchased() {
    //   const imdbId = this.$route.params.imdbId;
    //   this.$store.dispatch("isPurchased", imdbId);
    // },
    async getMovie() {
      const imdbId = this.$route.params.imdbId;
      this.$store.dispatch("getMovie", imdbId);
    },
    async getMoviePrice() {
      const imdbId = this.$route.params.imdbId;
      this.$store.dispatch("getMoviePrice", imdbId);
    },
    async addToPurchased() {
      const payload = {
        imdbId: this.$route.params.imdbId,
        title: this.movie.title,
        synopsis: this.movie.plot,
        imageUrl: this.movie.image,
        trailerUrl: this.trailer,
      };
      console.log(payload, "INI payload");
      await this.$store.dispatch("addToPurchased", payload);

      if (!this.purchaseSuccess) {
        Swal.fire(this.errorMsg);
      } else {
        this.$router.push("/purchased");
      }
      // .then(()=> {
      //   this.$router.push('/purchased')
      // })
      // .catch(err =>{
      //   Swal.fire(err)
      //   console.log(err, "INI ERROR")
      // })
    },
    async postPayToken(type) {
      const imdbId = this.$route.params.imdbId;
      const payload = {
        imdbId: imdbId,
        type: type,
      };
      await this.$store.dispatch("postPayToken", payload);
      console.log(this.payToken);
      window.snap.pay(this.payToken, {
        onSuccess: this.addToPurchased,
        onPending: function (result) {
          console.log("pending");
          console.log(result);
        },
        onError: function (result) {
          console.log("error");
          console.log(result);
        },
        onClose: function () {
          console.log(
            "customer closed the popup without finishing the payment"
          );
        },
      });
    },
  },
  computed: {
    movie() {
      return this.$store.state.movie;
    },
    price() {
      let formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      });

      const rent = formatter.format(this.$store.state.price.rent);
      const buy = formatter.format(this.$store.state.price.buy);
      return {
        rent: rent,
        buy: buy,
      };
    },
    payToken() {
      return this.$store.state.paymentToken;
    },
    trailer() {
      return this.$store.state.price.trailer;
    },
    errorMsg() {
      return this.$store.state.errorMsg;
    },
    purchaseSuccess() {
      return this.$store.state.purchaseSuccess;
    },
    chatMessages(){
      return this.$store.state.chatMessages
    }
  },
};
</script>

<style>
</style>