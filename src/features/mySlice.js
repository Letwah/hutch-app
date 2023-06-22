import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 9,
    name : 'a name'
}

const mySlice = createSlice({
    name : 'mySlice',
    initialState,
    reducers : {
        addName : (state, action)=>{
            state.name = action.payload;
        }
    }
});

export const {addName} = mySlice.actions;
export const nameSelector = state => state.mySlice.name;

export default mySlice.reducer;