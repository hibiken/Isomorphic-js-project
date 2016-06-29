import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';
import currentUser from './modules/currentUser';
import flashMessage from './modules/flashMessage';

const rootReducer = combineReducers({
  form,
  routing,
  currentUser,
  flashMessage,
});

export default rootReducer;
