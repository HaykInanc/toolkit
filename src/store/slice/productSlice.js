import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {list: []};

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async () => {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json()
        return data
    }
)

export const productSlice = createSlice({
    name: 'product',
    initialState,

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, {payload}) => {
                state.status = 'ready';
                state.list = payload.products.map(({id, title}) => ({id, title}))
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = 'rejected';
            })
    }
})

export const {remove, clear, add} = productSlice.actions;
export default productSlice.reducer;