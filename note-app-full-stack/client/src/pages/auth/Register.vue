<template>
  <div class="register-container">
    <div class="register-card">
      <h3>Register</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterVue",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
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
  }
}
</style>
