import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from './todoStore/TodoReducer'

export const rootReducer = combineReducers({
  todo: todoReducer,
});