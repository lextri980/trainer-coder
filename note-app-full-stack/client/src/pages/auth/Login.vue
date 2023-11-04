<template>
  <div class="login-container">
    <div class="login-card">
      <h3>Login</h3>
      <div class="form-section">
        <ValidationObserver tag="form" ref="login-form">
          <ValidationProvider
            rules="required|email"
            #default="{ errors }"
            name="Tên đăng nhập"
          >
            <b-form-group label="Tên đăng nhập">
              <b-form-input v-model="formData.username"></b-form-input>
              <small class="error">{{ errors[0] }}</small>
            </b-form-group>
          </ValidationProvider>

          <ValidationProvider
            rules="required"
            #default="{ errors }"
            name="Mật khẩu"
          >
            <b-form-group label="Mật khẩu">
              <b-form-input
                v-model="formData.password"
                type="password"
              ></b-form-input>
              <small class="error">{{ errors[0] }}</small>
            </b-form-group>
          </ValidationProvider>
        </ValidationObserver>
      </div>
      <div class="group-btn">
        <b-button variant="success" @click="validateLogin">Login</b-button>
        <router-link to="/auth/register">Register</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import apiService from "@/services/apiService";
import { email, required } from "@validations";
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "LoginVue",
  props: {},
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      required,
      email,
      formData: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    /* <!--@--> (validateLogin): Validate ------------------------------------------------------------------------- */
    async validateLogin() {
      const valid = await this.$refs["login-form"].validate();
      if (valid) {
        this.login();
      }
    },
    /* <!--!--> Fetch: POST /auth/login (login): Login ------------------------------------------------------------------------- */
    async login() {
      try {
        const response = await apiService.post("/auth/login", this.formData);
        this.$toast.success(response.data.message);
        this.$router.push({ name: "note-list" });
        localStorage.setItem('token', response.data.accessToken)
      } catch (error) {
        this.$toast.error(error.response.data.message);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
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
