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
  handleChange = e => {
    console.log("We are in the handleChange");
    const account = { ...this.state.account };
    account[e.currentTarget.id] = e.currentTarget.value;

    this.setState({ account });
  };

  validate = () => {
    const results = Joi.validate(this.state.account, this.schema, {
      abortEarly: false
    });

    if (results.error === null) return "";

    const errors = {};
    for (let item of results.error.details) {
      errors[item.path[0]] = item.message;
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
            htmlFor="username"
            input_name="username"
            id="username"
            errors={this.state.errors.username}
          />
          <Input
            handleChange={this.handleChange}
            account={this.state.account}
            htmlFor="password"
            input_name="password"
            id="password"
            errors={this.state.errors.password}
          />
          <button  className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
