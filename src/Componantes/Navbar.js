import React from 'react';
import { Link , NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
        <div className="solid_bar">
    <div className="container">
      <div className="row">
        <div className="text-secondary contact col-lg-6 col-md-8 col-sm-12 text-lg-start text-md-start text-center">
          <span className="me-3">
            <i className="fa fa-phone"> 01280716919</i>
          </span>
          <span>
            <i className="fa-solid fa-envelope" /> m7md.ayman1993@gmail.com
          </span>
        </div>
        <div className="social col-lg-6 col-md-4 col-sm-12 text-secondary text-lg-end text-md-end text-center">
          <i className="fa-brands fa-pinterest" />
          <i className="fa-brands fa-linkedin" />
          <i className="fa-brands fa-google-plus" />
          <i className="fa-brands fa-twitter" />
          <i className="fa-brands fa-facebook" />
        </div>
      </div>
    </div>
  </div>
  <div className="main_navbar">
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="Imagies/logo.png" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className=" collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/Feature">
                  FEATURES
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/Serveic">
                  SERVICE
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/portfolio">
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  TEAM
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  CLIENTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  PRICING
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  NEWS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
  
    </>
  );
}

export default Navbar;
