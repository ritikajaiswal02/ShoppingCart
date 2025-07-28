import { createSlice } from "@reduxjs/toolkit";

const addItem = createSlice({
    name: "add",
    initialState: [],
    reducers: {
        additem: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index].quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removeitem: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                if (state[index].quantity > 1) {
                    state[index].quantity -= 1;
                } else {
                    state.splice(index, 1); // Remove item if quantity is 1
                }
            }
        }

    }
})

export const { additem, removeitem } = addItem.actions
export default addItem.reducer;