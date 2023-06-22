import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name : 'home'
}

const homeSlice = createSlice({
    name : 'home',
    initialState,
    reducers : {
        setHome : (state, action)=>{
            state.home = action.payload;
            },

        setContact : (state, action)=>{
        state.contact = action.payload;
        },
    }
});

export const {setContact, setHome} = homeSlice.actions;

export const selectContact = (state) => state.home.contact;
export const selectHome = (state)=> state.home.home;

export default homeSlice.reducer;