<template>
  <div class="body">
    <div class="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div class="signup">
        <form @submit.prevent="registerHandler">
          <label for="chk" aria-hidden="true">Sign up</label>
          <input v-model="client.userName" type="userName" name="userName" placeholder="User name" required="" />
          <input v-model="client.email" type="email" name="email" placeholder="Email" required="" />
          <input v-model="client.password" type="password" name="pswd" placeholder="Password" required="" />
          <button type="submit">Sign up</button>
        </form>
      </div>

      <div class="login">
        <form @submit.prevent="loginHandler">
          <label for="chk" aria-hidden="true">Login</label>
          <input v-model="client.email" type="email" name="email" placeholder="Email" required="" />
          <input v-model="client.password" type="password" name="pswd" placeholder="Password" required="" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      client: {
        userName: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async loginHandler() {
      try {
        const { data } = await this.$store.dispatch("loginHandler", this.client);
        this.$store.commit("SET_ISLOGIN", true);
        console.log(data,"isi data");
        localStorage.setItem("access_token", data.access_token);
        // localStorage.setItem("id", data.payload.id);
        // localStorage.setItem("email", data.payload.email);
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    async registerHandler() {
      try {
        await this.$store.dispatch("registerHandler", {
          userName: this.client.userName,
          email: this.client.email,
          password: this.client.password,
        });
        this.client.userName = "",
        this.client.email = "", 
        this.client.password = ""
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: "Jost", sans-serif;
  background: url("https://media1.giphy.com/media/UI1LUP61p3YYM/giphy.gif?cid=790b7611cc34345fab5e9520c5edeefbf16aa8747cd141f5&rid=giphy.gif&ct=g") no-repeat center/ cover;
}
.main {
  width: 350px;
  height: 500px;
  background: red;
  overflow: hidden;
  background: url("https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260") no-repeat center/ cover;
  border-radius: 10px;
  box-shadow: 5px 20px 50px #000;
}
#chk {
  display: none;
}
.signup {
  position: relative;
  width: 100%;
  height: 100%;
}
label {
  color: rgb(211, 77, 0);
  font-size: 2.3em;
  justify-content: center;
  display: flex;
  margin: 60px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}
input {
  width: 60%;
  height: 45px;
  background: #e0dede;
  justify-content: center;
  display: flex;
  margin: 20px auto;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
}
button {
  width: 60%;
  height: 40px;
  margin: 10px auto;
  justify-content: center;
  display: block;
  color: #fff;
  background: #cc5c00;
  font-size: 1em;
  font-weight: bold;
  margin-top: 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in;
  cursor: pointer;
}
button:hover {
  background: #08050e;
}
.login {
  height: 460px;
  background: rgb(173, 69, 0);
  border-radius: 60% / 10%;
  transform: translateY(-180px);
  transition: 0.8s ease-in-out;
}
.login label {
  color: #ffffff;
  transform: scale(0.6);
}

#chk:checked ~ .login {
  transform: translateY(-500px);
}
#chk:checked ~ .login label {
  transform: scale(1);
}
#chk:checked ~ .signup label {
  transform: scale(0.6);
}
</style>
