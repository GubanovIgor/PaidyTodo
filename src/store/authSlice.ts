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
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
