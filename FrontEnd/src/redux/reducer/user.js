import {createReducer} from '@reduxjs/toolkit';

const iniialState = {
    isAuthenticated:false,
}
export const userReducer = createReducer(iniialState,{
    LoadUserRequest:(state) => {
        state.loading = true;
    },
    LoadUserSuccess:(state,action) => {
        state.isAuthenticated = true;
        state.loading = false;
        state.user = action.payload;
    },
    LoadUserError:(state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    }
})