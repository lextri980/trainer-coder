<template>
  <div class="news-list-container">
    <h1>News list</h1>
    <div class="search-btn">
      <input type="text" v-model="searchItem" />
      <button @click="searchData">Search</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Title</th>
          <th>Content</th>
          <th>Action</th>
          <th>Go detail</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cloneList" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.content }}</td>
          <td>
            <router-link :to="`/news/detail/${item.id}`">Detail</router-link>
          </td>
          <td>
            <button @click="goDetail(item.id)">Go detail</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "NewsListVue",
  props: {},
  components: {},
  data() {
    return {
      newsList: [
        {
          id: "1",
          title: "hanoi house",
          content: "Ngáo giá",
        },
        {
          id: "2",
          title: "saigon house",
          content: "Ngon",
        },
        {
          id: "3",
          title: "dalat house",
          content: "Có ma",
        },
      ],
      cloneList: [],
      searchItem: "",
    };
  },
  mounted() {
    this.cloneList = [...this.newsList]
  },
  watch: {
    "$route.query.title"() {
      this.cloneList = this.newsList.filter((item) => {
        // return item.title === this.$route.query.title;
        return item.title.includes(this.$route.query.title);
      });
    },
  },
  methods: {
    goDetail(id) {
      this.$router.push({ name: "news-detail", params: { id } });
    },
    searchData() {
      this.cloneList = this.newsList
      this.$router
        .push({
          name: "news-list",
          query: { title: this.searchItem },
        })
        .catch(() => {});
      this.searchItem = "";
    },
  },
};
</script>

<style scoped>
table,
td,
th {
  border-collapse: collapse;
  border: 1px solid black;
}
td,
th {
  padding: 5px 10px;
}
.search-btn {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}
</style>
