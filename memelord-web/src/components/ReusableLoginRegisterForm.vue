<template>
  <form @submit.prevent="submit">
    <div>
      <input
        v-model="userData.email"
        type="email"
        class="form-control"
        placeholder="Email"
      />
    </div>
    <div class="mt-3">
      <input
        v-model="userData.password"
        type="password"
        class="form-control"
        placeholder="Password"
      />
    </div>
    <div v-if="this.$route.path == '/register'">
      <div class="mt-3">
        <input
          v-model="userData.username"
          type="text"
          class="form-control"
          placeholder="Username"
        />
      </div>
      <div class="mt-3">
        <input
          v-model="userData.profilePict"
          type="text"
          class="form-control"
          placeholder="Profile Picture (Optional)"
        />
      </div>
    </div>
    <div class="text-center mt-3">
      <button type="submit" class="btn btn-dark">{{ this.$route.name }}</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "ReusableLoginRegisterForm",
  data() {
    return {
      userData: {
        email: "",
        password: "",
        username: "",
        profilePict: "",
      },
    };
  },
  methods: {
    submit() {
      this.$emit("submit", this.userData);
    },
  },
};
</script>
