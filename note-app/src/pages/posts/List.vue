<template>
  <div class="posts-list-container">
    <h1>Post</h1>
    <b-button class="create-btn" @click="openModal(false)">Create</b-button>
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
              <button @click.stop="openModal(true, item)">Update</button>
              <button @click.stop="openDeleteModal(item)">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <b-modal
      v-model="createModal"
      :title="isUpdate ? 'Update' : 'Create'"
      ok-title="Submit"
      @ok="submit(isUpdate ? true : false)"
    >
      <b-form-group label="Title">
        <b-form-input type="text" v-model="form.title" />
      </b-form-group>
      <b-form-group label="Content">
        <b-form-input type="text" v-model="form.content" />
      </b-form-group>
      <b-form-group label="Category">
        <b-form-input type="text" v-model="form.category" />
      </b-form-group>
      <b-form-group label="Status">
        <b-form-input type="text" v-model="form.status" />
      </b-form-group>
    </b-modal>

    <b-modal
      v-model="deleteModal"
      title="Delete"
      ok-title="Submit"
      @ok="deletePost"
    >
      <p>Are you sure?</p>
    </b-modal>
  </div>
</template>

<script>
import apiService from "@/services/apiService";
export default {
  name: "PostListVue",
  props: {},
  components: {},
  data() {
    return {
      createModal: false,
      deleteModal: false,
      postList: [],
      isUpdate: false,
      form: {
        id: "",
        title: "",
        content: "",
        category: "",
        status: "",
        publishedAt: new Date(),
      },
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
      } catch (error) {
        console.log(error);
      }
    },
    openDeleteModal(item) {
      this.deleteModal = true;
      this.form = item;
    },
    async deletePost() {
      try {
        const response = await apiService.delete(`/posts/${this.form.id}`);
        this.postList = this.postList.filter(
          (item) => item.id !== response.data.id
        );
        this.getPostAsyncAwait()
      } catch (error) {
        console.log(error);
      }
    },
    submit(isUpdate) {
      if (isUpdate) {
        this.updatePost();
      } else {
        this.createPost();
      }
    },
    async createPost() {
      const bodyData = {
        ...this.form,
        id: Math.random(1000000000000),
      };
      try {
        const response = await apiService.post("/posts", bodyData);
        if (response.status === 201) {
          this.postList.unshift(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
    goDetail(id) {
      this.$router.push({ name: "post-detail", params: { id } });
    },
    async getPostDetail(id) {
      try {
        const response = await apiService.get(`/posts/${id}`);
        this.form = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    openModal(isUpdate, item) {
      if (isUpdate) {
        this.isUpdate = isUpdate;
        this.getPostDetail(item.id);
      }
      this.createModal = true;
    },
    async updatePost() {
      try {
        const response = await apiService.patch(`/posts/${this.form.id}`);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
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
