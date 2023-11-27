import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <Link className="navbar-brand" to="/">
        <img src="Assets/logo.png" alt="Logo" width="50" height="50" />
      </Link>
      <button
        className="navbar-toggler ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              Overview
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/features">
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/getting-started">
              Getting Started
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact-us">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
