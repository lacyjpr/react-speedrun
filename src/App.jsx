import React from 'react';
import { HashRouter, Link } from 'react-router-dom';

import Routes from './Routes';
import Header from './containers/Header';

import reactLogo from './assets/React-icon.png';

const App = () => (
  <HashRouter>
    <main className="container">
      <Header />
      <div>
        <h1>hello world!</h1>
        <img className="container__image" alt="react logo" src={reactLogo} />
        <p>If you see this everything is working properly!</p>
      </div>
      <ul className="left">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/BookTradingClub">BookTradingClub</Link>
        </li>
      </ul>
      <div>
        <Routes />
      </div>
    </main>
  </HashRouter>
);

export default App;
