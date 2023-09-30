import axios from 'axios';
import { server } from '../../server';

export const LoadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) { // Check if token exists
      const currentTime = new Date().getTime();
      const expirationTime = new Date(token.expiration).getTime();
      if (currentTime < expirationTime) {
        const response = await axios.post(`${server}/user/getuser`, token);
        
        if (response && response.data) {
          dispatch({
            type: "LoadUserSuccess",
            payload: response.data,
          });
        } else {
          // Handle the case where response.data is undefined
          console.error("Response data is undefined:", response);
          // You might want to dispatch an error action or handle it in some way
        }
      } else {
        // Remove the expired item from Local Storage
        localStorage.removeItem("token");
      }
    } else {
        dispatch({
            type: "LoadUserError",
            payload: "Token not found",
          });
      // Handle the case where token is not found in localStorage
      
      // You might want to dispatch an error action or handle it in some way
    }
  } catch (error) {
    dispatch({
      type: "LoadUserError",
      payload: error.response ? error.response.data.message : "An error occurred.",
    });
    console.error("Error:", error);
  }
};
