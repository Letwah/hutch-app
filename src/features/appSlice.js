import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import { FINE_ART, CART, ILLUSTRATION, INTRO } from "../store/types";
import getFineArtCatalogue from "../store/fineArtCatalogue";
import getIllustrationCatalogue from "../store/illustrationCatalogue";
// import dragImage from "../store/dragImage";
import { save, get } from "../persistance";

const cartItemIdsFromDisc = get("cartItemIdsFromDisc");

const initialState = {
  page: INTRO,
  fineArtCatalogue: getFineArtCatalogue(),
  illustrationCatalogue: getIllustrationCatalogue(),
  cartItemIds: cartItemIdsFromDisc ? cartItemIdsFromDisc : [],
  search: "",
  sort: "",
  availability: "",
  contactForm: "",
  toastContent: "",
  modalImage: "",
  isModalVisible: false,
  burgerOpen: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    addProductToCart: (state, action) => {
      state.cartItemIds.push(action.payload);
      state.page = CART;
      save("cartItemIdsFromDisc", state.cartItemIds);
    },
    removeProductFromCart: (state, action) => {
      const indexOf = state.cartItemIds.indexOf(action.payload);
      state.cartItemIds.splice(indexOf, 1);
      save("cartItemIdsFromDisc", state.cartItemIds);
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },

    setSort: (state, action) => {
      state.sort = action.payload;
    },

    setAvailability: (state, action) => {
      state.availability = action.payload;
    },

    setContactForm: (state, action) => {
      state.contactForm = action.payload;
    },

    setToastContent: (state, action) => {
      state.toastContent = action.payload;
    },
    setIsModalVisible: (state, action) => {
      state.isModalVisible = action.payload;
    },

    setModalImage: (state, action) => {
      state.modalImage = action.payload;
    },
    setBurgerOpen: (state) => {
      state.burgerOpen = !state.burgerOpen;
    },
  },
});

export const {
  setPage,
  addProductToCart,
  removeProductFromCart,
  setSearch,
  setSort,
  setAvailability,
  setContactForm,
  setToastContent,

  setIsModalVisible,
  setModalImage,
  setBurgerOpen,
} = appSlice.actions;

export const selectPage = (state) => state.app.page;
export const selectFineArtCatalogue = (state) => state.app.fineArtCatalogue;
export const selectIllustrationCatalogue = (state) =>
  state.app.illustrationCatalogue;
export const selectCartItemIds = (state) => state.app.cartItemIds;
export const selectSearch = (state) => state.app.search;
export const selectSort = (state) => state.app.sort;
export const selectAvailability = (state) => state.app.availability;
export const selectContactForm = (state) => state.app.contactForm;
export const selectToastContent = (state) => state.app.toastContent;
export const selectIsModalVisible = (state) => state.app.isModalVisible;
export const selectModalImage = (state) => state.app.modalImage;

export const selectBurgerOpen = (state) => state.app.burgerOpen;
export default appSlice.reducer;
