import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

const PortfolioHeader = () => (
  // <Navbar inverse collapseOnSelect className="PersonalPortfolioWebpage__nav">
  //   <Navbar.Header>
  //     <Navbar.Brand>
  //       <a href="#brand">Jean-Paul Lacy</a>
  //     </Navbar.Brand>
  //     <Navbar.Toggle />
  //   </Navbar.Header>
  //   <Navbar.Collapse>
  <nav className="navbar navbar-default navbar-inverse PersonalPortfolioWebpage__nav">
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
            <a href="/#/Frontend/PersonalPortfolioWebpage/#about">About</a>
          </li>
          <li>
            <a href="/#/Frontend/PersonalPortfolioWebpage/#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a href="/#/Frontend/PersonalPortfolioWebpage/#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  //     <Nav pullRight>
  //       <NavItem
  //         eventKey={1}
  //         href="/react-speedrun/#/Frontend/PersonalPortfolioWebpage/#about"
  //       >
  //         About
  //       </NavItem>
  //       <NavItem
  //         eventKey={2}
  //         href="/react-speedrun/#/Frontend/PersonalPortfolioWebpage/#portfolio"
  //       >
  //         Portfolio
  //       </NavItem>
  //       <NavItem
  //         eventKey={3}
  //         href="/react-speedrun/#/Frontend/PersonalPortfolioWebpage/#contact"
  //       >
  //         Contact
  //       </NavItem>
  //     </Nav>
  //   </Navbar.Collapse>
  // </Navbar>
);

export default PortfolioHeader;
