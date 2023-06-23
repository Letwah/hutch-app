import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: "FINE_ART",
  fineArt: [
    {
      id: 1,
      title: "pic name 1",
      desc: "bbsbss",
      images: ["image1.jpg", "image2.jpg", "image3.jpg"],
      avail: false,
      price: 2000, //in pennies
      createdTimeStamp: "2020-05-13 11:00:00",
      medium: "oil",
      size: "20 x 20",
    },
    {
      id: 2,
      title: "pic name 2",
      desc: "csuiuheh",
      images: ["image4.jpg", "image5.jpg", "image6.jpg"],
      avail: true,
      price: 2200, //in pennies
      createdTimeStamp: "2020-05-13 11:00:00",
      medium: "water- color",
      size: "40 x 20",
    },
    {
      id: 3,
      title: " pic name 3",
      desc: "bbsbss",
      images: ["image7.jpg", "image8.jpg", "image9.jpg"],
      avail: false,
      price: 3000, //in pennies
      createdTimeStamp: "2020-05-13 11:00:00",
      medium: "oil",
      size: "60 x 20",
    },
  ],
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
