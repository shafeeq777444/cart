import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const thunkFetch = createAsyncThunk("api/thunkFetch", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get("http://localhost:2000/products");
        // console.log(response.data);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const thunkCartPost = createAsyncThunk("api/thunkCartPost", async (data) => {
    const response = await axios.post("http://localhost:2000/cart", data);
    return response.data;
});

export const thunkCartFetch = createAsyncThunk("api/thunkCartFetch", async () => {
    const response = await axios.get("http://localhost:2000/cart");
    return response.data;
});

export const thunkCartDelete=createAsyncThunk("api/thunkCartDelete",async(id)=>{
    const response=await axios.delete(`http://localhost:2000/cart/${id}`)
    return response.data
})