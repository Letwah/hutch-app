import { createSlice } from "@reduxjs/toolkit";

import { CART, INTRO } from "../store/types";

import getIllustrationCatalogue from "../store/illustrationCatalogue";
// import dragImage from "../store/dragImage";
import { save, get } from "../persistance";

const cartItemIdsFromDisc = get("cartItemIdsFromDisc");

const getInitialState = async () => {
  const initialState = {
    page: INTRO,
    fineArtCatalogue: [], //empty array to stop comp crashing before data arrived.
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
  return initialState;
};

const appSlice = createSlice({
  name: "app",
  initialState: await getInitialState(),
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

    setFineArt: (state, action) => {
      state.fineArtCatalogue = action.payload;
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
  setFineArt,
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
