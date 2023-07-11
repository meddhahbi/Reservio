import { createSlice } from "@reduxjs/toolkit";



export const SavedSlice = createSlice({
    name:"reservio",
    initialState:{
        reservio:[],
    },

    reducers:{
        SavedPlaces:(state,action)=>{
            state.reservio.push({
                ...action.payload
            })
        }
    }
});


export const {SavedPlaces} = SavedSlice.actions
export default SavedSlice.reducer