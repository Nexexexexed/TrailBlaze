import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { PopupData, PopupState } from "../../index";

const initialState: PopupState = {
  popups: [
    {
      id: "1",
      coord: [51.505, -0.09],
      title: "Skebob",
      text: "Skebob - is a bird",
      imageUrl: "/public/skebob.jpg",
    },
    {
      id: "2",
      coord: [51.5, -0.1],
      title: "Skebob",
      text: "Aboba - is a word",
      imageUrl: "/public/skebob.jpg",
    },
  ],
};

const popupsSlice = createSlice({
  name: "popups",
  initialState,
  reducers: {
    addPopup: (state, action: PayloadAction<PopupData>) => {
      state.popups.push(action.payload);
    },
    removePopup: (state, action: PayloadAction<string>) => {
      state.popups = state.popups.filter(
        (popup) => popup.id !== action.payload
      );
    },
    setPopup: (state, action: PayloadAction<PopupData[]>) => {
      state.popups = action.payload;
    },
  },
});

export const { addPopup, removePopup, setPopup } = popupsSlice.actions;
export default popupsSlice.reducer;
