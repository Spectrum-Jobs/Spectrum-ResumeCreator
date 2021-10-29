import React, { Component } from "react";

import { Validators } from "../utilities/Validator";
import InputField from "./InputField/index";
import Button from "./Button/index";
import Checkbox from "./Checkbox/index";
import Header from "./Header";
import { Link } from "react-router-dom";
import "./Employer.css";

export default class App extends Component {
  state = {
    city: "",
    skills: "",
    acceptance: false,
  };

  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  };

  handleClick = (event) => {
    event.preventDefault();
    alert("Button Clicked");
  };

  handleCheckbox = (acceptance) => {
    this.setState({ acceptance });
  };

  render() {
    const { city, skills, acceptance } = this.state;

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
          <div className="employer-connect-main-section">
            <div className="filters">
              <h4>Search Filters</h4>
              <div className="filter-by">
                <span className="filter-heading">Degree</span>

                <div className="filter-by-content-display filter-by-content-active">
                  <div className="filter-by-content">
                    <span className="filter-by-text">
                      <input type="checkbox" className="filter-by-checkbox" />
                      B.Sc
                    </span>
                    <span className="filter-by-text">
                      <input type="checkbox" className="filter-by-checkbox" />
                      M.tech
                    </span>
                    <span className="filter-by-text">
                      <input type="checkbox" className="filter-by-checkbox" />
                      MBA
                    </span>
                    <span className="filter-by-text">
                      <input type="checkbox" className="filter-by-checkbox" />
                      B.Com
                    </span>
                  </div>
                </div>
              </div>
              {/* filter-by ends  */}
              <div className="filter-by">
                <span className="filter-heading">Total Experience</span>

                <div className="filter-by-content-display filter-by-content-active">
                  <div className="filter-by-content">
                    <span className="filter-by-text">
                      <input type="checkbox" className="filter-by-checkbox" />
                      0-1 Yrs
                    </span>
                    <span className="filter-by-text">
                      <input type="checkbox" className="filter-by-checkbox" />
                      1-2 Yrs
                    </span>
                    <span className="filter-by-text">
                      <input type="checkbox" className="filter-by-checkbox" />
                      0-5 Yrs
                    </span>
                    <span className="filter-by-text">
                      <input type="checkbox" className="filter-by-checkbox" />
                      5+ Yrs
                    </span>
                  </div>
                </div>
              </div>
              {/* filter-by ends  */}
              <div className="filter-by">
                <span className="filter-heading">Current Salary</span>

                <div className="filter-by-content-display filter-by-content-active">
                  <div className="filter-by-content">
                    <span className="filter-by-text">
                      <input type="checkbox" className="filter-by-checkbox" />
                      &lt; 10K
                    </span>
                    <span className="filter-by-text">
                      <input type="checkbox" className="filter-by-checkbox" />
                      &lt; 25K &gt;
                    </span>
                    <span className="filter-by-text">
                      <input type="checkbox" className="filter-by-checkbox" />
                      25k &lt; 50k &gt;
                    </span>
                    <span className="filter-by-text">
                      <input type="checkbox" className="filter-by-checkbox" />
                      &gt; 50k
                    </span>
                  </div>
                </div>
              </div>
              {/* filter-by ends  */}
            </div>
            {/* filters ends  */}
            <div className="connect">
              <div className="connect-heading">
                <h4>Total Resume</h4>
                <span>2564</span>
              </div>
              {/* connect heading ends  */}
              <div className="connect-main">
                <div className="connect-main-field">
                  <Checkbox
                    label=""
                    styleClass="connect-checkbox"
                    selected={acceptance}
                    onChange={this.handleCheckbox}
                  />
                  <div className="connect-candidate-info">
                    <div className="connect-candidate-info-top">
                      <span className="connect-candidate-info-text">
                        M.tech
                      </span>
                      <span className="connect-candidate-info-text">
                        March, 2011
                      </span>
                      <span className="connect-candidate-info-text">9 Yrs</span>
                      <span className="connect-candidate-info-text">
                        10 Lac
                      </span>
                      <span className="connect-candidate-info-text">
                        15 Lac
                      </span>
                      <span className="connect-candidate-info-text">Male</span>
                      <span className="connect-candidate-info-text">
                        Married
                      </span>
                      <span className="connect-candidate-info-text">35</span>
                      <span className="connect-candidate-info-text">Delhi</span>
                    </div>
                    <div className="connect-candidate-info-bottom">
                      <h4>Work Experience</h4>
                      <div className="connect-bottom-text">
                        <span className="connect-candidate-info-text">
                          Company Name :
                        </span>
                        <span className="connect-candidate-info-text">
                          IT solution pvt. ltd.
                        </span>
                      </div>
                      <div className="connect-bottom-text">
                        <span className="connect-candidate-info-text">
                          Designation :
                        </span>
                        <span className="connect-candidate-info-text">
                          Manager
                        </span>
                      </div>
                      <div className="connect-bottom-text">
                        <span className="connect-candidate-info-text">
                          Duration :
                        </span>
                        <span className="connect-candidate-info-text">
                          From
                        </span>
                        <span className="connect-candidate-info-text">To</span>
                      </div>
                      <div className="connect-bottom-text">
                        <span className="connect-candidate-info-text connect-dn">
                          display none
                        </span>
                        <span className="connect-candidate-info-text">
                          March, 2008
                        </span>
                        <span className="connect-candidate-info-text">
                          March, 2011
                        </span>
                      </div>
                      <div className="connect-bottom-text">
                        <span className="connect-candidate-info-text">
                          Job Role :
                        </span>
                        <span className="connect-candidate-info-text">
                          some text about job role
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button onClick={this.handleClick} value="Connect" />
                </div>
                <div className="connect-main-field">
                  <Checkbox
                    label=""
                    styleClass="connect-checkbox"
                    selected={acceptance}
                    onChange={this.handleCheckbox}
                  />
                  <div className="connect-candidate-info">
                    <div className="connect-candidate-info-top">
                      <span className="connect-candidate-info-text">
                        M.tech
                      </span>
                      <span className="connect-candidate-info-text">
                        March, 2011
                      </span>
                      <span className="connect-candidate-info-text">9 Yrs</span>
                      <span className="connect-candidate-info-text">
                        10 Lac
                      </span>
                      <span className="connect-candidate-info-text">
                        15 Lac
                      </span>
                      <span className="connect-candidate-info-text">Male</span>
                      <span className="connect-candidate-info-text">
                        Married
                      </span>
                      <span className="connect-candidate-info-text">35</span>
                      <span className="connect-candidate-info-text">Delhi</span>
                    </div>
                    <div className="connect-candidate-info-bottom">
                      <h4>Work Experience</h4>
                      <div className="connect-bottom-text">
                        <span className="connect-candidate-info-text">
                          Company Name :
                        </span>
                        <span className="connect-candidate-info-text">
                          IT solution pvt. ltd.
                        </span>
                      </div>
                      <div className="connect-bottom-text">
                        <span className="connect-candidate-info-text">
                          Designation :
                        </span>
                        <span className="connect-candidate-info-text">
                          Manager
                        </span>
                      </div>
                      <div className="connect-bottom-text">
                        <span className="connect-candidate-info-text">
                          Duration :
                        </span>
                        <span className="connect-candidate-info-text">
                          From
                        </span>
                        <span className="connect-candidate-info-text">To</span>
                      </div>
                      <div className="connect-bottom-text">
                        <span className="connect-candidate-info-text connect-dn">
                          display none
                        </span>
                        <span className="connect-candidate-info-text">
                          March, 2008
                        </span>
                        <span className="connect-candidate-info-text">
                          March, 2011
                        </span>
                      </div>
                      <div className="connect-bottom-text">
                        <span className="connect-candidate-info-text">
                          Job Role :
                        </span>
                        <span className="connect-candidate-info-text">
                          some text about job role
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button onClick={this.handleClick} value="Connect" />
                </div>
                <div className="connect-main-field">
                  <Checkbox
                    label=""
                    styleClass="connect-checkbox"
                    selected={acceptance}
                    onChange={this.handleCheckbox}
                  />
                  <div className="connect-candidate-info">
                    <div className="connect-candidate-info-top">
                      <span className="connect-candidate-info-text">
                        M.tech
                      </span>
                      <span className="connect-candidate-info-text">
                        March, 2011
                      </span>
                      <span className="connect-candidate-info-text">9 Yrs</span>
                      <span className="connect-candidate-info-text">
                        10 Lac
                      </span>
                      <span className="connect-candidate-info-text">
                        15 Lac
                      </span>
                      <span className="connect-candidate-info-text">Male</span>
                      <span className="connect-candidate-info-text">
                        Married
                      </span>
                      <span className="connect-candidate-info-text">35</span>
                      <span className="connect-candidate-info-text">Delhi</span>
                    </div>
                    <div className="connect-candidate-info-bottom">
                      <h4>Work Experience</h4>
                      <div className="connect-bottom-text">
                        <span className="connect-candidate-info-text">
                          Company Name :
                        </span>
                        <span className="connect-candidate-info-text">
                          IT solution pvt. ltd.
                        </span>
                      </div>
                      <div className="connect-bottom-text">
                        <span className="connect-candidate-info-text">
                          Designation :
                        </span>
                        <span className="connect-candidate-info-text">
                          Manager
                        </span>
                      </div>
                      <div className="connect-bottom-text">
                        <span className="connect-candidate-info-text">
                          Duration :
                        </span>
                        <span className="connect-candidate-info-text">
                          From
                        </span>
                        <span className="connect-candidate-info-text">To</span>
                      </div>
                      <div className="connect-bottom-text">
                        <span className="connect-candidate-info-text connect-dn">
                          display none
                        </span>
                        <span className="connect-candidate-info-text">
                          March, 2008
                        </span>
                        <span className="connect-candidate-info-text">
                          March, 2011
                        </span>
                      </div>
                      <div className="connect-bottom-text">
                        <span className="connect-candidate-info-text">
                          Job Role :
                        </span>
                        <span className="connect-candidate-info-text">
                          some text about job role
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button onClick={this.handleClick} value="Connect" />
                </div>
                {/* connect-main-field ends  */}
              </div>
              {/* connect-main ends  */}
            </div>
            {/* connect ends  */}
          </div>
          {/* employer connect main section ends  */}
        </section>
      </div>
    );
  }
}
