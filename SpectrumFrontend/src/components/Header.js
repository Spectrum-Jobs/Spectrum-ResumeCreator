import React, { Component } from "react";

import "./FormStyles.css";
import { Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <ul className="navbar">
              <li>
                <Link to="/react-spectrum-jobs">Home</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to="/Signup">Signup</Link>
              </li>
              <li>
                <Link to="/CandidateProfile">Candidate Profile</Link>
              </li>
              <li>
                <Link to="/UserDetail">Candidate Detail</Link>
              </li>
              <li>
                <Link to="/EmployerSearch">Employer Search</Link>
              </li>
              <li>
                <Link to="/EmployerConnect">Employer Connect</Link>
              </li>
              <li>
                <Link to="/EmployerProfile">Employer Profile</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}
