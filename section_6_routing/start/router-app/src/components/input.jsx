import React, { Component } from "react";

const Input = props => {
  return (
    <div>
      <div className="form group">
        <label htmlFor={props.htmlFor}>{props.input_name}</label>
        <input
          onChange={props.handleChange}
          value={props.account[props.id]}
          id={props.id}
          type="text"
          className="form control"
        />
      </div>
      {props.errors && (
        <div className="alert alert-danger">
          <strong>{props.errors}</strong>
        </div>
      )}
    </div>
  );
};
export default Input;
