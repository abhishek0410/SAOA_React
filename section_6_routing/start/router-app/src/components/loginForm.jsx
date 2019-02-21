import React, { Component } from "react";
import Input from "./input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" }
  };
  handleChange = e => {
    console.log("We are in the handleChange");
    const account = { ...this.state.account };
    account[e.currentTarget.id] = e.currentTarget.value;

    this.setState({ account });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted");
  };
  handleLogin() {
    console.log("Login button clicked");
  }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} />
        <Input handleChange={this.handleChange} account={this.state.account} />
        <button onClick={this.handleLogin} className="btn btn-primary">
          Login
        </button>
      </div>
    );
  }
}

export default LoginForm;
