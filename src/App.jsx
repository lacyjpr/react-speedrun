import React from 'react';
import { HashRouter } from 'react-router-dom';

import Routes from './Routes';
import Header from './containers/Header';

const App = () => (
  <HashRouter>
    <main className="container">
      <Header />
      <Routes />
    </main>
  </HashRouter>
);

export default App;
