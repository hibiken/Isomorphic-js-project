import React from 'react';
import SignUpForm from '../../containers/SignUpForm';
import FlashMessage from '../../components/FlashMessage';

class SignUpView extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <FlashMessage />
            <SignUpForm />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpView;
