import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {list: []};

export const fetchTodos = createAsyncThunk(
    'todo/fetchTodos',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json()
        return data
    }
)

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        remove(state, {payload}){
            state.list = state.list.filter(({id}) => id !== payload)
        },
        clear(state){
            state.list = [];
        },
        add(state, {payload}){
            state.list.push({
                id: Date.now(),
                task: payload
            })
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTodos.fulfilled, (state, {payload}) => {
                state.status = 'ready';
                state.list = payload.map(({id, title}) => ({
                    id,
                    task: title
                }))
            })
            .addCase(fetchTodos.rejected, (state) => {
                state.status = 'rejected';
            })
    }
})

export const {remove, clear, add} = todoSlice.actions;
export default todoSlice.reducer;