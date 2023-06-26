import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import { FINE_ART } from "../store/types";
import fineArtImgs from "../store/fineArtImgs";

const initialState = {
  page: FINE_ART,
  fineArt: fineArtImgs,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = appSlice.actions;

export const selectPage = (state) => state.app.page;
export const selectFineArt = (state) => state.app.fineArt;

export default appSlice.reducer;
