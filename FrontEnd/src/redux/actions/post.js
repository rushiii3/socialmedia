import axios from 'axios';
import {server} from '../../server';

export const LoadPost = () => async(dispatch) => {
    try {
        dispatch({
            type:"LoadPostRequest",
        });
        const {data} = await axios.get(`${server}/post/get-post`);
        dispatch({
            type:"LoadPostSuccess",
            payload:data,
        })
    } catch (error) {
        dispatch({
            type:"LoadPostError",
            payload:error.response.data.message,
        })
    }
}