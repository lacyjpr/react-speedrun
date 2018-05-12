import React from 'react';

import { HashLink as Link } from 'react-router-hash-link';
import { Navbar, Nav } from 'react-bootstrap';

const PortfolioHeader = () => (
  <Navbar inverse collapseOnSelect className="PersonalPortfolioWebpage__nav">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#brand">Jean-Paul Lacy</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <Link to="#about" className="PersonalPortfolioWebpage__link">
          About
        </Link>
        <Link to="#portfolio" className="PersonalPortfolioWebpage__link">
          Portfolio
        </Link>
        <Link to="#contact" className="PersonalPortfolioWebpage__link">
          Contact
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default PortfolioHeader;

{
  /* <nav className="navbar navbar-default navbar-inverse PersonalPortfolioWebpage__nav">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navigation"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle Navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="#">
          Jean-Paul Lacy
        </a>
      </div>
      <div className="collapse navbar-collapse navbar-right" id="navigation">
        <ul className="nav navbar-nav" role="tablist">
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="#portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav> */
}
