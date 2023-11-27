import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mx-auto">
  <Link class="navbar-brand ml-auto" to="/">
    <img src="Assets/logo.png" alt="Logo" width="100" height="100" />
  </Link>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <Link class="nav-link" to="/home">
          Overview
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/features">
          Features
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/getting-started">
          Getting Started
        </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/contact-us">
          Contact Us
        </Link>
      </li>
    </ul>
  </div>
</nav>



  );
}

export default NavBar;
