import types from './types';
import axios from 'axios';
import { push } from 'react-router-redux';

const ROOT_URL = 'http://localhost:3090';

export const signInUser = ({ email, password }) => (dispatch) => {
  axios.post(`${ROOT_URL}/signin`, { email, password })
    .then(({ data }) => {
      dispatch({ type: types.SIGN_IN_SUCCESS, authToken: data.token });
      dispatch(push('/'));
    })
    .catch((error) => {
      console.log('signin error!', error);
    })
};

export const signOutUser = () => ({
  type: types.SIGN_OUT_USER,
});

export const registerUser = ({ email, password }) => (dispatch) => {
  axios.post(`${ROOT_URL}/signup`, { email, password })
    .then(({data}) => {
      dispatch({ type: types.SIGN_UP_SUCCESS, authToken: data.token });
      dispatch(push('/'));
    })
    .catch((err) => {
      console.error('signup error!', error);
    })
}

const initialState = {
  isSignedIn: false,
  authToken: null,
};

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN_SUCCESS:
    case types.SIGN_UP_SUCCESS:
      return {
        ...state,
        isSignedIn: true,
        authToken: action.authToken,
      };
    case types.SIGN_OUT_USER:
      return initialState;
    default:
      return state;
  }
}

export default currentUser;
