import React from 'react';
import { reduxForm } from 'redux-form';
import { registerUser } from '../redux/modules/currentUser';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit({ email, password }) {
    this.props.registerUser({ email, password })
  }

  render() {
    const { fields: { email, password }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="your@email.com"
            className="form-control"
            {...email}
          />
        </fieldset>

        <fieldset className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Create Password"
            className="form-control"
            {...password}
          />
        </fieldset>

        <button type="submit" className="btn btn-success btn-block">Sign Up</button>
      </form>
    );
  }
}

const mapDisptchToProps = (dispatch) => ({
  registerUser: ({ email, password }) => {
    dispatch(registerUser({ email, password }))
  }
})

export default reduxForm({
  form: 'SignUp',
  fields: ['email', 'password'],
}, null, mapDisptchToProps)(SignUpForm);
