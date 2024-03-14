import { createSlice } from "@reduxjs/toolkit";
import { IPostState } from "./interface";

const initialState: IPostState = {
  loading: false,
  posts: [],
};

const PostReducer = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPostRequest(state) {
      state.loading = true;
    },
    getPostSuccess(state, action) {
      state.loading = false
      state.posts = action.payload
    },
    getPostFail(state) {
      state.loading = false
      state.posts = []
    },
  },
});

export const PostActions = PostReducer.actions;

export default PostReducer.reducer;
