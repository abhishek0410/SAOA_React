import React, { Component } from "react";

const Input = props => {
  return (
    <div>
      <div className="form group">
        <label htmlFor="username">Username</label>
        <input
          onChange={props.handleChange}
          value={props.account.username}
          id="username"
          type="text"
          className="form control"
        />
      </div>
      <div className="form group">
        <label htmlFor="password">Password</label>
        <input
          onChange={props.handleChange}
          value={props.account.password}
          id="password"
          type="text"
          className="form control"
        />
      </div>
    </div>
  );
};
export default Input;
