import { createSlice } from "@reduxjs/toolkit";
import { thunkCartDelete, thunkCartFetch, thunkCartPost, thunkFetch } from "./thunk";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        product: [],
        cart: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(thunkFetch.fulfilled, (prestate, action) => {
                prestate.product = action.payload;
                // console.log(action.payload, "check");
            })
            .addCase(thunkCartPost.fulfilled, (preState, action) => {
                preState.cart.push(action.payload);
            })
            .addCase(thunkCartFetch.fulfilled, (preState, action) => {
                preState.cart = action.payload
            })
            .addCase(thunkCartDelete.fulfilled,(prestate,action)=>{
                console.log(action.payload);
            })
    },
});

export default cartSlice.reducer;
