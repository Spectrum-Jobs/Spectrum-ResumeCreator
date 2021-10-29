import React, { Component } from "react";

import { Validators } from "../utilities/Validator";
import InputField from "./InputField/index";
import Button from "./Button/index";
import TextArea from "./TextArea/index";
import Header from "./Header";
import { Link } from "react-router-dom";
import "./Employer.css";

export default class App extends Component {
  state = {
    city: "",
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
      city,
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
      disabled,
      textareadisabled,
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
              <Link to={"/Signup"} className="signin-link">
                <span className="signin">Sign In</span>
              </Link>
            </div>
          </div>
          {/* employer top ends  */}
          <form className="search-form" action="#">
            <div className="search-form-field">
              <InputField
                value={city}
                placeholder="Search By City"
                inputClass="search-input"
                labelClass="details-form-label"
                type="text"
                label=""
                validators={[
                  {
                    check: Validators.required,
                    message: "this field is required",
                  },
                ]}
                onChange={this.handleChange("city")}
              />
              <InputField
                value={skills}
                placeholder="Search By Skills, Designation, Companies"
                inputClass="search-input"
                labelClass="details-form-label"
                type="text"
                label=""
                validators={[
                  {
                    check: Validators.required,
                    message: "this field is required",
                  },
                ]}
                onChange={this.handleChange("skills")}
              />
            </div>
            {/* search-form-field end */}
            <Button onClick={this.handleClick} value="Search" />
          </form>
          <div className="employer-example">
            <form className="candidate-detail-right-form">
              <div className="details-section right-detail-section">
                <div className="candidate-detail-right">
                  <InputField
                    value={rightdegree}
                    placeholder="B.Tech."
                    inputClass="candidate-detail-input"
                    labelClass="candidate-detail-form-label"
                    type="text"
                    label="Degree"
                    disabled={true}
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
                    placeholder="2013"
                    inputClass="candidate-detail-input"
                    labelClass="candidate-detail-form-label"
                    type="text"
                    label="Degree Year"
                    disabled={true}
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
                    placeholder="8 Yrs"
                    inputClass="candidate-detail-input"
                    labelClass="candidate-detail-form-label"
                    type="text"
                    label="Total Yrs Exp"
                    disabled={true}
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
                    placeholder="50K"
                    inputClass="candidate-detail-input"
                    labelClass="candidate-detail-form-label"
                    type="text"
                    label="Current CTC"
                    disabled={true}
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
                    placeholder="65K"
                    inputClass="candidate-detail-input"
                    labelClass="candidate-detail-form-label"
                    type="text"
                    label="Expected CTC"
                    disabled={true}
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
                    placeholder="Male"
                    inputClass="candidate-detail-input"
                    labelClass="candidate-detail-form-label"
                    type="text"
                    label="Gender"
                    disabled={true}
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
                    placeholder="Single"
                    inputClass="candidate-detail-input"
                    labelClass="candidate-detail-form-label"
                    type="text"
                    label="Marital Status"
                    disabled={true}
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
                    placeholder="28"
                    inputClass="candidate-detail-input"
                    labelClass="candidate-detail-form-label"
                    type="text"
                    label="Age"
                    disabled={true}
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
                    placeholder="Pune"
                    inputClass="candidate-detail-input"
                    labelClass="candidate-detail-form-label"
                    type="text"
                    label="Current City"
                    disabled={true}
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
                    placeholder="IT Software Lt. Pune"
                    inputClass="candidate-detail-input"
                    labelClass="candidate-detail-form-label"
                    type="text"
                    label="Company Name"
                    disabled={true}
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
                    placeholder="Manager"
                    inputClass="candidate-detail-input"
                    labelClass="candidate-detail-form-label"
                    type="text"
                    label="Designation"
                    disabled={true}
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
                    placeholder="Jan 2018"
                    inputClass="candidate-detail-input"
                    labelClass="candidate-detail-form-period-label"
                    type="text"
                    label="From"
                    disabled={true}
                    validators={[
                      {
                        check: Validators.required,
                        message: "this field is required",
                      },
                    ]}
                    onChange={this.handleChange("rightdurationfrom")}
                  />
                  {/* <div className="employer-sample-data">
                    <span className="sample-tag">To</span>
                    <span className="sample-data">Nov, 2021</span>
                  </div> */}
                  <InputField
                    value={rightdurationto}
                    placeholder="Nov, 2021"
                    inputClass="candidate-detail-input"
                    labelClass="candidate-detail-form-period-label"
                    type="text"
                    label="To"
                    disabled={true}
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
                    placeholder="Lead a team of sales associates."
                    inputClass="candidate-detail-textarea"
                    labelClass="candidate-detail-textarea-label"
                    type="text"
                    label="Job Role"
                    rows="10"
                    cols="65"
                    textareadisabled={true}
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
              {/* <Button onClick={this.handleClick} value="Save" /> */}
            </form>
          </div>
        </section>
      </div>
    );
  }
}
