import React, { Component } from "react";

const validationRules = {
  required: (val) => val !== null && val !== undefined && val !== "",
  email: (email) => {
    const re = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
    return re.test(String(email).toLowerCase());
  },
  phone: (phone) => {
    const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    return re.test(String(phone));
  },
};

class FormValidator extends Component {
  constructor(props) {
    super(props);

    this.formValidationRules = {
      firstName: [
        { rule: validationRules.required, message: "First name is required" },
      ],
      lastName: [
        { rule: validationRules.required, message: "Last name is required" },
      ],
      email: [
        { rule: validationRules.required, message: "Email is required" },
        { rule: validationRules.email, message: "Email is invalid" },
      ],
      phone: [
        { rule: validationRules.phone, message: "Phone number is invalid" },
      ],
    };

    this.fields = ["firstName", "lastName", "phone", "email"];

    this.state = {
      signupForm: { isValid: false },
      firstName: { value: "", isTouched: false, isValid: false, errors: [] },
      lastName: { value: "", isTouched: false, isValid: false, errors: [] },
      email: { value: "", isTouched: false, isValid: false, errors: [] },
      phone: { value: "", isTouched: false, isValid: false, errors: [] },
    };
  }

  render() {
    const { firstName, lastName, email, phone } = this.state;
    return (
      <form>
        <div className='field-group'>
          <label>First Name</label>
          <input
            className={
              firstName.isTouched && !firstName.isValid ? "has error" : ""
            }
            value={firstName.value}
            onChange={this.handleFieldChange}
            onBlur={this.handleSetTouched}
          ></input>
          {firstName.isTouched &&
            firstName.errors.length > 0 &&
            firstName.errors.map((err, i) => {
              return (
                <span key={i} className='error-message'>
                  {err}
                </span>
              );
            })}
        </div>
        <div className='field-group'>
          <label>Last Name</label>
          <input
            className={
              lastName.isTouched && !lastName.isValid ? "has error" : ""
            }
            value={lastName.value}
            onChange={this.handleFieldChange}
            onBlur={this.handleSetTouched}
          ></input>
          {lastName.isTouched &&
            lastName.errors.length > 0 &&
            firstName.errors.map((err, i) => {
              return (
                <span key={i} className='error-message'>
                  {err}
                </span>
              );
            })}
        </div>
        <div className='field-group'>
          <label>Email</label>
          <input
            className={email.isTouched && !email.isValid ? "has error" : ""}
            value={email.value}
            onChange={this.handleFieldChange}
            onBlur={this.handleSetTouched}
          ></input>
          {email.isTouched &&
            email.errors.length > 0 &&
            firstName.errors.map((err, i) => {
              return (
                <span key={i} className='error-message'>
                  {err}
                </span>
              );
            })}
        </div>
        <div className='field-group'>
          <label>Phone</label>
          <input
            className={phone.isTouched && !phone.isValid ? "has error" : ""}
            value={phone.value}
            onChange={this.handleFieldChange}
            onBlur={this.handleSetTouched}
          ></input>
          {phone.isTouched &&
            phone.errors.length > 0 &&
            firstName.errors.map((err, i) => {
              return (
                <span key={i} className='error-message'>
                  {err}
                </span>
              );
            })}
        </div>
      </form>
    );
  }
}

export default FormValidator;
