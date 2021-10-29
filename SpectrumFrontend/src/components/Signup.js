import React, { Component } from "react";

import { Validators } from "../utilities/Validator";
import InputField from "./InputField/index";
import Dropdown from "./Dropdown/index";
import Button from "./Button/index";
import Header from "./Header";
import { Route, Link } from "react-router-dom";

export default class App extends Component {
  state = {
    text: "",
    password: "",
    email: "",
    freshExp: "",
    message: "",
    mnumber: "",
  };

  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  };

  handleDropdown = (freshExp) => {
    this.setState({ freshExp });
  };

  handleClick = (event) => {
    event.preventDefault();
    alert("Button Clicked");
  };

  render() {
    const { text, freshExp, password, mnumber, email } = this.state;

    return (
      <div className="App">
        <Header />

        <section class="login">
          <h1>Register</h1>
          <form action="#" class="login-form" id="loginForm">
            <InputField
              value={mnumber}
              placeholder="example@email.com"
              inputClass="form-input"
              labelClass="details-form-label"
              type="text"
              label="Email Id"
              validators={[
                {
                  check: Validators.required,
                  message: "this field is required",
                },
              ]}
              onChange={this.handleChange("mnumber")}
            />
            <div class="form-info">
              <label htmlFor="fresher" class="details-form-label">
                Fresher/Experienced
              </label>
              <Dropdown
                data={[
                  { value: 1, label: "Fresher" },
                  { value: 2, label: "Experienced" },
                ]}
                styleClass="form-input form-radio"
                value={freshExp}
                placeholder="Select"
                onChange={this.handleDropdown}
              />
            </div>
            <InputField
              value={password}
              placeholder="********"
              inputClass="form-input"
              labelClass="details-form-label"
              type="text"
              label="Password"
              validators={[
                {
                  check: Validators.required,
                  message: "this field is required",
                },
              ]}
              onChange={this.handleChange("password")}
            />
            <Button onClick={this.handleClick} value="Create Account" />
            <Link to="/login" className="link-tag">
              Already have an account? Login
            </Link>
          </form>
        </section>
      </div>
    );
  }
}
