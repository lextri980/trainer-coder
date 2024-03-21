import { createSlice } from "@reduxjs/toolkit";
import { IPostState } from "./interface";

const initialState: IPostState = {
  loading: false,
  posts: [],
  comments: [],
  message: "",
};

const PostReducer = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPostRequest(state) {
      state.loading = true;
    },
    getPostSuccess(state, action) {
      state.loading = false;
      state.posts = action.payload;
    },
    getPostFail(state) {
      state.loading = false;
      state.posts = [];
    },
    getCommentRequest(state) {
      state.loading = true;
    },
    getCommentSuccess(state, action) {
      state.loading = false;
      state.comments = action.payload
    },
    getCommentFail(state, action) {
      state.loading = false;
      state.message = action.payload
    },
  },
});

export const PostActions = PostReducer.actions;

export default PostReducer.reducer;
