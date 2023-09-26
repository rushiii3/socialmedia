import axios from 'axios';
import {server} from '../../server'
export const LoadUser = () => async(dispatch) => {
    try {
        dispatch({
            type:"LoadUserRequest",
        });
        const {data} = await axios.get(`${server}/user/getuser`,{withCredentials:true});
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