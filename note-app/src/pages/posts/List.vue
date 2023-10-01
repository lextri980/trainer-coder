<template>
  <div class="posts-list-container">
    <h1>Post</h1>
  </div>
</template>

<script>
import { apiService } from "@/services/apiService";
export default {
  name: "PostListVue",
  props: {},
  components: {},
  data() {
    return {};
  },
  async mounted() {
    // this.getPostPromise();
    await this.getPostAsyncAwait();
    console.log('?')
  },
  methods: {
    // Promise
    getPostPromise() {
      apiService
        .get("/posts")
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //Async await
    async getPostAsyncAwait() {
      try {
        const response = await apiService.get("/posts");
        console.log('async', response)
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
