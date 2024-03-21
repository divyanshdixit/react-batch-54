import { clientNeedChef } from '../client/clientSlice';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
    client: 0
}

const chefSlice = createSlice({
    name: 'chef',
    initialState,
    reducers: {
        increment: function(state, action){
            state.count += action.payload; // here slice can directly manipulate the state object using immer library behind scenes
        },
        decrement: function(state, action){
            state.count -= action.payload
        }
    },
    // this one is old method:

    // extraReducers: {
    //     ['client/clientNeedChef']: function(state){
    //         state.client++;
    //     }
    // }

    extraReducers: (builder) => {
        builder.addCase(clientNeedChef, (state) => {
            state.client++;
        })
    }
});

// export reducer as default 
// export actions as named export

export default chefSlice.reducer;
export const {increment, decrement} = chefSlice.actions;
