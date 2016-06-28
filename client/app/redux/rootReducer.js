import { combineReducers } from 'redux';

const rootReducer =  combineReducers({
  state: (state = {name: 'ken'}, action) => state
});

export default rootReducer;

