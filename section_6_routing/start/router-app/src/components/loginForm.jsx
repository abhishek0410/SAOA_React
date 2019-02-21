import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  handleChange = e => {
    console.log("We are in the handleChange");
    const account = { ...this.state.account };
    account[e.currentTarget.id] = e.currentTarget.value;

    this.setState({ account });
  };

  validate = () => {
    const errors = {};

    if (this.state.account.username.trim() === "") {
      errors.username = "Username is required";
    }
    if (this.state.account.password.trim() === "") {
      errors.password = "Password is required";
    }
    return errors;
  };
  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
    console.log("Form submitted");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            handleChange={this.handleChange}
            account={this.state.account}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
