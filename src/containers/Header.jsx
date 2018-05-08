import React from 'react';
import { Navbar, Nav, NavDropdown, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => (
  <Navbar inverse collapseOnSelect fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Speedrun</a>
      </Navbar.Brand>
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
            <NavItem eventKey={1.11}>Simon</NavItem>
          </LinkContainer>
        </NavDropdown>

        <NavDropdown eventKey={1} title="Data Vis" id="basic-nav-dropdown">
          <LinkContainer to="/DataVis/MarkdownPreviewer">
            <NavItem eventKey={1.1}>Markdown Previewer</NavItem>
          </LinkContainer>
          <LinkContainer to="/DataVis/CamperLeaderboard">
            <NavItem eventKey={1.2}>Camper Leaderboard</NavItem>
          </LinkContainer>
          <LinkContainer to="/DataVis/RecipeBox">
            <NavItem eventKey={1.3}>Recipe Box</NavItem>
          </LinkContainer>
          <LinkContainer to="/DataVis/GameofLive">
            <NavItem eventKey={1.4}>Game of Life</NavItem>
          </LinkContainer>
          <LinkContainer to="/DataVis/RoguelikeGame">
            <NavItem eventKey={1.5}>Rogue Like Dungeon Crawler</NavItem>
          </LinkContainer>
          <LinkContainer to="/DataVis/BarChart">
            <NavItem eventKey={1.6}>Bar Chart</NavItem>
          </LinkContainer>
          <LinkContainer to="/DataVis/ScatterplotGraph">
            <NavItem eventKey={1.7}>Scatterplot Graph</NavItem>
          </LinkContainer>
          <LinkContainer to="/DataVis/HeatMap">
            <NavItem eventKey={1.8}>Heat Map</NavItem>
          </LinkContainer>
          <LinkContainer to="/DataVis/ForceDirectedGraph">
            <NavItem eventKey={1.9}>Force Directed Graph</NavItem>
          </LinkContainer>
          <LinkContainer to="/DataVis/DataAcrosstheGlobe">
            <NavItem eventKey={1.11}>Data Across The Globe</NavItem>
          </LinkContainer>
        </NavDropdown>

        <NavDropdown eventKey={1} title="Back End" id="basic-nav-dropdown">
          <LinkContainer to="/BackEnd/TimestampMicroservice">
            <NavItem eventKey={1.1}>Timestamp Microservice</NavItem>
          </LinkContainer>
          <LinkContainer to="/BackEnd/RequestHeaderParser">
            <NavItem eventKey={1.2}>Request Header Parser</NavItem>
          </LinkContainer>
          <LinkContainer to="/BackEnd/URLShortener">
            <NavItem eventKey={1.3}>URL Shortener</NavItem>
          </LinkContainer>
          <LinkContainer to="/BackEnd/ImageSearch">
            <NavItem eventKey={1.4}>Image Search Abstraction Layer</NavItem>
          </LinkContainer>
          <LinkContainer to="/BackEnd/FileMetadata">
            <NavItem eventKey={1.5}>File Metadata Microservice</NavItem>
          </LinkContainer>
          <LinkContainer to="/BackEnd/VotingApp">
            <NavItem eventKey={1.6}>Voting App</NavItem>
          </LinkContainer>
          <LinkContainer to="/BackEnd/NightlifeCoordination">
            <NavItem eventKey={1.7}>Nighlife Coordination</NavItem>
          </LinkContainer>
          <LinkContainer to="/BackEnd/StockMarket">
            <NavItem eventKey={1.8}>Chart the Stock Market</NavItem>
          </LinkContainer>
          <LinkContainer to="/BackEnd/BookTradingClub">
            <NavItem eventKey={1.9}>Book Trading Club</NavItem>
          </LinkContainer>
          <LinkContainer to="/BackEnd/PinterestClone">
            <NavItem eventKey={1.11}>Pinterest Clone</NavItem>
          </LinkContainer>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
