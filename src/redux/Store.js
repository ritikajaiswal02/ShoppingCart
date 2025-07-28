import { configureStore } from "@reduxjs/toolkit";
import loadData from "../redux/slice/LoadDataSlice"
import addItem from "../redux/slice/AdditemSlice"

export const store = configureStore({
    reducer: {
        load:loadData,
        add:addItem,
    },
});