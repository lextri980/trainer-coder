import { createSlice } from "@reduxjs/toolkit";
import { ITodoStore } from "./interface";

const initialState: ITodoStore = {
  loading: false,
  todoList: [],
};

const TodoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getTodo: (state) => {
      state.loading = true;
    },
    createTodo: (state, action) => {
      state.loading = true;
      state.todoList.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload
      );
    },
    updateTodo: (state, action) => {
      state.todoList = state.todoList.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    },
  },
});

export const TodoActions = TodoReducer.actions;

export default TodoReducer.reducer;
