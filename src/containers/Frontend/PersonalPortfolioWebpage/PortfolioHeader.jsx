import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

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
        <NavItem
          eventKey={1}
          href="/react-speedrun/#/Frontend/PersonalPortfolioWebpage/#about"
        >
          About
        </NavItem>
        <NavItem
          eventKey={2}
          href="/react-speedrun/#/Frontend/PersonalPortfolioWebpage/#portfolio"
        >
          Portfolio
        </NavItem>
        <NavItem
          eventKey={3}
          href="/react-speedrun/#/Frontend/PersonalPortfolioWebpage/#contact"
        >
          Contact
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default PortfolioHeader;
