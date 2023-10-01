<template>
  <div class="dashboard-container">
    <h1>Dashboard</h1>
    <div class="group-btn">
      <button @click="goNews">News</button>
      <button @click="$router.push({ name: 'post-list' })">Post list</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardVue",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    goNews() {
      this.$router.push({ name: "news-list" });
    },
  },
};
</script>

<style scoped>
.group-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
