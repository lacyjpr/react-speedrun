import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

const Header = () => (
  <Navbar inverse collapseOnSelect fixedTop>
    <Navbar.Header>
      <Navbar.Brand>React-Speedrun</Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavDropdown eventKey={1} title="Projects" id="basic-nav-dropdown">
          <MenuItem eventKey={1.1}>
            <Link to="/FrontEnd/TributePage">Tribute Page</Link>
          </MenuItem>
          <MenuItem eventKey={1.2}>Another action</MenuItem>
          <MenuItem eventKey={1.3}>Something else here</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
