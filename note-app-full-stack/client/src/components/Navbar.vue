<template>
  <div class="navbar-container">
    <div class="nav-menu">
      <img :src="logo" alt="logo" width="30" height="30" />
      <router-link class="vue-link" to="/note/list">Note</router-link>
      <router-link class="vue-link" to="#">Link card</router-link>
    </div>
    <div class="user-info">
      <b-dropdown
        size="lg"
        variant="link"
        toggle-class="text-decoration-none"
        no-caret
      >
        <template #button-content>
          <b-avatar variant="primary" text="BV" class="mr-3"></b-avatar>
        </template>
        <b-dropdown-item href="#">Action</b-dropdown-item>
        <b-dropdown-item href="#">Another action</b-dropdown-item>
        <b-dropdown-item href="#">Something else here...</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/image/download.jpg";
export default {
  name: "NavbarVue",
  props: {},
  data() {
    return {
      logo,
    };
  },
  mounted() {
    console.log(this.$store.state.auth.isAuthenticated);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(62, 62, 62);
  color: white;
  padding: 10px 40px;
  .nav-menu {
    display: flex;
    gap: 15px;
    align-items: center;
    img {
      border-radius: 30px;
    }
  }
}
</style>
