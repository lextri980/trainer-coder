<template>
  <div class="post-detail-container">
    <h1>Post detail</h1>

    <h2>{{ postDetail.title }}</h2>
    <h4>{{ postDetail.content }}</h4>

    <div class="comment-list">
      <p v-for="(item, index) in commentList" :key="index">
        {{ item.comment }}
      </p>
    </div>
  </div>
</template>

<script>
import apiService from "@/services/apiService";

export default {
  name: "PostDetailVue",
  props: {},
  components: {},
  data() {
    return {
      postDetail: {},
      commentList: [],
    };
  },
  mounted() {
    this.getPostDetail();
    this.getComments();
  },
  methods: {
    queryTransform(queryObject) {
      const transform = new URLSearchParams(queryObject).toString();
      return `?${transform}`;
    },
    async getPostDetail() {
      try {
        const response = await apiService.get(
          `/posts/${this.$route.params.id}`
        );
        this.postDetail = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getComments() {
      try {
        const response = await apiService.get(
          `comments${this.queryTransform({
            postId: this.$route.params.id,
          })}`
        );
        this.commentList = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
