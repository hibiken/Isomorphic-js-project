import React from 'react';
import { reduxForm } from 'redux-form';
import { signInUser } from '../redux/modules/currentUser';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit({ email, password }) {
    console.log('calling SignInUser');
    this.props.signInUser({ email, password });
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

const mapDisptchToProps = (dispatch) => ({
  signInUser: ({email, password}) => {
    dispatch(signInUser({ email, password }));
  }
})

export default reduxForm({
  form: 'SignIn',
  fields: ['email', 'password'],
}, null, mapDisptchToProps)(SignInForm);
