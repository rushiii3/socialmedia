import {configureStore} from '@reduxjs/toolkit';
import { userReducer } from './reducer/user';
import {postReducer} from './reducer/post'
import { chatReducer } from './reducer/chat';
const Store = configureStore({
    reducer:{
        user:userReducer,
        post:postReducer,
        chat:chatReducer,
    },
});

export default Store;