import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import MainLayout from './containers/MainLayout';
import HomeView from './routes/Home/HomeView';
import SignInView from './routes/SignIn/SignInView';
import SignUpView from './routes/SignUp/SignUpView';
import configureStore from './redux/configureStore';

import './styles/base.scss';

const initialState = window.__INITIAL_STATE__;

const store = configureStore(initialState, browserHistory);
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={HomeView} />
        <Route path="signin" component={SignInView} />
        <Route path="signup" component={SignUpView} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
