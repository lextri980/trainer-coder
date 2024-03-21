import { combineReducers } from "@reduxjs/toolkit";
import PostReducer from "./postStore/PostReducer";
import AuthReducer from "./authStore/AuthReducer";

export const rootReducer = combineReducers({
  post: PostReducer,
  auth: AuthReducer
});
