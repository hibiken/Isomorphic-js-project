import React from 'react';
import SignUpForm from '../../containers/SignUpForm';

class SignUpView extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <SignUpForm />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpView;
