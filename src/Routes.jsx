import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Home,
  About,
  BookTradingClub,
  FileMetadata,
  ImageSearch,
  NightlifeCoordination,
  PinterestClone,
  RequestHeaderParser,
  StockMarket,
  TimestampMicroservice,
  URLShortener,
  VotingApp,
  BarChart,
  CamperLeaderboard,
  DataAcrosstheGlobe,
  ForceDirectedGraph,
  GameofLive,
  HeatMap,
  MarkdownPreviewer,
  RecipeBox,
  RoguelikeGame,
  ScatterplotGraph,
  Calculator,
  LocalWeather,
  PersonalPortfolioWebpage,
  PomodoroClock,
  RandomQuoteMachine,
  SimonGame,
  TicTacToeGame,
  TributePage,
  Twitchtv,
  WikipediaViewer,
} from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    {/* Backend */}
    <Route path="/BookTradingClub" component={BookTradingClub} />
    <Route path="/FileMetadata" component={FileMetadata} />
    <Route path="/ImageSearch" component={ImageSearch}/>
    <Route path="/NightlifeCoordination" component={NightlifeCoordination}/>
    <Route path="/PinterestClone" component={PinterestClone}/>
    <Route path="/RequestHeaderParser" component={RequestHeaderParser}/>
    <Route path="/StockMarket" component={StockMarket}/>
    <Route path="/TimestampMicroservice" component={TimestampMicroservice}/>
    <Route path="/URLShortener" component={URLShortener}/>
    <Route path="/VotingApp" component={VotingApp}/>
    {/* DataVis */}
    <Route path="/BarChart" component={BarChart}/>
    <Route path=

  ,
  ,
  DataAcrosstheGlobe,
  ForceDirectedGraph,
  GameofLive,
  HeatMap,
  MarkdownPreviewer,
  RecipeBox,
  RoguelikeGame,
  ScatterplotGraph,
  Calculator,
  LocalWeather,
  PersonalPortfolioWebpage,
  PomodoroClock,
  RandomQuoteMachine,
  SimonGame,
  TicTacToeGame,
  TributePage,
  Twitchtv,
  WikipediaViewer,
  </Switch>
);

export default Routes;
