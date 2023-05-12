import axios from 'axios';
import { SET_USER_INFO } from './actionsTypes';

export const setUserInfo = (payload) => ({ type: SET_USER_INFO, payload });

export function loginUser({ login, password }) {
  return (dispatch) => {
    try {
      axios
        .post('http://localhost:4000/api/auth/login', { login, password })
        .then((response) => {
          if (response.status === 200) {
            dispatch(setUserInfo(response.data));
          }
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };
}
