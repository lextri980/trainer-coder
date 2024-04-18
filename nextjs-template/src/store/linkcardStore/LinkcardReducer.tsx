import { createSlice } from "@reduxjs/toolkit";
import { ILinkcardStore } from "./interface";

const initialState: ILinkcardStore = {
  loading: false,
  message: "",
  success: true,
  linkcardList: [],
  linkcard: null,
};

const LinkcardReducer = createSlice({
  name: "linkcard",
  initialState,
  reducers: {
    getLinkcardListRequest(state) {
      state.loading = true;
    },
    getLinkcardListSuccess(state, action) {
      state.loading = false;
      state.linkcardList = action.payload.linkcards;
    },
    getLinkcardListFail(state, action) {
      state.loading = false;
      state.linkcardList = [];
      state.message = action.payload;
    },
    createLinkcardRequest(state, _) {
      state.loading = true;
    },
    createNotSuccess(state, action) {
      state.loading = false;
      state.linkcardList.push(action.payload.linkcard);
      state.message = action.payload.message;
    },
    createLinkcardFail(state, action) {
      state.loading = false;
      state.linkcardList = [];
      state.message = action.payload;
    },
    getLinkcardDetailRequest(state, _) {},
    getLinkcardDetailSuccess(state, action) {},
    getLinkcardDetailFail(state, action) {},
    updateLinkcardRequest(state, _) {},
    updateLinkcardSuccess(state, action) {},
    updateLinkcardFail(state, action) {},
  },
});

export const LinkcardAction = LinkcardReducer.actions;

export default LinkcardReducer.reducer;
