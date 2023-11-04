<template>
  <div class="register-container">
    <div class="register-card">
      <h3>Register</h3>
      <div class="form-section">
        <ValidationObserver tag="form" ref="register-form">
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

          <ValidationProvider rules="required" #default="{ errors }" name="Tên">
            <b-form-group label="Tên">
              <b-form-input v-model="formData.name"></b-form-input>
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

          <ValidationProvider
            rules="required|confirmed:Mật khẩu"
            #default="{ errors }"
            name="Xác nhận mật khẩu"
          >
            <b-form-group label="Xác nhận mật khẩu">
              <b-form-input
                v-model="formData.confirmPassword"
                type="password"
              ></b-form-input>
              <small class="error">{{ errors[0] }}</small>
            </b-form-group>
          </ValidationProvider>
        </ValidationObserver>
      </div>
      <div class="group-btn">
        <b-button variant="success" @click="validateRegister"
          >Register</b-button
        >
        <router-link to="/auth/login">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { required, confirmed, email } from "@validations";
import apiService from "@/services/apiService";

export default {
  name: "RegisterVue",
  props: {},
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      required,
      confirmed,
      email,
      formData: {
        username: "",
        name: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    /* <!--@--> (validateRegister): Validate ------------------------------------------------------------------------- */
    async validateRegister() {
      const valid = await this.$refs["register-form"].validate();
      if (valid) {
        this.register();
      }
    },
    /* <!--!--> Fetch: POST /auth/register (register): Register ------------------------------------------------------------------------- */
    async register() {
      try {
        const response = await apiService.post("/auth/register", this.formData);
        this.$toast.success(response.data.message);
        this.$router.push({ name: "login" });
      } catch (error) {
        this.$toast.error(error.response.data.message);
      }
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
