import { LOCATION_CHANGE } from 'react-router-redux';
import {
  SIGN_IN_ERROR,
  SIGN_UP_ERROR,
} from '../currentUser/types';

const initialState = {
  message: '',
  flashType: null,
};

const flashMessage = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_ERROR:
    case SIGN_UP_ERROR:
      return {
        message: action.message,
        flashType: action.flashType,
      };
    case LOCATION_CHANGE:
      return initialState;
    default:
      return state;
  }
}

export default flashMessage;
