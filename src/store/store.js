import { configureStore } from "@reduxjs/toolkit";
import mySlice from './features/mySlice'

export const store = configureStore({
    reducer : {
        mySlice : mySlice
    }
})