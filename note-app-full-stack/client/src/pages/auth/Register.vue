<template>
  <div class="register-container">
    <div class="register-card">
      <h3>Register</h3>
      <div class="form-section">
        <b-form-group label="Username">
          <b-form-input v-model="formData.username"></b-form-input>
        </b-form-group>
        <b-form-group label="Name">
          <b-form-input v-model="formData.name"></b-form-input>
        </b-form-group>
        <b-form-group label="Password">
          <b-form-input v-model="formData.password" type="password"></b-form-input>
        </b-form-group>
        <b-form-group label="Confirm password">
          <b-form-input v-model="formData.confirmPassword" type="password"></b-form-input>
        </b-form-group>
      </div>
      <div class="group-btn">
        <b-button variant="success" @click="register">Register</b-button>
        <router-link to="/login">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterVue",
  props: {},
  components: {},
  data() {
    return {
      formData: {
        username: "",
        name: "",
        password: "",
        confirmPassword: ""
      }
    };
  },
  methods: {
    /* <!--!--> Fetch: POST /auth/register (register): Register ------------------------------------------------------------------------- */
    async register () {
      console.log(this.formData)
    },
  },
};
</script>

<style lang="scss" scoped>
.register-container {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .register-card {
    background-color: rgba(255, 255, 255, 0.8);
    width: 500px;
    padding: 20px;
    border-radius: 8px;
    h3 {
      text-align: center;
      font-weight: 700;
    }
    .group-btn {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 10px;
    }
  }
}
</style>
