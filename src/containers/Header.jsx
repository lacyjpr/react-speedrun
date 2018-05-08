import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => (
  <Navbar inverse collapseOnSelect fixedTop>
    <Navbar.Header>
      <Navbar.Brand>React-Speedrun</Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavDropdown eventKey={1} title="Front End" id="basic-nav-dropdown">
          <LinkContainer to="/Frontend/TributePage">
            <NavItem eventKey={1.1}>Tribute Page</NavItem>
          </LinkContainer>
          <LinkContainer to="/Frontend/PersonalPortfolioWebpage">
            <NavItem eventKey={1.2}>Personal Portfolio</NavItem>
          </LinkContainer>
          <LinkContainer to="/Frontend/RandomQuoteMachine">
            <NavItem eventKey={1.3}>Random Quote Machine</NavItem>
          </LinkContainer>
          <LinkContainer to="/Frontend/LocalWeather">
            <NavItem eventKey={1.4}>Local Weather</NavItem>
          </LinkContainer>
          <LinkContainer to="/Frontend/WikipediaViewer">
            <NavItem eventKey={1.5}>Wikipedia Viewer</NavItem>
          </LinkContainer>
          <LinkContainer to="/Frontend/Twitchtv">
            <NavItem eventKey={1.6}>Twitch TV</NavItem>
          </LinkContainer>
          <LinkContainer to="/Frontend/Calculator">
            <NavItem eventKey={1.7}>Calculator</NavItem>
          </LinkContainer>
          <LinkContainer to="/Frontend/PomodoroClock">
            <NavItem eventKey={1.8}>Pomodoro Clock</NavItem>
          </LinkContainer>
          <LinkContainer to="/Frontend/TicTacToeGame">
            <NavItem eventKey={1.9}>Tic Tac Toe</NavItem>
          </LinkContainer>
          <LinkContainer to="/Frontend/SimonGame">
            <NavItem eventKey={1.1}>Simon</NavItem>
          </LinkContainer>
        </NavDropdown>

        <NavDropdown eventKey={1} title="Data Vis" id="basic-nav-dropdown">
          <LinkContainer to="/Frontend/TributePage">
            <NavItem eventKey={1.1}>Tribute Page</NavItem>
          </LinkContainer>

          <MenuItem eventKey={1.2}>Another action</MenuItem>
          <MenuItem eventKey={1.3}>Something else here</MenuItem>
        </NavDropdown>

        <NavDropdown eventKey={1} title="Back End" id="basic-nav-dropdown">
          <LinkContainer to="/Frontend/TributePage">
            <NavItem eventKey={1.1}>Tribute Page</NavItem>
          </LinkContainer>

          <MenuItem eventKey={1.2}>Another action</MenuItem>
          <MenuItem eventKey={1.3}>Something else here</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
