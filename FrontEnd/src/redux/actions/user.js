import axios from 'axios';
import {server} from '../../server'
export const LoadUser = () => async(dispatch) => {
    try {
        dispatch({
            type:"LoadUserRequest",
        });
        const token = {
            "token" :localStorage.getItem('token')
        };
        const {data} = await axios.post(`${server}/user/getuser`,token);
        dispatch({
            type:"LoadUserSuccess",
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: "LoadUserError",
            payload: error.response.data.message,
          });
    }
}