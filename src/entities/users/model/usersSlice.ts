import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User, UserState } from "./types";

const initialState: UserState = {
  data: { email: "", password: "" },
  isAuth: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.data = action.payload;
      state.isAuth = true;
    },
    logout(state) {
      state.data = null;
      state.isAuth = false;
      localStorage.removeItem("accessToken");
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
