import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';
import currentUser from './modules/currentUser';

const rootReducer = combineReducers({
  form,
  routing,
  currentUser,
});

export default rootReducer;

