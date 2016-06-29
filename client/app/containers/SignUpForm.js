import React from 'react';
import { reduxForm } from 'redux-form';

class SignUpForm extends React.Component {
  render() {
    return (
      <form>
        <fieldset className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="your@email.com" className="form-control"/>
        </fieldset>

        <fieldset className="form-group">
          <label>Password:</label>
          <input type="password" placeholder="Create Password" className="form-control" />
        </fieldset>

        <button type="submit" className="btn btn-success btn-block">Sign Up</button>
      </form>
    );
  }
}

export default SignUpForm;
