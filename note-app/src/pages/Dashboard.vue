<template>
  <div class='dashboard-container'>
    <h1>Dashboard</h1>
    <button @click="goNews">News</button>
  </div>
</template>

<script>
export default {
  name: 'DashboardVue',
  props: {},
  components: {},
  data() {
    return {}
  },
  methods: {
    goNews() {
      this.$router.push({name: 'news-list'})
    }
  },
}
</script>

<style lang='scss' scoped></style>