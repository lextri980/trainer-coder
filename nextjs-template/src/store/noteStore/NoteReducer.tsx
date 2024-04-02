import { createSlice } from "@reduxjs/toolkit";
import { INoteStore } from "./interface";

const initialState: INoteStore = {
  loading: false,
  message: "",
  success: true,
  noteList: [],
  note: null,
};

const NoteReducer = createSlice({
  name: "note",
  initialState,
  reducers: {
    getNoteListRequest(state) {
      state.loading = true;
    },
    getNoteListSuccess(state, action) {
      state.loading = false;
      state.noteList = action.payload.notes;
      state.success = true;
    },
    getNoteListFail(state, action) {
      state.loading = false;
      state.success = false;
      state.message = action.payload;
    },
  },
});

export const NoteAction = NoteReducer.actions;

export default NoteReducer.reducer;
