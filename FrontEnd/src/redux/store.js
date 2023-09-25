import {configureStore} from '@reduxjs/toolkit';
import { userReducer } from './reducer/user';
import {postReducer} from './reducer/post'
const Store = configureStore({
    reducer:{
        user:userReducer,
        post:postReducer,
    },
});

export default Store;