<template>
  <div class="news-list-container">
    <h1>News list</h1>
    <div class="search-btn">
      <input type="text" />
      <button>Search</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Title</th>
          <th>Content</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in newsList" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.content }}</td>
          <td>
            <router-link :to="`/news/detail/${item.id}`">Detail</router-link>
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
          title: "Giá nhà Ha noi",
          content: "Ngáo giá",
        },
        {
          id: "2",
          title: "Giá nhà Sai Gon",
          content: "Ngon",
        },
        {
          id: "3",
          title: "Giá nhà Đà Lạt",
          content: "Có ma",
        },
      ],
    };
  },
  methods: {},
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
