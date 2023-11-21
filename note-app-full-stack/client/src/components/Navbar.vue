<template>
  <div class="navbar-container">
    <div class="nav-menu">
      <img :src="logo" alt="logo" width="30" height="30" />
      <router-link class="vue-link" to="/note/list">Note</router-link>
      <router-link class="vue-link" to="/link-card/list">Link card</router-link>
    </div>
    <div class="user-info">
      <b-dropdown size="lg" toggle-class="text-decoration-none" no-caret right>
        <template #button-content>
          <b-avatar variant="primary" text="BV" class="mr-3"></b-avatar>
        </template>
        <b-dropdown-item to="/profile">Profile</b-dropdown-item>
        <b-dropdown-item @click="logout">Logout</b-dropdown-item>
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
  methods: {
    /* <!--@--> (logout): Logout ------------------------------------------------------------------------- */
    logout() {
      localStorage.removeItem("token");
      this.$router.push({ name: "login" });
    },
  },
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
