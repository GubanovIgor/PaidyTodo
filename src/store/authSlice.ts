import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./types";

const initialState: AuthState = {
  isLoggedIn: false,
  userToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userToken = action.payload.token;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userToken = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
