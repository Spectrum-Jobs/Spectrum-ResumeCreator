import React, { Component } from "react";

import Header from "./Header";
import "./FormStyles.css";
import { Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main-section">
          <div className="employer">
            <Link to="/EmployerSearch">
              <span className="main-heading">Employer</span>
            </Link>
          </div>
          <div className="job-seeker">
            <Link to="/Candidate">
              <span className="main-heading">Candidate</span>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}
