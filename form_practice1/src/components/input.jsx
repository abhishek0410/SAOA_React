import React, { Component } from "react";

const Input = props => {
  // console.log("we are in INput ", props);
  const { username, password } = props.state.account;
  const { errors } = props.state;
  return (
    <div>
      <div className="form-group">
        <label>{props.id}</label>
        <input
          id={props.id}
          className="form-control"
          onChange={props.handleChange}
        />
      </div>

      {errors[props.id] && (
        <div classNameName="alert alert-danger">
          <strong>{errors[props.id]}</strong>
        </div>
      )}
    </div>
  );
};
export default Input;
