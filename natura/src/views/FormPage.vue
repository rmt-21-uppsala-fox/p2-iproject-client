<template>
    <v-container class="h-100">
    <v-row class="text-center h-100" justify="center" align="center">

      <v-col class="mb-4 text-center">
      <v-col cols="12" >
        <v-img
          :src="require('../assets/Logo_Natura-removebg-preview.png')"
          style="width: 333px"
          class="my-3 mx-auto"
          contain
        />
      </v-col>

        <p class="subheading font-weight-regular">
          Welcome to natura app <br>please fill this form to continue
        </p>
        <v-container style="width: 80%">
          <v-form>
            <v-text-field 
              label="Customer Name" 
              v-model="customerName" 
              value="0" 
              ></v-text-field>
              <v-text-field 
              label="Phone Number" 
              v-model="phoneNumber" 
              value="0" 
              ></v-text-field>
              <v-text-field 
              label="Total Person" 
              v-model="totalPerson" 
              value="0" 
              ></v-text-field>
            <v-btn @click="changePage" class="primary rounded-tl-xl rounded-tr-md rounded-br-xl rounded-bl-md mt-5">Submit</v-btn>
          </v-form>
        </v-container>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
    name: 'FormPage',
    data() {
      return {
          customerName: '',
          phoneNumber: '',
          totalPerson: '',
      }
    },
    methods: {
      changePage: function () {
          this.$store.commit("SET_CUSTOMERNAME", this.customerName)
          this.$store.commit("SET_PHONENUMBER", this.phoneNumber)
          this.$store.commit("SET_TOTALPERSON", this.totalPerson)
          this.$router.push('/menus')
      }
    }
}
</script>

<style>
.h-100 {
  height: 100%;
}
</style>