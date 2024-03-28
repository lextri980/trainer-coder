import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./authStore/AuthReducer";

export const rootReducer = combineReducers({
  auth: AuthReducer,
});
