import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const response = await fetch('https://reqres.in/api/users');
        const data = await response.json()
        return data
    }
)


export const usersSlice = createSlice({
    name: 'users',
    initialState: {list:[]},
    reducers: {
        remove(state, {payload}){
            state.list = state.list.filter(({id}) => id !== payload)
        },
        incr(state, {payload}){
            state.list.find(({id}) => id === payload).age++;
        },
        add(state, {payload}){
            state.list.push({id: Date.now(), ...payload})
        }
    },
    
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, {payload}) => {
                state.status = 'ready';
                state.list = payload.data.map(({id, first_name, last_name}) => ({
                    id,
                    name: first_name,
                    lastname: last_name,
                    age: 45
                }))
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.status = 'rejected';
            })
    }
})

export const {remove, incr, add} = usersSlice.actions;
export default usersSlice.reducer;