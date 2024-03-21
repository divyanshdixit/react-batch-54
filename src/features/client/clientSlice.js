import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0
};

const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        increment: function(state, action){
            // instead of returning new state it will direclty manipulate the state using immer
            state.count += action.payload
        },
        decrement: function(state){
            state.count--;
        },
        clientNeedChef: function(state){
            state.count++;
        }
    }
});

// reducer will be default export
export default clientSlice.reducer;

export const {increment, decrement, clientNeedChef} = clientSlice.actions;
 