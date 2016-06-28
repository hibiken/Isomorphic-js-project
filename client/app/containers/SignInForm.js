import React from 'react';
import { reduxForm } from 'redux-form';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit({ email, password }) {
     console.log('email', email);
     console.log('password', password);
  }

  render() {
    const { fields: { email, password }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            {...email}
          />
        </fieldset>

        <fieldset className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            {...password}
          />
        </fieldset>
        <button
          type="submit"
          className="btn btn-primary btn-block"
        >
          Sign In
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'SignIn',
  fields: [ 'email', 'password' ],
})(SignInForm);
