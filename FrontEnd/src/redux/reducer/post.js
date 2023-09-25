import {createReducer} from '@reduxjs/toolkit';
const iniialState = {
    isAuthenticated:false,
};
export const postReducer = createReducer(iniialState,{
    LoadPostRequest:(state) => {
        state.loading = true;
    },
    LoadPostSuccess:(state,action) => {
        state.isAuthenticated = true;
        state.loading = false;
        state.user = action.payload;
    },
    LoadPostError:(state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    }
})