import { createSlice } from "@reduxjs/toolkit";
import { IAuthStore } from "./interface";

const initialState: IAuthStore = {
  loading: false,
  message: "",
};

const AuthReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest(state, _) {
      state.loading = true;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.message = action.payload;
    },
    loginFail(state, action) {
      state.loading = false;
      state.message = action.payload;
    },
    registerRequest(state, _) {
      state.loading = true;
    },
    registerSuccess(state, action) {
      state.loading = false;
      state.message = action.payload;
    },
    registerFail(state, action) {
      state.loading = false;
      state.message = action.payload;
    },
  },
});

export const AuthAction = AuthReducer.actions;

export default AuthReducer.reducer;
