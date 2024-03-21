import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    loading:false,
    users: [],
    error: ''
};

// second argument contain async logic and create payload and return promise.
// this will dispatch promise lifecycle actions that will useed by extraReducers

export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
}); 

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = '';
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message;
        })
    }
})

export default userSlice.reducer;