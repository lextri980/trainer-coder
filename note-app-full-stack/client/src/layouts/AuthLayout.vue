<template>
  <div class="auth-layout-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "AuthLayoutVue",
};
</script>

<style lang="scss" scoped>
.auth-layout-container {
  min-height: 100vh;
  background-image: url("../assets/image/pen-notebook-eyewear-to-write.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  position: relative;
}
</style>
