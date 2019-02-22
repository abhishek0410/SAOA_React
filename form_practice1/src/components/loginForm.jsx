import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {}
  };
  schema = {
    username: Joi.string().required(),
    password: Joi.string().required()
  };

  validate() {
    const results = Joi.validate(this.state.account, this.schema, {
      abortEarly: false
    });
    if (results.error === null) return "";
    const errors = {};
    for (let item of results.error.details) {
      errors[item.path[0]] = item.message;
    }
    //console.log("In the validate() , and the errors are ", errors);
    return errors;
  }

  handleChange = event => {
    // console.log("The event is called automatically ", event);
    // console.log("Value enterede is ", some_val);
    const account_update = { ...this.state.account };

    account_update[event.currentTarget.id] = event.currentTarget.value;
    this.setState({ account: account_update });
  };

  handleSubmit = event => {
    event.preventDefault();
    const errors_updated = this.validate();

    console.log("Login button clicked ");
    this.setState({ errors: errors_updated });
  };

  handleLogin() {
    console.log(
      "I am in the handlLogin and this also prints the login button clicked messege."
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            id="username"
            state={this.state}
            handleChange={this.handleChange}
          />
          <Input
            id="password"
            state={this.state}
            handleChange={this.handleChange}
          />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}
export default LoginForm;
