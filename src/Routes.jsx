import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from './containers';
import BookTradingClub from './containers/Backend/BookTradingClub/BookTradingClub';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/BookTradingClub" component={BookTradingClub} />
  </Switch>
);

export default Routes;
