import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./authStore/AuthReducer";
import NoteReducer from "./noteStore/NoteReducer";

export const rootReducer = combineReducers({
  auth: AuthReducer,
  note: NoteReducer,
});
