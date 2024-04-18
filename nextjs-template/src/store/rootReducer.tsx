import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./authStore/AuthReducer";
import NoteReducer from "./noteStore/NoteReducer";
import LinkcardReducer from "./linkcardStore/LinkcardReducer";

export const rootReducer = combineReducers({
  auth: AuthReducer,
  note: NoteReducer,
  linkcard: LinkcardReducer,
});
