import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import { FINE_ART, CART, ILLUSTRATION } from "../store/types";
import getFineArtCatalogue from "../store/fineArtCatalogue";
import getIllustrationCatalogue from "../store/illustrationCatalogue";
// import dragImage from "../store/dragImage";
import { saveStore, getStore } from "../persistance";

const dataFromDisk = getStore("store");
console.log(dataFromDisk);

const initialState = {
  page: FINE_ART,
  fineArtCatalogue: getFineArtCatalogue(),
  illustrationCatalogue: getIllustrationCatalogue(),
  cartItemIds: [],
  search: "",
};

const appSlice = createSlice({
  name: "app",
  initialState: dataFromDisk ? dataFromDisk : initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    addProductToCart: (state, action) => {
      state.cartItemIds.push(action.payload);
      state.page = CART;
      saveStore("store", state);
    },
    removeProductFromCart: (state, action) => {
      const indexOf = state.cartItemIds.indexOf(action.payload);
      state.cartItemIds.splice(indexOf, 1);
      saveStore("store", state);
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSortByPrice: (state, action) => {
      state.sortByPrice = action.payload;
    },
  },
});

export const {
  setPage,
  addProductToCart,
  removeProductFromCart,
  setSearch,
  setSortByPrice,
} = appSlice.actions;

export const selectPage = (state) => state.app.page;
export const selectFineArtCatalogue = (state) => state.app.fineArtCatalogue;
export const selectIllustrationCatalogue = (state) =>
  state.app.illustrationCatalogue;
export const selectCartItemIds = (state) => state.app.cartItemIds;
export const selectSearch = (state) => state.app.search;
export const selectSortByPrice = (state) => state.app.sortByPrice;

export default appSlice.reducer;
