import React, { Component } from "react";

import { Validators } from "../utilities/Validator";
import InputField from "./InputField/index";
import Button from "./Button/index";
import TextArea from "./TextArea/index";
import Header from "./Header";
import "./Employer.css";

export default class App extends Component {
  state = {
    jobtitle: "",
    jobdesc: "",
    ctcmin: "",
    ctcmax: "",
    joblocation: "",
    recruitername: "",
    mnumber: "",
    disabled: false,
    textareadisabled: false,
  };

  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  };

  handleClick = (event) => {
    event.preventDefault();
    alert("Button Clicked");
  };

  render() {
    const {
      jobtitle,
      jobdesc,
      ctcmin,
      ctcmax,
      joblocation,
      recruitername,
      mnumber,
    } = this.state;

    return (
      <div className="App">
        <Header />

        <section className="employer-profile candidate-profile">
          <div className="employer-top candidate-top">
            <div className="employer-top-left candidate-top-left">
              <h2 className="spectrum">SPECTRUM</h2>
            </div>
            <div className="employer-top-right candidate-top-right">
              <p className="candidate-welcome">Welcome Jon Doe</p>
            </div>
          </div>
          {/* employer top ends  */}
          <div className="employer-main-section">
            <div className="employer-top-heading">
              <h4 className="employer-heading">
                lets start to create new job role
              </h4>
            </div>
            <div className="form-wrapper">
              <form className="employer-form" action="#">
                <div className="employer-detail-field">
                  <InputField
                    value={jobtitle}
                    placeholder="e.g, Salse Manager"
                    inputClass="employer-input"
                    labelClass="employer-details-form-label"
                    type="text"
                    label="Job Title"
                    validators={[
                      {
                        check: Validators.required,
                        message: "this field is required",
                      },
                    ]}
                    onChange={this.handleChange("jobtitle")}
                  />
                </div>
                {/* employer detail field end */}
                <div className="employer-detail-field">
                  <TextArea
                    value={jobdesc}
                    placeholder="Describe about job in 4 lines"
                    inputClass="employer-detail-textarea"
                    labelClass="employer-detail-textarea-label"
                    type="text"
                    label="Job Description"
                    rows="4"
                    cols="35"
                    validators={[
                      {
                        check: Validators.required,
                        message: "this field is required",
                      },
                    ]}
                    onChange={this.handleChange("jobdesc")}
                  />
                </div>
                {/* employer detail fields end */}
                <div className="employer-detail-fields-period">
                  <span className="ctc-field">Offered CTC</span>

                  <InputField
                    value={ctcmin}
                    placeholder="Min"
                    inputClass="employer-detail-input"
                    labelClass="employer-detail-form-period-label"
                    type="text"
                    label=""
                    validators={[
                      {
                        check: Validators.required,
                        message: "this field is required",
                      },
                    ]}
                    onChange={this.handleChange("ctcmin")}
                  />
                  <InputField
                    value={ctcmax}
                    placeholder="Max"
                    inputClass="employer-detail-input"
                    labelClass="employer-detail-form-period-label"
                    type="text"
                    label=""
                    validators={[
                      {
                        check: Validators.required,
                        message: "this field is required",
                      },
                    ]}
                    onChange={this.handleChange("ctcmax")}
                  />
                </div>
                {/* employer detail fields end */}
                <div className="employer-detail-field">
                  <InputField
                    value={joblocation}
                    placeholder="e.g, Pune"
                    inputClass="employer-input"
                    labelClass="employer-details-form-label"
                    type="text"
                    label="Job Location"
                    validators={[
                      {
                        check: Validators.required,
                        message: "this field is required",
                      },
                    ]}
                    onChange={this.handleChange("joblocation")}
                  />
                </div>
                {/* employer detail field end */}
                <div className="employer-detail-field">
                  <InputField
                    value={recruitername}
                    placeholder="Jon Doe"
                    inputClass="employer-input"
                    labelClass="employer-details-form-label"
                    type="text"
                    label="Recruiter Name"
                    validators={[
                      {
                        check: Validators.required,
                        message: "this field is required",
                      },
                    ]}
                    onChange={this.handleChange("recruitername")}
                  />
                </div>
                {/* employer detail field end */}
                <div className="employer-detail-field">
                  <InputField
                    value={mnumber}
                    placeholder="989XXXXXXX"
                    inputClass="employer-input"
                    labelClass="employer-details-form-label"
                    type="text"
                    label="Number"
                    validators={[
                      {
                        check: Validators.required,
                        message: "this field is required",
                      },
                    ]}
                    onChange={this.handleChange("mnumber")}
                  />
                </div>
                {/* employer detail field end */}

                <Button onClick={this.handleClick} value="Send" />
              </form>
            </div>
            {/* form wrapper ends  */}
          </div>
          {/* employer main section ends  */}
        </section>
      </div>
    );
  }
}
