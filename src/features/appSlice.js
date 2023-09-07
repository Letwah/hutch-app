import { createSlice } from "@reduxjs/toolkit";

import { CART, INTRO } from "../store/types";

// import getIllustrationCatalogue from "../store/illustrationCatalogue";
// import dragImage from "../store/dragImage";
import { save, get } from "../persistance";

const cartItemIdsFromDisc = get("cartItemIdsFromDisc");

const initialState = {
  page: INTRO,
  fineArtCatalogue: [], //empty array to stop comp crashing before data arrived.
  illustrationCatalogue: [], //getIllustrationCatalogue(),
  cartItemIds: cartItemIdsFromDisc ? cartItemIdsFromDisc : [],
  search: "",
  sort: "",
  sold: "",
  sortByDate: "",
  contactForm: "",
  toastContent: "",
  modalImage: "",
  isModalVisible: false,
  burgerOpen: false,
  submitted: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    addProductToCart: (state, action) => {
      console.log(state.cartItemIds);
      if (!state.cartItemIds.includes(action.payload)) {
        state.cartItemIds.push(action.payload);
        save("cartItemIdsFromDisc", state.cartItemIds);
      }
      state.page = CART;
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

    setSold: (state, action) => {
      state.sold = action.payload;
    },

    setSortByDate: (state, action) => {
      state.sortByDate = action.payload;
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

    setFineArt: (state, action) => {
      state.fineArtCatalogue = action.payload;
    },
    setIllustration: (state, action) => {
      state.illustrationCatalogue = action.payload;
    },

    setPurchaseEnq: (state, action) => {
      state.purchaseEnq = action.payload;
    },
    setSubmitted: (state, action) => {
      state.submitted = action.payload;
    },
  },
});

export const {
  setPage,
  addProductToCart,
  removeProductFromCart,
  setSearch,
  setSort,
  setSold,
  setSortByDate,
  setContactForm,
  setToastContent,
  setIsModalVisible,
  setModalImage,
  setBurgerOpen,

  setFineArt,
  setIllustration,
  setPurchaseEnq,
  setSubmitted,
} = appSlice.actions;

export const selectPage = (state) => state.app.page;
export const selectFineArtCatalogue = (state) => state.app.fineArtCatalogue;
export const selectIllustrationCatalogue = (state) =>
  state.app.illustrationCatalogue;
export const selectCartItemIds = (state) => state.app.cartItemIds;
export const selectSearch = (state) => state.app.search;
export const selectSort = (state) => state.app.sort;
export const selectSold = (state) => state.app.sold;
export const selectSortByDate = (state) => state.app.sortByDate;

export const selectContactForm = (state) => state.app.contactForm;
export const selectToastContent = (state) => state.app.toastContent;
export const selectIsModalVisible = (state) => state.app.isModalVisible;
export const selectModalImage = (state) => state.app.modalImage;

export const selectBurgerOpen = (state) => state.app.burgerOpen;
export const selectPurchaseEnq = (state) => state.app.purchaseEnq;
export const selectSubmitted = (state) => state.app.submitted;

export default appSlice.reducer;
