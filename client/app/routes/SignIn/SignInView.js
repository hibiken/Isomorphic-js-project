import React from 'react';

import SignInForm from '../../containers/SignInForm';
import FlashMessage from '../../components/FlashMessage';

class SignInView extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <FlashMessage />
            <SignInForm />
          </div>
        </div>
      </div>
    );
  }
}

export default SignInView;
