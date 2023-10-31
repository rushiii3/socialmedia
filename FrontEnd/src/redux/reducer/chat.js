import {createReducer} from '@reduxjs/toolkit';
const initialState = {
    selectedUser: null,
  };
  export const chatReducer  = createReducer(initialState,{
    AddSelectedUser:(state,action) => {
        state.selectedUser = action.payload;
    },
    RemoveSelectedUser:(state,action) => {
        state.selectedUser = null;
    }
  })  