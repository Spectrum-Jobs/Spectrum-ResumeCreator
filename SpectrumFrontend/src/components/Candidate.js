import React, { Component } from "react";

import { Validators } from "../utilities/Validator";
import InputField from "./InputField/index";
import Button from "./Button/index";
import Header from "./Header";
import "./CandidateProfile.css";

import { Route, Link } from "react-router-dom";

export default class App extends Component {
  state = {
    text: "",
  };

  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  };

  handleClick = (event) => {
    event.preventDefault();
    alert("Button Clicked");
  };

  render() {
    const { text } = this.state;

    return (
      <div className="App">
        <Header />

        <section className="registration">
          <div className="form-1">
            <form action="#" className="resume-upload-form">
              <InputField
                value={text}
                placeholder="username@email.com"
                inputClass=""
                labelClass="upload-resume"
                type="file"
                label="Upload Your Resume: "
                validators={[
                  {
                    check: Validators.required,
                    message: "this field is required",
                  },
                ]}
                onChange={this.handleChange("text")}
              />
              <Button onClick={this.handleClick} value="Upload" />
            </form>
          </div>
          {/* <!-- form-1 ends  --> */}
          <div className="hr-line-or">
            <div className="hr-1"></div>
            <div className="hr-text">OR</div>
            <div className="hr-1"></div>
          </div>
          <Link to="/login" className="link-tag">
            Already have an account? Login
          </Link>
        </section>
      </div>
    );
  }
}
