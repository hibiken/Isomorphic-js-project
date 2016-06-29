import React from 'react';

import SignInForm from '../../containers/SignInForm';

class SignInView extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <SignInForm />
          </div>
        </div>
      </div>
    );
  }
}

export default SignInView;
