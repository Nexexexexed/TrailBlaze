import { configureStore } from "@reduxjs/toolkit";
import popupsReducer from "../../entities/popups/model/popupSlice";
import { userReducer } from "../../entities/users/model/usersSlice";
import { userApi } from "../../entities/users/api/userApi";

export const store = configureStore({
  reducer: {
    popups: popupsReducer,
    [userApi.reducerPath]: userApi.reducer,
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
