import React, { Component } from "react";

import { Validators } from "../utilities/Validator";
import InputField from "./InputField/index";
import Button from "./Button/index";
import TextArea from "./TextArea/index";
import Header from "./Header";
import { Route, Link } from "react-router-dom";
import "./CandidateProfile.css";

export default class App extends Component {
  state = {
    file: "",
    fname: "",
    lname: "",
    city: "",
    streetadd: "",
    email: "",
    mnumber: "",
    degree: "",
    degreefield: "",
    college: "",
    collegecity: "",
    collegeperiodfrom: "",
    collegeperiodto: "",
    company: "",
    designation: "",
    durationfrom: "",
    durationto: "",
    jobrole: "",
    skills: "",
    rightdegree: "",
    rightdegreeyear: "",
    rightyrsexp: "",
    rightcurrentctc: "",
    rightexpectedctc: "",
    rightgender: "",
    rightmarital: "",
    rightage: "",
    rightcurrentcity: "",
    rightcompany: "",
    rightdesignation: "",
    rightdurationfrom: "",
    rightdurationto: "",
    rightjobrole: "",
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
      file,
      fname,
      lname,
      city,
      streetadd,
      email,
      mnumber,
      degree,
      degreefield,
      college,
      collegecity,
      collegeperiodfrom,
      collegeperiodto,
      company,
      designation,
      durationfrom,
      durationto,
      jobrole,
      skills,
      rightdegree,
      rightdegreeyear,
      rightyrsexp,
      rightcurrentctc,
      rightexpectedctc,
      rightgender,
      rightmarital,
      rightage,
      rightcurrentcity,
      rightcompany,
      rightdesignation,
      rightdurationfrom,
      rightdurationto,
      rightjobrole,
    } = this.state;

    return (
      <div className="App">
        <Header />

        <section className="candidate-profile">
          <div className="candidate-top">
            <div className="candidate-top-left">
              <h2 className="spectrum">SPECTRUM</h2>
            </div>
            <div className="candidate-top-right">
              <p className="candidate-welcome">Welcome Jon Doe</p>
            </div>
          </div>
          {/* candidate top ends  */}
          <div className="candidate-main">
            <div className="candidate-main-left">
              <div className="form-1">
                <form action="#" className="resume-upload-form">
                  <InputField
                    value={file}
                    placeholder=""
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
              {/* form-1 ends  */}
              <div className="candidate-main-left-detail">
                <div className="details-section personal-detail-section">
                  <h3 className="candidate-detail-heading">Personal Details</h3>
                  <div className="candidate-detail-fields">
                    <InputField
                      value={fname}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-label"
                      type="text"
                      label="First Name"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("fname")}
                    />
                    <InputField
                      value={lname}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-label"
                      type="text"
                      label="Last Name"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("lname")}
                    />
                  </div>
                  {/* candidate detail fields end */}
                  <div className="candidate-detail-fields">
                    <InputField
                      value={email}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-label"
                      type="email"
                      label="Email ID"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("email")}
                    />
                    <InputField
                      value={mnumber}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-label"
                      type="text"
                      label="Mobile No."
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("mnumber")}
                    />
                  </div>
                  {/* candidate detail fields end */}
                  <div className="candidate-detail-fields">
                    <InputField
                      value={streetadd}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-label"
                      type="text"
                      label="Street Address"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("streetadd")}
                    />
                    <InputField
                      value={city}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-label"
                      type="text"
                      label="City"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("city")}
                    />
                  </div>
                  {/* candidate detail fields end */}
                </div>
                {/* personal detail section ends  */}
                <div className="details-section education-detail-section">
                  <h3 className="candidate-detail-heading">Education</h3>
                  <div className="candidate-detail-fields">
                    <InputField
                      value={degree}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-label"
                      type="text"
                      label="Degree"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("degree")}
                    />
                    <InputField
                      value={degreefield}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-label"
                      type="text"
                      label="Degree Field"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("degreefield")}
                    />
                  </div>
                  {/* candidate detail fields end */}
                  <div className="candidate-detail-fields">
                    <InputField
                      value={college}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-label"
                      type="text"
                      label="College/University"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("college")}
                    />
                    <InputField
                      value={collegecity}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-label"
                      type="text"
                      label="City"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("collegecity")}
                    />
                  </div>
                  {/* candidate detail fields end */}
                  <div className="candidate-detail-fields-period">
                    <span className="period-field">Period</span>

                    <InputField
                      value={collegeperiodfrom}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-period-label"
                      type="text"
                      label="From"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("collegeperiodfrom")}
                    />
                    <InputField
                      value={collegeperiodto}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-period-label"
                      type="text"
                      label="To"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("collegeperiodto")}
                    />
                  </div>
                  {/* candidate detail fields end */}
                </div>
                {/* education detail section ends  */}
                <div className="details-section work-exp-detail-section">
                  <h3 className="candidate-detail-heading">Work Experience</h3>
                  <div className="candidate-detail-fields">
                    <InputField
                      value={company}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-label"
                      type="text"
                      label="Company Name"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("company")}
                    />
                    <InputField
                      value={designation}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-label"
                      type="text"
                      label="Designation"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("designation")}
                    />
                  </div>
                  {/* candidate detail fields end */}
                  <div className="candidate-detail-fields-period">
                    <span className="period-field">Duration</span>

                    <InputField
                      value={durationfrom}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-period-label"
                      type="text"
                      label="From"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("durationfrom")}
                    />
                    <InputField
                      value={durationto}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-period-label"
                      type="text"
                      label="To"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("durationto")}
                    />
                  </div>
                  {/* candidate detail fields end */}
                  <div className="candidate-detail-fields">
                    <TextArea
                      value={jobrole}
                      placeholder=""
                      inputClass="candidate-detail-textarea"
                      labelClass="candidate-detail-textarea-label"
                      type="text"
                      label="Job Role"
                      rows="10"
                      cols="55"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("jobrole")}
                    />
                  </div>
                  {/* candidate detail fields end */}
                  <div className="candidate-detail-fields">
                    <InputField
                      value={skills}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-label"
                      type="text"
                      label="Skills"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("skills")}
                    />
                  </div>
                  {/* candidate detail fields end */}
                </div>
                {/* work experience detail section ends  */}
              </div>
              {/* candidate main left detail ends  */}
            </div>
            {/* candidate main left end */}
            <div className="candidate-main-right">
              <form className="candidate-detail-right-form">
                <div className="details-section right-detail-section">
                  <div className="candidate-detail-right">
                    <InputField
                      value={rightdegree}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-label"
                      type="text"
                      label="Degree"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("rightdegree")}
                    />
                    <InputField
                      value={rightdegreeyear}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-label"
                      type="text"
                      label="Degree Year"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("rightdegreeyear")}
                    />
                  </div>
                  {/* candidate detail right end */}
                  <div className="candidate-detail-right">
                    <InputField
                      value={rightyrsexp}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-label"
                      type="text"
                      label="Total Yrs Exp"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("rightyrsexp")}
                    />
                    <InputField
                      value={rightcurrentctc}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-label"
                      type="text"
                      label="Current CTC"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("rightcurrentctc")}
                    />
                  </div>
                  {/* candidate detail right end */}
                  <div className="candidate-detail-right">
                    <InputField
                      value={rightexpectedctc}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-label"
                      type="text"
                      label="Expected CTC"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("rightexpectedctc")}
                    />
                    <InputField
                      value={rightgender}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-label"
                      type="text"
                      label="Gender"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("rightgender")}
                    />
                  </div>
                  {/* candidate detail right end */}
                  <div className="candidate-detail-right">
                    <InputField
                      value={rightmarital}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-label"
                      type="text"
                      label="Marital Status"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("rightmarital")}
                    />
                    <InputField
                      value={rightage}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-label"
                      type="text"
                      label="Age"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("rightage")}
                    />
                  </div>
                  <div className="candidate-detail-right">
                    <InputField
                      value={rightcurrentcity}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-label"
                      type="text"
                      label="Current City"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("rightcurrentcity")}
                    />
                  </div>
                  {/* candidate detail right end */}
                </div>
                {/* right detail section ends  */}
                <div className="details-section right-work-exp-detail-section">
                  <h3 className="candidate-detail-heading">Work Experience</h3>
                  <div className="candidate-detail-right">
                    <InputField
                      value={rightcompany}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-label"
                      type="text"
                      label="Company Name"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("rightcompany")}
                    />
                    <InputField
                      value={rightdesignation}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-label"
                      type="text"
                      label="Designation"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("rightdesignation")}
                    />
                  </div>
                  {/* candidate detail right end */}
                  <div className="candidate-detail-fields-period">
                    <span className="period-field">Duration</span>

                    <InputField
                      value={rightdurationfrom}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-period-label"
                      type="text"
                      label="From"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("rightdurationfrom")}
                    />
                    <InputField
                      value={rightdurationto}
                      placeholder=""
                      inputClass="candidate-detail-input"
                      labelClass="candidate-detail-form-period-label"
                      type="text"
                      label="To"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("rightdurationto")}
                    />
                  </div>
                  {/* candidate detail right fields end */}
                  <div className="candidate-detail-fields">
                    <TextArea
                      value={rightjobrole}
                      placeholder=""
                      inputClass="candidate-detail-textarea"
                      labelClass="candidate-detail-textarea-label"
                      type="text"
                      label="Job Role"
                      rows="10"
                      cols="65"
                      validators={[
                        {
                          check: Validators.required,
                          message: "this field is required",
                        },
                      ]}
                      onChange={this.handleChange("rightjobrole")}
                    />
                  </div>
                  {/* candidate detail fields end */}
                </div>
                {/* right-work-exp-detail-section  */}
                <Button onClick={this.handleClick} value="Save" />
              </form>
            </div>
            {/* candidate-main-right ends  */}
          </div>
          {/* candidate-main ends  */}
        </section>
      </div>
    );
  }
}
