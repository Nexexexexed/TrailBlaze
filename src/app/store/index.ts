import { configureStore } from "@reduxjs/toolkit";
import popupsReducer from "../../entities/popups/model/popupSlice";

export const store = configureStore({
  reducer: {
    popups: popupsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
