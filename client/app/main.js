import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import App from './containers/App';
import SignInView from './routes/SignIn/SignInView';
import configureStore from './redux/configureStore';

import './styles/base.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="signin" component={SignInView} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
