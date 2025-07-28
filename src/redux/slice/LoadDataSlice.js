import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("fetch",async()=>{
    let res = await fetch("https://fakestoreapi.in/api/products")
    return await res.json()
})

const loadData = createSlice({
    name :"fetchdata",
    initialState:{
        isLoading:false,
        data:null,
        isErr:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state,action)=>{
            state.isLoading=true
        })
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.data = action.payload
        })
        builder.addCase(fetchData.rejected,(state,action)=>{
            state.isLoading=true,
            console.log(action.error)
        })
    }
})

export default loadData.reducer;