import {
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT_USER,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
} from './types';
import axios from 'axios';
import { push } from 'react-router-redux';

const ROOT_URL = 'http://localhost:3090';

export const signInUser = ({ email, password }) => (dispatch) => {
  axios.post(`${ROOT_URL}/signin`, { email, password })
    .then(({ data }) => {
      dispatch({ type: SIGN_IN_SUCCESS, authToken: data.token });
      dispatch(push('/'));
    })
    .catch((error) => {
      dispatch({ type: SIGN_IN_ERROR, message: 'Invalid email and password', flashType: 'error' });
    });
};

export const signOutUser = () => ({
  type: SIGN_OUT_USER,
});

export const registerUser = ({ email, password }) => (dispatch) => {
  axios.post(`${ROOT_URL}/signup`, { email, password })
    .then(({data}) => {
      dispatch({ type: SIGN_UP_SUCCESS, authToken: data.token });
      dispatch(push('/'));
    })
    .catch(({data}) => {
      console.log('signup error!', data.error);
      dispatch({ type: SIGN_UP_ERROR, message: data.error, flashType: 'error' });
    });
}

const initialState = {
  isSignedIn: false,
  authToken: null,
};

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isSignedIn: true,
        authToken: action.authToken,
      };
    case SIGN_OUT_USER:
      return initialState;
    default:
      return state;
  }
}

export default currentUser;
