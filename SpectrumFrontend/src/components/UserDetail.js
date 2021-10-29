import React, { Component } from "react";

import { Validators } from "../utilities/Validator";
import InputField from "./InputField/index";
import Dropdown from "./Dropdown/index";
import Button from "./Button/index";
import TextArea from "./TextArea/index";
import Checkbox from "./Checkbox/index";
import Header from "./Header";
import { Route, Link } from "react-router-dom";

export default class App extends Component {
  state = {
    text: "",
    fullname: "",
    address: "",
    city: "",
    mnumber: "",
    email: "",
    degree: "",
    fieldstudy: "",
    college: "",
    collegecity: "",
    collegefrom: "",
    collegeto: "",
    jobtitle: "",
    company: "",
    companycity: "",
    companyfrom: "",
    companyto: "",
    companydesc: "",
    newskill: "",
    message: "",
    acceptance: false,
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

  handleCheckbox = (acceptance) => {
    this.setState({ acceptance });
  };

  render() {
    const {
      text,
      fullname,
      address,
      city,
      mnumber,
      email,
      degree,
      fieldstudy,
      college,
      collegecity,
      collegefrom,
      collegeto,
      jobtitle,
      company,
      companycity,
      companyfrom,
      companyto,
      companydesc,
      newskill,
      message,
      acceptance,
    } = this.state;

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
                label="Upload Resume"
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
          <div className="form-2">
            <form action="#" className="details-form">
              <InputField
                value={fullname}
                placeholder="Enter your full name"
                inputClass="form-input"
                labelClass="details-form-label"
                type="text"
                label="Name"
                validators={[
                  {
                    check: Validators.required,
                    message: "this field is required",
                  },
                ]}
                onChange={this.handleChange("fullname")}
              />
              <InputField
                value={address}
                placeholder="Enter your street Address"
                inputClass="form-input"
                labelClass="details-form-label"
                type="text"
                label="Street Address"
                validators={[
                  {
                    check: Validators.required,
                    message: "this field is required",
                  },
                ]}
                onChange={this.handleChange("address")}
              />
              <InputField
                value={city}
                placeholder="Enter your current city"
                inputClass="form-input"
                labelClass="details-form-label"
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

              <h3 className="section-heading">Contact Information</h3>
              <InputField
                value={email}
                placeholder="xyz@email.com"
                inputClass="form-input"
                labelClass="details-form-label"
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
                placeholder="9999-999-999"
                inputClass="form-input"
                labelClass="details-form-label"
                type="number"
                label="Mobile Number"
                validators={[
                  {
                    check: Validators.required,
                    message: "this field is required",
                  },
                ]}
                onChange={this.handleChange("mnumber")}
              />

              <h3 className="section-heading">Education</h3>
              <InputField
                value={degree}
                placeholder="B.Tech, MBA, PhD"
                inputClass="form-input"
                labelClass="details-form-label"
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
                value={fieldstudy}
                placeholder="Computer Science, Nursing etc."
                inputClass="form-input"
                labelClass="details-form-label"
                type="text"
                label="Field of Study"
                validators={[
                  {
                    check: Validators.required,
                    message: "this field is required",
                  },
                ]}
                onChange={this.handleChange("fieldstudy")}
              />
              <InputField
                value={college}
                placeholder="IIT Madras, VIT"
                inputClass="form-input"
                labelClass="details-form-label"
                type="text"
                label="College Or University"
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
                placeholder="Chennai, Delhi"
                inputClass="form-input"
                labelClass="details-form-label"
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
              <Checkbox
                label="I currently go here"
                selected={acceptance}
                onChange={this.handleCheckbox}
              />
              <InputField
                value={collegefrom}
                placeholder=""
                inputClass="form-input"
                labelClass="details-form-label"
                type="text"
                label="From"
                validators={[
                  {
                    check: Validators.required,
                    message: "this field is required",
                  },
                ]}
                onChange={this.handleChange("collegefrom")}
              />
              <InputField
                value={collegeto}
                placeholder=""
                inputClass="form-input"
                labelClass="details-form-label"
                type="text"
                label="To"
                validators={[
                  {
                    check: Validators.required,
                    message: "this field is required",
                  },
                ]}
                onChange={this.handleChange("collegeto")}
              />
              <div className="hr-line"></div>

              <h3 className="section-heading">Work Experience</h3>
              <InputField
                value={jobtitle}
                placeholder="Android Developer, php Developer"
                inputClass="form-input"
                labelClass="details-form-label"
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
              <InputField
                value={company}
                placeholder="IT Solution private limited"
                inputClass="form-input"
                labelClass="details-form-label"
                type="text"
                label="Company"
                validators={[
                  {
                    check: Validators.required,
                    message: "this field is required",
                  },
                ]}
                onChange={this.handleChange("company")}
              />
              <InputField
                value={companycity}
                placeholder="Mumbai, Kolkata"
                inputClass="form-input"
                labelClass="details-form-label"
                type="text"
                label="Company City"
                validators={[
                  {
                    check: Validators.required,
                    message: "this field is required",
                  },
                ]}
                onChange={this.handleChange("companycity")}
              />

              <div className="form-info time-period">
                <span className="details-form-label time-period-label">
                  Time Period
                </span>
                <Checkbox
                  label="I currently work here"
                  selected={acceptance}
                  onChange={this.handleCheckbox}
                />

                <InputField
                  value={companyfrom}
                  placeholder=""
                  inputClass="form-input"
                  labelClass="details-form-label"
                  type="text"
                  label="From"
                  validators={[
                    {
                      check: Validators.required,
                      message: "this field is required",
                    },
                  ]}
                  onChange={this.handleChange("companyfrom")}
                />
                <InputField
                  value={companyto}
                  placeholder=""
                  inputClass="form-input"
                  labelClass="details-form-label"
                  type="text"
                  label="To"
                  validators={[
                    {
                      check: Validators.required,
                      message: "this field is required",
                    },
                  ]}
                  onChange={this.handleChange("companyto")}
                />
              </div>
              <TextArea
                value={companydesc}
                placeholder=""
                inputClass="form-input"
                labelClass="details-form-label"
                type="text"
                label="Description"
                rows="10"
                cols="45"
                validators={[
                  {
                    check: Validators.required,
                    message: "this field is required",
                  },
                ]}
                onChange={this.handleChange("companydesc")}
              />

              <h3>Skills / IT Skills</h3>
              <b>Recommendation:</b>
              <span>include 3-5 of your top skills to help you stand out</span>
              <InputField
                value={newskill}
                placeholder="php, javascript, wordpress"
                inputClass="form-input"
                labelClass="details-form-label"
                type="text"
                label="Add New Skill"
                validators={[
                  {
                    check: Validators.required,
                    message: "this field is required",
                  },
                ]}
                onChange={this.handleChange("newskill")}
              />

              <div className="save-detail">
                <Button onClick={this.handleClick} value="Save" />
              </div>
            </form>
          </div>
          {/* <!-- form-2 ends  --> */}
        </section>
      </div>
    );
  }
}
