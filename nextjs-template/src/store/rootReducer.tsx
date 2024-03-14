import { combineReducers } from "@reduxjs/toolkit";
import PostReducer from "./postStore/PostReducer";

export const rootReducer = combineReducers({
  post: PostReducer,
});
