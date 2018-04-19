import React, { Component } from 'react';

import FormField from './FormField';
import EmailField from './EmailField';
import PasswordField from './PasswordField';

class JoinForm extends Component {

  // initialize state to hold validity of form fields
  state = { fullname: false, email: false, password: false }

  // higher-order function that returns a state change watch function
  // sets the corresponding state property to true if the form field has no errors
  fieldStateChanged = field => state => this.setState({ [field]: state.errors.length === 0 });

  // state change watch functions for each field
  emailChanged = this.fieldStateChanged('email');
  fullnameChanged = this.fieldStateChanged('fullname');
  passwordChanged = this.fieldStateChanged('password');

  render() {
    const { fullname, email, password } = this.state;
    const formValidated = fullname && email && password;

    // validation function for the fullname
    // ensures that fullname contains at least two names separated with a space
    const validateFullname = value => {
      const regex = /^[a-z]{2,}(\s[a-z]{2,})+$/i;
      if (!regex.test(value)) throw new Error('Fullname is invalid');
    };

    return (
      <div className="form-container d-table-cell position-relative align-middle">
        <form action="/" method="POST" noValidate>

          <div className="d-flex flex-row justify-content-between align-items-center px-3 mb-5">
            <legend className="form-label mb-0">Support Team</legend>
            {/** Show the form button only if all fields are valid **/}
            { formValidated && <button type="button" className="btn btn-primary text-uppercase px-3 py-2">Join</button> }
          </div>

          <div className="py-5 border-gray border-top border-bottom">
            {/** Render the fullname form field passing the name validation fn **/}
            <FormField type="text" fieldId="fullname" label="Fullname" placeholder="Enter Fullname" validator={validateFullname} onStateChanged={this.fullnameChanged} required />

            {/** Render the email field component **/}
            <EmailField fieldId="email" label="Email" placeholder="Enter Email Address" onStateChanged={this.emailChanged} required />

            {/** Render the password field component using thresholdLength of 7 and minStrength of 3 **/}
            <PasswordField fieldId="password" label="Password" placeholder="Enter Password" onStateChanged={this.passwordChanged} thresholdLength={7} minStrength={3} required />
          </div>

        </form>
      </div>
    );
  }

}

export default JoinForm;
