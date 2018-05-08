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

    <Route path="/BackEnd/BookTradingClub" component={BookTradingClub} />
    <Route path="/BackEnd/FileMetadata" component={FileMetadata} />
    <Route path="/BackEnd/ImageSearch" component={ImageSearch} />
    <Route
      path="/BackEnd/NightlifeCoordination"
      component={NightlifeCoordination}
    />
    <Route path="/BackEnd/PinterestClone" component={PinterestClone} />
    <Route
      path="/BackEnd/RequestHeaderParser"
      component={RequestHeaderParser}
    />
    <Route path="/BackEnd/StockMarket" component={StockMarket} />
    <Route
      path="/BackEnd/TimestampMicroservice"
      component={TimestampMicroservice}
    />
    <Route path="/BackEnd/URLShortener" component={URLShortener} />
    <Route path="/BackEnd/VotingApp" component={VotingApp} />

    <Route path="/DataVis/BarChart" component={BarChart} />
    <Route path="/DataVis/CamperLeaderboard" component={CamperLeaderboard} />
    <Route path="/DataVis/DataAcrosstheGlobe" component={DataAcrosstheGlobe} />
    <Route path="/DataVis/ForceDirectedGraph" component={ForceDirectedGraph} />
    <Route path="/DataVis/GameofLive" component={GameofLive} />
    <Route path="/DataVis/HeatMap" component={HeatMap} />
    <Route path="/DataVis/MarkdownPreviewer" component={MarkdownPreviewer} />
    <Route path="/DataVis/RecipeBox" component={RecipeBox} />
    <Route path="/DataVis/RoguelikeGame" component={RoguelikeGame} />
    <Route path="/DataVis/ScatterplotGraph" component={ScatterplotGraph} />

    <Route path="/FrontEnd/Calculator" component={Calculator} />
    <Route path="/FrontEnd/LocalWeather" component={LocalWeather} />
    <Route
      path="/FrontEnd/PersonalPortfolioWebpage"
      component={PersonalPortfolioWebpage}
    />
    <Route path="/FrontEnd/PomodoroClock" component={PomodoroClock} />
    <Route path="/FrontEnd/RandomQuoteMachine" component={RandomQuoteMachine} />
    <Route path="/FrontEnd/SimonGame" component={SimonGame} />
    <Route path="/FrontEnd/TicTacToeGame" component={TicTacToeGame} />
    <Route path="/FrontEnd/TributePage" component={TributePage} />
    <Route path="/FrontEnd/Twitchtv" component={Twitchtv} />
    <Route path="/FrontEnd/WikipediaViewer" component={WikipediaViewer} />
  </Switch>
);

export default Routes;
