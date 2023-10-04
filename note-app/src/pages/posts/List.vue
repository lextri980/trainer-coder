<template>
  <div class="posts-list-container">
    <h1>Post</h1>
    <button class="create-btn">Create</button>
    <table>
      <thead>
        <th>No.</th>
        <th>Title</th>
        <th>Content</th>
        <th>Category</th>
        <th>Status</th>
        <th>Published date</th>
        <th>Action</th>
      </thead>
      <tbody v-if="postList.length === 0">
        <tr>
          No data
        </tr>
      </tbody>
      <tbody v-else>
        <tr
          v-for="(item, index) in postList"
          :key="index"
          @click="goDetail(item.id)"
        >
          <td>{{ index + 1 }}</td>
          <td class="title-table">{{ item.title }}</td>
          <td>
            <p class="text-overflow">
              {{ item.content }}
            </p>
          </td>
          <td>{{ item.category }}</td>
          <td>{{ item.status }}</td>
          <td>{{ item.publishedAt }}</td>
          <td>
            <div class="action-btn-group">
              <button>Update</button>
              <button>Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { apiService } from "@/services/apiService";
export default {
  name: "PostListVue",
  props: {},
  components: {},
  data() {
    return {
      postList: [],
    };
  },
  async mounted() {
    // this.getPostPromise();
    await this.getPostAsyncAwait();
  },
  methods: {
    // Promise
    // getPostPromise() {
    //   apiService
    //     .get("/posts")
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
    //Async await
    async getPostAsyncAwait() {
      try {
        const response = await apiService.get("/posts");
        this.postList = response.data;
        console.log(this.postList);
      } catch (error) {
        console.log(error);
      }
    },
    goDetail(id) {
      this.$router.push({ name: "post-detail", params: { id } });
    },
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
}
table,
th,
td {
  border: 1px solid black;
}
th,
td {
  padding: 3px 10px;
}
tr {
  cursor: pointer;
}
tr:hover {
  background-color: rgb(226, 226, 226);
}
.text-overflow {
  display: -webkit-box;
  max-width: 350px;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.title-table {
  display: table-cell;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.action-btn-group {
  display: flex;
  justify-content: center;
  gap: 5px;
}
.create-btn {
  position: fixed;
  top: 20px;
  left: 20px;
}
</style>
