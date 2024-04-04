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
    createNoteRequest(state, _) {
      state.loading = true;
    },
    createNotSuccess(state, action) {
      state.loading = false;
      state.success = false;
      state.message = action.payload.message;
      state.noteList.push(action.payload.note);
    },
    createNoteFail(state, action) {
      state.loading = false;
      state.success = false;
      state.message = action.payload.message;
    },
    getNoteDetailRequest(state, _) {
      state.loading = true;
      state.note = null;
    },
    getNoteDetailSuccess(state, action) {
      state.loading = false;
      state.success = false;
      state.message = action.payload.message;
      state.note = action.payload.note;
    },
    getNoteDetailFail(state, action) {
      state.loading = false;
      state.success = false;
      state.message = action.payload.message;
      state.note = null;
    },
  },
});

export const NoteAction = NoteReducer.actions;

export default NoteReducer.reducer;
